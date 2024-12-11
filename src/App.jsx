import { Input } from '@nextui-org/input'
import { Form } from '@nextui-org/form'
import { Chip } from '@nextui-org/chip'
import History from "./components/History"
import Mokup from './components/Mokup'
import { useWeather } from "./customHooks/useWeather"

import { useState } from 'react'
import CurrentWeather from './components/ui/CurrentWeather'

function App() {
  const [ city, setCity ] = useState(null)
  const { data, loading } = useWeather(
    city
    ? `https://api.weatherapi.com/v1/forecast.json?key=993ba42994fe47b4a1e191246232010&q=${city}&days=4&aqi=no&alerts=no&lang=es`
    : null
  ) 

  function handleSubmit(event) {
    event.preventDefault();
    const country = new FormData(event.target).get("location")
    if(!country) return
    setCity(country)
  }
  
  return (
    <>
      <div className='flex flex-row items-center justify-between'>
        <div>
          {
            data && <Chip color='primary'><strong>{data.location.name},</strong> {data.location.country}</Chip>
          }
        </div>
        <Form onSubmit={handleSubmit}>
          <Input
          name="location"
          id="location"
          className='w-64'
          placeholder='New York, Tokio, Londres...'
          radius='lg'
          type='search'
          variant='bordered'
          required
        />
        </Form>
        <div>
          <History />
        </div>
      </div>
      <div className='weather_container'>
        {loading && <div>Loading...</div>}
        {
          data && <CurrentWeather weather={data.current} time={data.location.localtime_epoch} />
        }
        <div className='weather_hourly'><Mokup /></div>
        <div className='weather_forecast'><Mokup /></div>
      </div>
    </>
  )
}

export default App
