// Replace with your OpenWeatherMap API token
const OPENWEATHERMAP_TOKEN = "236bb39302420003220a7db6c237c584";

// Function to handle search
function searchLocation() {
    const input = document.getElementById("location").value;

    if (!input) {
        alert("Please enter a location.");
        return;
    }

    // Fetch and display weather and AQI data
    fetchWeatherData(input);
}

// Fetch weather data from OpenWeatherMap
async function fetchWeatherData(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${OPENWEATHERMAP_TOKEN}`;
    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("City not found.");

        const data = await response.json();
        displayWeatherData(data);
        fetchAQI(data.coord.lat, data.coord.lon);
    } catch (error) {
        alert(error.message);
    }
}

// Display weather data
function displayWeatherData(data) {
    const { name: city, sys, main, weather, wind, visibility } = data;
    const { country, sunrise, sunset } = sys;
    const { temp, feels_like, humidity } = main;
    const description = weather[0].description;

    const mainDiv = document.querySelector(".main");
    mainDiv.innerHTML = `
        <div class="weather-container">
            <h2>Weather in ${city}, ${country}</h2>
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Feels Like:</strong> ${feels_like}°C</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
            <p><strong>Visibility:</strong> ${visibility / 1000} km</p>
            <p><strong>Sunrise:</strong> ${convertToLocalTime(sunrise, data.timezone)}</p>
            <p><strong>Sunset:</strong> ${convertToLocalTime(sunset, data.timezone)}</p>
        </div>
        <div id="aqi-info" style="display: none;"></div>
    `;
}

// Fetch AQI data
async function fetchAQI(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_TOKEN}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        displayAQI(data.list[0].components);
    } catch (error) {
        console.error("Error fetching AQI data:", error);
    }
}

// Display AQI data
function displayAQI(components) {
    const aqi = calculateAQI(components);
    const aqiInfo = document.getElementById("aqi-info");

    let aqiDescription = "";
    let aqiColor = "";

    if (aqi <= 50) {
        aqiDescription = "Good";
        aqiColor = "#00e400";
    } else if (aqi <= 100) {
        aqiDescription = "Moderate";
        aqiColor = "#ffff00";
    } else if (aqi <= 150) {
        aqiDescription = "Unhealthy for Sensitive Groups";
        aqiColor = "#ff7e00";
    } else if (aqi <= 200) {
        aqiDescription = "Unhealthy";
        aqiColor = "#ff0000";
    } else if (aqi <= 300) {
        aqiDescription = "Very Unhealthy";
        aqiColor = "#8f3f97";
    } else {
        aqiDescription = "Hazardous";
        aqiColor = "#7e0023";
    }

    aqiInfo.style.display = "block";
    aqiInfo.innerHTML = `
        <h3>Air Quality Index (AQI)</h3>
        <p style="color: ${aqiColor}; font-weight: bold;">${aqi} - ${aqiDescription}</p>
    `;
}

// Calculate AQI from pollutant concentrations
function calculateAQI(components) {
    const pm25 = components.pm2_5;

    if (pm25 <= 12.1) return linearScale(pm25, 0, 12.1, 0, 50);
    if (pm25 <= 35.5) return linearScale(pm25, 12.1, 35.5, 51, 100);
    if (pm25 <= 55.5) return linearScale(pm25, 35.5, 55.5, 101, 150);
    if (pm25 <= 150.5) return linearScale(pm25, 55.5, 150.5, 151, 200);
    if (pm25 <= 250.5) return linearScale(pm25, 150.5, 250.5, 201, 300);
    return linearScale(pm25, 250.5, 500.5, 301, 500);
}

// Helper function for linear scaling
function linearScale(value, fromLow, fromHigh, toLow, toHigh) {
    return ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow;
}

// Convert UNIX timestamp to local time
function convertToLocalTime(unixTimestamp, timezoneOffset) {
    const localTime = new Date((unixTimestamp + timezoneOffset) * 1000);
    let hours = localTime.getUTCHours();
    const minutes = localTime.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
}
