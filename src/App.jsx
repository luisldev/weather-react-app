import { Input } from '@nextui-org/input';
import { Form } from '@nextui-org/form';
import { Chip } from '@nextui-org/chip';
import { useWeather } from './customHooks/useWeather';

import { useState } from 'react';
import CurrentWeather from './components/ui/CurrentWeather';
import HourlyWeather from './components/ui/HourlyWeather';
import DailyWeather from './components/ui/DailyWeather';
import Loader from './components/Loader';
import History from './components/History';
import GithubButton from './components/GithubButton';

function App() {
  const [city, setCity] = useState(null);
  const [searching, setSearching] = useState(false);
  const { currentWeather, hourlyWeather, dailyWeather, loading } = useWeather(
    city
      ? `https://api.weatherapi.com/v1/forecast.json?key=993ba42994fe47b4a1e191246232010&q=${city}&days=3&aqi=no&alerts=no&lang=es`
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
        <GithubButton className='hidden lg:flex' />
        {currentWeather && !searching && (
          <Chip className='hidden lg:flex ' color='primary'>
            <strong>{currentWeather.location},</strong> {currentWeather.country}
          </Chip>
        )}
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
        <History className='hidden lg:flex' />
        {/** Pendiente agregar menu lateral
         * import Menu from './components/Menu';
         *
         *
         * <Menu />
         */}
      </header>
      <div className='text-sm text-center mt-4 opacity-50'>
        <p>Continuamente estoy trabajando para diseñar la tabla responsive</p>
        <p>Próximamente estará disponible</p>
      </div>
      {loading || searching ? (
        <Loader />
      ) : currentWeather ? (
        <div className='weather_container'>
          <CurrentWeather
            weather={currentWeather.current}
            time={currentWeather.time}
          />
          <HourlyWeather data={hourlyWeather} />
          <DailyWeather data={dailyWeather}></DailyWeather>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default App;
