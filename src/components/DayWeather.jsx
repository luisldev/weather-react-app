import { Chip } from '@nextui-org/chip';

function DayWeather({ data, day = 'Hoy' }) {
  const weather = {
    condition: data.day.condition.text,
    max_temp: data.day.maxtemp_c,
    min_temp: data.day.mintemp_c,
    temp: data.day.avgtemp_c,
    sunrise: data.astro.sunrise,
    sunset: data.astro.sunset,
    moonrise: data.astro.moonrise,
    moonset: data.astro.moonset,
  };

  return (
    <article className='day_weather h-full min-w-56 bg-neutral-900 p-4 rounded-xl text-center'>
      <header className='day_weather_header flex flex-row items-center justify-between'>
        <Chip>{day}</Chip>
        <Chip>{weather.condition}</Chip>
      </header>
      <main className='day_weather_main my-4'>
        <p className='text-5xl'>{weather.temp}°</p>
        <p className='mt-4'>
          min: {weather.min_temp}° / max: {weather.max_temp}°
        </p>
      </main>
      <footer className='day_weather_footer text-sm'>
        <p>
          Salida de sol: <strong>{weather.sunrise}</strong>
        </p>
        <p>
          Puesta de sol: <strong>{weather.sunset}</strong>
        </p>
        <p>
          Salida de luna: <strong>{weather.moonrise}</strong>
        </p>
        <p>
          Puesta de luna: <strong>{weather.moonset}</strong>
        </p>
      </footer>
    </article>
  );
}

export default DayWeather;
