import DayWeather from '../DayWeather';

function ForecastWeather({ forecast }) {
  const weather = {
    day_1: forecast[0],
    day_2: forecast[1],
    day_3: forecast[2],
  };
  return (
    <div className='weather_forecast bg-neutral-800 rounded-xl flex items-center justify-evenly gap-4 *:rounded-xl *:py-2 *:px-4 *:w-max'>
      <div className='weather_forecast_day_1'>
        <DayWeather data={weather.day_1} day='Hoy' />
      </div>
      <div className='weather_forecast_day_2'>
        <DayWeather data={weather.day_2} day='Mañana' />
      </div>
      <div className='weather_forecast_day_3'>
        <DayWeather data={weather.day_3} day='En 2 días' />
      </div>
    </div>
  );
}

export default ForecastWeather;
