import { Chip } from '@nextui-org/chip';
import converTime from '../../helpers/converTime';

function CurrentWeather({ weather, time }) {
  const date = converTime({ time });
  const condition = weather.condition.text;
  const current_temp_c = weather.temp_c;
  const feels_like =
    current_temp_c == weather.feelslike_c ? null : weather.feelslike_c;
  const wind = weather.wind_kph;
  const wind_dir = weather.wind_dir;
  const pressure = weather.pressure_mb;
  const humidity = weather.humidity;
  const cloud = weather.cloud;
  const last_update = weather.last_updated;

  return (
    <article className='weather_current min-w-72 rounded-lg p-2 flex flex-col justify-between'>
      <div className='flex flex-row items-center justify-between'>
        <Chip>{date}</Chip>
        <Chip>{condition}</Chip>
      </div>

      <div className='text-center my-8'>
        <p className='text-7xl'>
          <strong>{current_temp_c}°</strong>
        </p>
        {feels_like && (
          <p className='text-sm mt-4'>
            Sensación térmica: <strong>{feels_like}°</strong>
          </p>
        )}
      </div>

      <footer className='opacity-95 text-sm text-center text-balance'>
        <div className='grid grid-cols-2 gap-x-2 mb-2'>
          <p>
            Viento:{' '}
            <strong>
              {wind_dir}, {wind} km/h
            </strong>
          </p>
          <p>
            Presión: <strong>{pressure}MB</strong>
          </p>
          <p>
            Humedad: <strong>{humidity}%</strong>
          </p>
          <p>
            Nubosidad: <strong>{cloud}%</strong>
          </p>
        </div>
        <h6 className='text-xs opacity-70'>
          Última actualización: {last_update}
        </h6>
      </footer>
    </article>
  );
}

export default CurrentWeather;
