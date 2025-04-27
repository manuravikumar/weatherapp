from fastapi import FastAPI, Request
import requests
import os

app = FastAPI()

API_KEY = os.getenv("OPENWEATHER_API_KEY", "your_default_api_key")

@app.get("/weather")
def get_weather(city: str):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    data = response.json()
    return {
        "city": data["name"],
        "temp": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "wind": data["wind"]["speed"]
    }
