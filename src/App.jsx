import { Input } from '@nextui-org/input';
import { Form } from '@nextui-org/form';
import { Chip } from '@nextui-org/chip';
import { useWeather } from './customHooks/useWeather';

import { useState } from 'react';
import CurrentWeather from './components/ui/CurrentWeather';
import HourlyWeather from './components/ui/HourlyWeather';
import ForecastWeather from './components/ui/ForecastWeather';
import Loader from './components/Loader';
import History from './components/History';
import GithubButton from './components/GithubButton';

function App() {
  const [city, setCity] = useState(null);
  const [searching, setSearching] = useState(false);
  const { data, loading } = useWeather(
    city
      ? `https://api.weatherapi.com/v1/forecast.json?key=993ba42994fe47b4a1e191246232010&q=${city}&days=4&aqi=no&alerts=no&lang=es`
      : null
  );

  function handleSubmit(event) {
    event.preventDefault();
    const country = new FormData(event.target).get('location');
    if (!country) return;
    setSearching(true);
    setCity(country);
  }

  if (!loading && searching) {
    setSearching(false);
  }

  return (
    <>
      <header className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center justify-center gap-x-4'>
          <GithubButton />
          {data && !searching && (
            <Chip color='primary'>
              <strong>{data.location.name},</strong> {data.location.country}
            </Chip>
          )}
        </div>
        <Form className='flex flex-row flex-grow-0' onSubmit={handleSubmit}>
          <Input
            color='primary'
            name='location'
            id='location'
            className='w-64'
            placeholder='New York, Tokio, Londres...'
            type='search'
            variant='bordered'
            required
          />
        </Form>
        <div>
          <History />
        </div>
      </header>
      {loading || searching ? (
        <Loader />
      ) : data ? (
        <div className='weather_container'>
          <CurrentWeather
            weather={data.current}
            time={data.location.localtime_epoch}
          />
          <HourlyWeather></HourlyWeather>
          <ForecastWeather
            forecast={data.forecast.forecastday}
          ></ForecastWeather>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default App;
