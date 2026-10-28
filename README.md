# 🌦️ SKYCAST — Weather Dashboard

**Your weather, at a glance.**

SKYCAST is a weather dashboard designed to help users explore weather conditions through a simple, intuitive interface. This project focuses on frontend development, API integration, asynchronous data fetching, and handling loading and error states in a web application.

## ✨ Features

- 🌍 **Weather Information:** Retrieve weather data from a weather API.
- 🔎 **Weather Search:** Look up weather information for a selected location.
- 🌡️ **Weather Display:** Present the available weather details in an easy-to-understand format.
- ⏳ **Loading States:** Provide feedback while weather data is being fetched.
- ⚠️ **Error Handling:** Handle unsuccessful requests and unavailable data gracefully.
- 📱 **Responsive Interface:** Designed to provide a user-friendly experience across screen sizes.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Language:** JavaScript
- **Styling:** CSS
- **Build Tool:** Vite
- **API Integration:** Fetch API or the HTTP client used in the project
- **Version Control:** Git and GitHub

## 📂 Project Structure

```text
SKYCAST/
└── weather-dashboard/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── README.md
```

*The structure above is illustrative; adjust it to match the actual files in your project.*

## 🚀 Getting Started

Follow these steps to run SKYCAST on your local machine.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/LavishaMhjn1910/SKYCAST.git
```

### 2. Navigate to the Project Directory

```bash
cd SKYCAST/weather-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the Weather API

If the project uses an API key, obtain one from your selected weather API provider and configure it according to the project's requirements.

For a Vite application, environment variables exposed to frontend code typically use the `VITE_` prefix.

Example `.env` file:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Replace the example variable with the exact variable name expected by your application.

**Important:** Never commit real API keys or other secrets to GitHub. Add `.env` to `.gitignore` and configure environment variables in your deployment platform when applicable.

If your application uses a public API that does not require a key, this step may not be necessary.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL printed in your terminal, typically:

```text
http://localhost:5173
```

## 💡 How to Use

1. Launch SKYCAST in your browser.
2. Enter or select a location, if supported by the application.
3. View the available weather information.
4. Wait for the API response to load.
5. If a request fails, follow the displayed error message and try again.

## 🎯 Learning Objectives

This project provides practical experience with:

- Building user interfaces using React components.
- Managing component state with React Hooks.
- Fetching data from external APIs.
- Working with asynchronous JavaScript.
- Handling loading, success, and error states.
- Organizing frontend project files.
- Using Git and GitHub for version control.

## 🔮 Future Enhancements

Potential improvements include:

- Automatic location detection.
- Extended hourly and multi-day forecasts.
- Temperature unit conversion between Celsius and Fahrenheit.
- Weather icons and dynamic backgrounds.
- Search history for previously viewed locations.
- Improved accessibility and mobile responsiveness.

## 👩‍💻 Author

**Lavisha Mahajan**

- GitHub: [@LavishaMhjn1910](https://github.com/LavishaMhjn1910)
- Project Repository: [SKYCAST](https://github.com/LavishaMhjn1910/SKYCAST)

## 📄 License

No license has been specified here. Add a `LICENSE` file if you intend to distribute the project under an open-source license.

---

⭐ If you find this project useful, consider giving the repository a star!
