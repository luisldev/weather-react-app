import getGeolocation from "./getGeolocation"

async function getWeather(location = "Oaxaca"){
    const { lat, lon, API_KEY } = await getGeolocation(location)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`)
    const data = await response.json()
    const weather = {
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        visibility: data.visibility,
        wind: data.wind.speed,
        wind_deg: data.wind.deg,
        clouds: data.clouds.all,
        time: data.dt,
        country: data.sys.country,
        city: data.name
    }

    return weather
}

export default getWeather