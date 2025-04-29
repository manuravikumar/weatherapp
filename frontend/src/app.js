const getWeather = async () => {
  try {
    const response = await fetch(`http://104.209.92.41/api/weather?city=${city}`);
    
    if (!response.ok) {
      const errorText = await response.text(); // Get response body for more detail
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
