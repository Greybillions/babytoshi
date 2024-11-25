import { IoCloseSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = ({ isOpen, onToggle, className = '' }) => {
  return (
    <button
      aria-label='Toggle menu'
      aria-expanded={isOpen}
      className={`${className} flex items-center justify-center w-12 h-12 text-white bg-transparent transition-all outline-none`}
      onClick={onToggle}
    >
      {isOpen ? (
        <IoCloseSharp className='text-3xl transition-transform duration-300' />
      ) : (
        <GiHamburgerMenu className='text-3xl transition-transform duration-300' />
      )}
    </button>
  );
};

export default HamburgerMenu;
