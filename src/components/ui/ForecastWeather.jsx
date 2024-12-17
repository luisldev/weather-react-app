import DayWeather from '../DayWeather';

function ForecastWeather({ forecast }) {
  const weather = {
    day_1: forecast[0],
    day_2: forecast[1],
    day_3: forecast[2],
  };
  return (
    <div className='weather_forecast bg-neutral-800 rounded-xl flex flex-row items-center overflow-x-auto justify-evenly gap-4 p-2'>
      <DayWeather data={weather.day_1} day='Hoy' />
      <DayWeather data={weather.day_2} day='Mañana' />
      <DayWeather data={weather.day_3} day='En 2 días' />
    </div>
  );
}

export default ForecastWeather;
