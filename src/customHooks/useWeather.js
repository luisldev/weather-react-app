import { useState, useEffect } from 'react';

export function useWeather(url) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener los datos del clima');
        }
        return res.json();
      })
      .then((response) => {
        setCurrentWeather({
          location: response.location.name,
          country: response.location.country,
          current: response.current,
          time: response.location.localtime_epoch,
          current: response.current,
        });
        setDailyWeather(response.forecast.forecastday);
        setHourlyWeather({
          today: response.forecast.forecastday[0].hour,
          tomorrow: response.forecast.forecastday[1].hour,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { currentWeather, dailyWeather, hourlyWeather, loading };
}
