from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/api/weather")
async def get_weather(city: str):
    # Replace with actual logic to fetch weather
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid=your_api_key&units=metric"
    response = requests.get(url)
    data = response.json()
    return {
        "city": data["name"],
        "temp": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "wind": data["wind"]["speed"]
    }
