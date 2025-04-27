import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();
    setWeather(data);
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
