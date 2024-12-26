import DayWeather from '../DayWeather';

function DailyWeather({ data }) {
  const weather = {
    day_1: data[0],
    day_2: data[1],
    day_3: data[2],
  };
  return (
    <div className='weather_forecast rounded-xl flex flex-row items-center overflow-x-auto justify-evenly gap-4 p-2'>
      <DayWeather data={weather.day_1} day='Hoy' />
      <DayWeather data={weather.day_2} day='Mañana' />
      <DayWeather data={weather.day_3} day='En 2 días' />
    </div>
  );
}

export default DailyWeather;
