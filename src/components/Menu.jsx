import { Button } from '@nextui-org/button';
import GithubButton from './GithubButton';
import History from './History';

import { useState } from 'react';

function Menu() {
  const [showMenu, isShowMenu] = useState(false);
  let menu = '';
  function toggleMenu() {
    alert(showMenu);
    if (!showMenu) {
      menu = '-translate-x-52';
      isShowMenu(true);
    } else {
      menu = '';
      isShowMenu(false);
      menu = 'translate-x-52';
    }
  }

  return (
    <aside className='lg:hidden'>
      <Button onPress={toggleMenu} isIconOnly color='default' variant='ghost'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='size-6'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
          />
        </svg>
      </Button>
      <div
        className={`w-52 bg-neutral-950 rounded-lg flex flex-col items-center justify-center ${menu}`}
      >
        <GithubButton />
        <History />
      </div>
    </aside>
  );
}
export default Menu;
