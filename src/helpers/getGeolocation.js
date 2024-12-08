const API_KEY = import.meta.env.VITE_API_KEY;

async function getGeolocation(location) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`);
    const data = await response.json();
    const [ lat , lon ] = [ data[0].lat, data[0].lon, data[0].country, data[0].name ]
    return { lat, lon, API_KEY }
}

export default getGeolocation