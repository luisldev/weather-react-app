import { Input } from '@nextui-org/input'
import { Form } from '@nextui-org/form'
import { Chip } from '@nextui-org/chip'
import { Button } from '@nextui-org/button'

import History from "./components/History"
import Mokup from './components/Mokup'

function App() {

  return (
    <>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <Chip color='primary'><strong>Ciudad,</strong> Pais</Chip>
        </div>
        <Form>
          <Input
          className='w-64'
          placeholder='New York, Tokio, Londres...'
          radius='lg'
          type='search'
          variant='bordered'
        />
        </Form>
        <div>
          <History />
        </div>
      </div>

      <div className='weather_container'>
        <div className='weather_current'><Mokup /></div>
        <div className='weather_hourly'><Mokup /></div>
        <div className='weather_forecast'><Mokup /></div>
      </div>
    </>
  )
}

export default App
