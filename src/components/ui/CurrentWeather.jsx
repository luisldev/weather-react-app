import { Chip } from "@nextui-org/chip"

function CurrentWeather({ weather, time }) {
  const date = new Date(time * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const condition = weather.condition.text;
  const current_temp_c = weather.temp_c;
  const feels_like = 
    current_temp_c == weather.feelslike_c
    ? null
    : weather.feelslike_c;


  return (
    <div className="weather_current rounded-lg p-2">
      <div className="flex flex-row items-center justify-between">
        <Chip variant="flat">
            <strong>{date}</strong>
        </Chip>

        <Chip variant="flat">
          {condition}
        </Chip>
      </div>

      <div>
        <p className="text-7xl"><strong>{current_temp_c}°</strong></p>
      </div>

      <div>
        {feels_like &&
          <p>Sensación térmica: <strong>{feels_like}°</strong></p>
        }
      </div>
    </div>
  )
}

export default CurrentWeather