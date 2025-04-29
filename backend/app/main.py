import requests
import os

# Your API key (ensure it's set in your environment variables)
API_KEY = os.getenv("OPENWEATHER_API_KEY", "your_actual_api_key")

def get_weather_data(lat, lon, exclude=None, units="metric"):
    url = f"https://api.openweathermap.org/data/3.0/onecall"
    
    # Prepare query parameters
    params = {
        "lat": lat,
        "lon": lon,
        "appid": API_KEY,
        "exclude": exclude,
        "units": units
    }
    
    # Make the API request
    response = requests.get(url, params=params)
    
    # Check for successful request
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "Failed to fetch weather data", "status_code": response.status_code}

# Example usage:
lat = 33.44  # Latitude
lon = -94.04  # Longitude
exclude = "hourly,daily"  # Excluding hourly and daily data for this request

weather_data = get_weather_data(lat, lon, exclude)

# Print the response (optional)
print(weather_data)
