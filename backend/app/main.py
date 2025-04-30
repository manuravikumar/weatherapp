from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

API_KEY = "c51a86e60b8adc73e50727651cbc1bb8"  # Your OpenWeather API key

# CORS Middleware for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/weather")
async def get_weather(city: str):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        return {
            "city": data["name"],
            "temp": data["main"]["temp"],
            "humidity": data["main"]["humidity"],
            "wind": data["wind"]["speed"],
            "condition": data["weather"][0]["main"]
        }
    else:
        return {"error": f"Weather API returned {response.status_code}"}
