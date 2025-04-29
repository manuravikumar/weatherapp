const getWeather = async () => {
  try {
    const response = await fetch(`http://104.209.92.41/api/weather?city=${city}`);
    
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
