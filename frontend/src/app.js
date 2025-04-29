import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null); // Add error state

  const getWeather = async () => {
    try {
      const response = await fetch(`http://104.209.92.41/api/weather?city=${city}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      setWeather(data);
      setError(null); // Clear previous errors
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message || 'Unknown error occurred');
      setWeather(null); // Clear weather on error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <input
        type="text"
        className="border p-2 rounded mb-4"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={getWeather}
      >
        Get Weather
      </button>

      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      {weather && (
        <div className="mt-8 p-4 bg-white rounded shadow-md text-center">
          <h2 className="text-2xl font-bold">{weather.city}</h2>
          <p>Temperature: {weather.temp} °C</p>
          <p>Humidity: {weather.humidity} %</p>
          <p>Wind Speed: {weather.wind} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;

