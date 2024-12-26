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
    <article className='day_weather h-full min-w-60 bg-neutral-900 p-4 rounded-xl text-center pb-4'>
      <header className='day_weather_header flex flex-row flex-wrap items-center justify-between gap-4'>
        <Chip>
          <strong>{day}</strong>
        </Chip>
        <Chip>{weather.condition}</Chip>
      </header>
      <main className='day_weather_main'>
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
