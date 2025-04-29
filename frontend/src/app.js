import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      const response = await fetch(`http://104.209.92.41/api/weather?city=${city}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message || 'Unknown error occurred');
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Weather Dashboard</h1>
      
      <input
        type="text"
        className="border p-2 rounded mb-4 w-full max-w-sm"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded transition duration-200"
        onClick={getWeather}
      >
        Get Weather
      </button>

      {error && (
        <p className="text-red-500 mt-4 font-medium">{error}</p>
      )}

      {weather && (
        <div className="weather-card">
          <h2>{weather.city}</h2>
          <p>🌡️ Temperature: {weather.temp} °C</p>
          <p>💧 Humidity: {weather.humidity} %</p>
          <p>🌬️ Wind Speed: {weather.wind} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
