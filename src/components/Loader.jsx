import { Spinner } from '@nextui-org/react';

function Loader() {
  return (
    <div className='loader w-full h-full flex flex-col justify-center items-center mt-52'>
      <Spinner
        size='lg'
        color='primary'
        label='Obteniendo datos...'
        labelColor='primary'
      />
    </div>
  );
}

export default Loader;
