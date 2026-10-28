
import { useState } from "react";
import "./App.css";

function weatherDescription(code) {
  if (code === 0) return "Clear sky";
  if ([1, 2, 3].includes(code)) return "Partly cloudy";
  if ([45, 48].includes(code)) return "Foggy";
  if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return "Rainy";
  }
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
  if ([95, 96, 99].includes(code)) return "Thunderstorm";
  return "Unknown conditions";
}

function weatherIcon(code) {
  if (code === 0) return "☀️";
  if ([1, 2, 3].includes(code)) return "⛅";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌡️";
}

function App() {
  const [city, setCity] = useState("Amritsar");
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchWeather(event) {
    event.preventDefault();

    const query = city.trim();
    if (!query) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoUrl = new URL(
        "https://geocoding-api.open-meteo.com/v1/search"
      );
      geoUrl.search = new URLSearchParams({
        name: query,
        count: "1",
        language: "en",
        format: "json",
      }).toString();

      const geoResponse = await fetch(geoUrl);

      if (!geoResponse.ok) {
        throw new Error("Unable to search for this city.");
      }

      const geoData = await geoResponse.json();
      const place = geoData.results?.[0];

      if (!place) {
        throw new Error("City not found. Check the spelling and try again.");
      }

      const params = new URLSearchParams({
        latitude: String(place.latitude),
        longitude: String(place.longitude),
        current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
        timezone: "auto",
      });

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?${params}`
      );

      if (!weatherResponse.ok) {
        throw new Error("Unable to fetch weather. Please try again.");
      }

      const weatherData = await weatherResponse.json();

      if (!weatherData.current) {
        throw new Error("Weather data is currently unavailable.");
      }

      setLocation(place);
      setWeather(weatherData.current);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const code = weather?.weather_code;

  return (
    <main className="page">
      <header className="header">
        <div className="brand">☁️ SkyCast</div>
        <span className="tagline">Your daily weather companion</span>
      </header>

      <section className="dashboard">
        <div className="intro">
          <p className="eyebrow">WEATHER DASHBOARD</p>
          <h1>How's the weather?</h1>
          <p>Discover current conditions in any city.</p>
        </div>

        <form className="search" onSubmit={searchWeather}>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city name..."
            aria-label="City name"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {loading && (
          <p className="status" role="status">
            Loading weather data...
          </p>
        )}

        {error && (
          <div className="error" role="alert">
            {error}
          </div>
        )}

        {weather && location && (
          <section className="weather-card" aria-live="polite">
            <div className="location">
              <div>
                <h2>{location.name}</h2>
                <p>
                  {[location.admin1, location.country]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              </div>
              <span className="weather-icon" aria-hidden="true">
                {weatherIcon(code)}
              </span>
            </div>

            <div className="temperature">
              {Math.round(weather.temperature_2m)}°
              <span>C</span>
            </div>

            <p className="condition">
              {weatherDescription(code)}
            </p>

            <div className="details">
              <div className="detail">
                <span>🌡️</span>
                <p>Feels like</p>
                <strong>
                  {Math.round(weather.apparent_temperature)}°C
                </strong>
              </div>
              <div className="detail">
                <span>💧</span>
                <p>Humidity</p>
                <strong>{weather.relative_humidity_2m}%</strong>
              </div>
              <div className="detail">
                <span>💨</span>
                <p>Wind speed</p>
                <strong>{weather.wind_speed_10m} km/h</strong>
              </div>
            </div>

            <p className="updated">
              Weather time: {weather.time.replace("T", " ")}
            </p>
          </section>
        )}

        {!weather && !loading && !error && (
          <div className="empty-state">
            <span>🌤️</span>
            <p>Search for a city to see its current weather.</p>
          </div>
        )}
      </section>

      <footer>
        Weather data provided by{" "}
        <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">
          Open-Meteo
        </a>
      </footer>
    </main>
  );
}

export default App;
