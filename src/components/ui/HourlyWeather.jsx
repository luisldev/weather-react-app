import getTimeRemaining from '../../helpers/getTimeRemaining';
import HourlyTable from './HourlyTable';

function HourlyWeather({ data }) {
  const remainingTime = getTimeRemaining(data.today, data.tomorrow);
  return (
    <footer className='weather_hourly bg-neutral-900 rounded-lg p-2'>
      <h2 className='text-center my-2'>
        <strong>Datos del clima para las próximas 12 horas</strong>
      </h2>
      <HourlyTable data={remainingTime} />
    </footer>
  );
}

export default HourlyWeather;
