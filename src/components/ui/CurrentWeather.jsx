import { Chip } from "@nextui-org/chip"

function CurrentWeather({ weather, time }) {
  const date = new Date(time * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const condition = weather.condition.text;
  const current_temp_c = weather.temp_c;
  const feels_like = current_temp_c == weather.feelslike_c
                     ? null
                     : weather.feelslike_c;
  const wind = weather.wind_kph;
  const wind_dir = weather.wind_dir;
  const pressure = weather.pressure_mb;
  const humidity = weather.humidity;
  const cloud = weather.cloud;
  const last_update = weather.last_updated;

  return (
    <div className="weather_current rounded-lg p-4 flex flex-col justify-between">
      <div className="flex flex-row items-center justify-between">
        <Chip variant="flat">
          <p className="opacity-80"><strong>{date}</strong></p>
        </Chip>

        <Chip variant="flat">
          <p className="opacity-80">{condition}</p>
        </Chip>
      </div>

      <div className="text-center">
        <p className="text-7xl"><strong>{current_temp_c}°</strong></p>
      </div>

      <footer className="opacity-95 text-sm text-pretty">
        <div className="grid grid-cols-2 gap-x-2 mb-2">
          {
            feels_like &&
              <p>Sensación térmica: <strong>{feels_like}°</strong></p>
          }
          <p>Viento: <strong>{wind_dir}, {wind} km/h</strong></p>
          <p>Presión: <strong>{pressure}MB</strong></p>
          <p>Humedad: <strong>{humidity}%</strong></p>
          <p>Nubosidad: <strong>{cloud}%</strong></p>
        </div>
        <h6 className="text-xs opacity-70">Última actualización: {last_update}</h6>
      </footer>
    </div>
  )
}

export default CurrentWeather