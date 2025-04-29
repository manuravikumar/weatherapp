import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);  // To manage error messages

  const getWeather = async () => {
    try {
      // Update to use absolute URL (replace with your actual backend URL)
      const response = await fetch(`http://4.237.234.204/api/weather?city=${city}`);
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('City not found or API error');
      }

      const data = await response.json();
      setWeather(data);
      setError(null);  // Reset error if successful
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message);  // Set error message
      setWeather(null); // Reset weather in case of error
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

      {error && <div className="mt-4 text-red-500">{error}</div>}

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
