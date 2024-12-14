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
    <article className='h-full flex flex-col justify-between bg-neutral-900 py-2 px-4 rounded-xl'>
      <header className='flex flex-row items-center justify-between'>
        <Chip>{day}</Chip>
        <Chip>{weather.condition}</Chip>
      </header>
      <main className='text-center my-4'>
        <p className='text-5xl'>{weather.temp}°</p>
        <p className='mt-4'>
          min: {weather.min_temp}° / max: {weather.max_temp}°
        </p>
      </main>
      <footer className='text-sm'>
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
