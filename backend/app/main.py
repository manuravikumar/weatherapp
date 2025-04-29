from fastapi import FastAPI
import requests

app = FastAPI()

API_KEY = "c51a86e60b8adc73e50727651cbc1bb8"  # Your OpenWeather API key

@app.get("/api/weather")
async def get_weather(city: str):
    # Construct the OpenWeather API URL with the city and your API key
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    
    # Make the request to OpenWeather
    response = requests.get(url)
    
    # If the response is successful, parse the data
    if response.status_code == 200:
        data = response.json()
        return {
            "city": data["name"],
            "temp": data["main"]["temp"],
            "humidity": data["main"]["humidity"],
            "wind": data["wind"]["speed"]
        }
    else:
        return {"error": "Unable to fetch weather data"}
