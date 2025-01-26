import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API Key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch weather by location
  const fetchWeather = async (query) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(BASE_URL, {
        params: {
          q: query,
          appid: API_KEY,
          units: "metric",
        },
      });
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather by current location
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(BASE_URL, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: "metric",
        },
      });
      setWeather(response.data);
    } catch (err) {
      setError("Unable to fetch weather. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Get current location using browser's Geolocation API
  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        () => {
          setError("Unable to access your location.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  useEffect(() => {
    // Fetch weather for current location on load
    getCurrentLocationWeather();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-sans p-4">
      <h1 className="text-3xl font-bold mb-6">Weather Forecast App</h1>

      {/* Search Bar */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 rounded-lg text-black focus:outline-none w-64"
        />
        <button
          onClick={() => fetchWeather(location)}
          className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Weather Display */}
      {loading ? (
        <div className="text-lg">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : weather ? (
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">{weather.name}</h2>
          <p className="text-lg mb-2">{weather.weather[0].description}</p>
          <p className="text-lg font-bold">{weather.main.temp}°C</p>
          <p className="text-sm text-gray-600">
            Feels like {weather.main.feels_like}°C
          </p>
          <p className="text-sm text-gray-600">
            Humidity: {weather.main.humidity}%
          </p>
        </div>
      ) : (
        <div className="text-gray-300">Search or enable location to view weather.</div>
      )}
    </div>
  );
};

export default WeatherApp;
