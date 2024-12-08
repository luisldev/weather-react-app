import { Input } from '@nextui-org/input'
import { Form } from '@nextui-org/form'
import { Chip } from '@nextui-org/chip'
import { Button } from '@nextui-org/button'
import History from "./components/History"
import Mokup from './components/Mokup'

import CurrentWeather from './components/ui/CurrentWeather'
import getWeather from './helpers/getWeather'

function App() {
  async function handleSubmit(event) {
    event.preventDefault();
    const location = new FormData(event.target).get("location")
    if(!location) return
    const currentWeather = await getWeather(location);    
  }


  return (
    <>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <Chip color='primary'><strong>Ciudad,</strong> Pais</Chip>
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
        <CurrentWeather></CurrentWeather>
        <div className='weather_hourly'><Mokup /></div>
        <div className='weather_forecast'><Mokup /></div>
      </div>
    </>
  )
}

export default App
