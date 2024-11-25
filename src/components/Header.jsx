import { navigation } from '../constants';
import HamburgerMenu from './HamburgerMenu';

import { useState } from 'react';
import { enablePageScroll } from 'scroll-lock';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    if (!menuOpen) return;

    enablePageScroll();
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center justify-center relative bg-n-1 top-0 h-20 md:h-24 left-0 w-full`}
    >
      <nav className='hidden lg:flex absolute md:relative flex-col md:flex-row z-[2] gap-16'>
        {navigation.map((item) => (
          <a
            className={`relative transition-all inline-flex h-11 mx-3 text-lg font-semibold py-2 px-auto md:hover:border-b-2 md:border-white`}
            key={item.id}
            href={item.url}
          >
            {item.title}
          </a>
        ))}
      </nav>

      <HamburgerMenu
        className={`lg:hidden `}
        isOpen={menuOpen}
        onToggle={toggleMenu}
      />
      <div
        className={`absolute flex flex-col items-center top-16 right-0 w-full p-4 bg-[#0052ff] text-white rounded-lg border-b-2 border-black transition-all duration-300 z-10 ease-in-out md:hidden ${
          menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-[100%] opacity-0 pointer-events-none'
        }`}
      >
        {navigation.map((item) => (
          <a
            onClick={handleClick}
            className='relative transition-all mb-2 inline-flex h-11 mx-3 text-sm font-semibold py-2'
            key={item.id}
            href={item.url}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
