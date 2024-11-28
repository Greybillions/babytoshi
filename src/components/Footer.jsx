import { footerListOne, footerListTwo } from '../constants';

import footerImg from '../assets/img/footerImg.png';
import heroLogo from '../assets/img/herologo.png';

const Footer = () => {
  return (
    <footer id='links' className='bg-n-1 pt-10'>
      <div className='container flex flex-col justify-around md:flex-row items-center p-2 md:p-6 md:px-10'>
        <div className='flex flex-col'>
          <h2 className='text-3xl md:text-5xl font-bold my-2'>
            Base is for everyone.
          </h2>
          <p className='my-2 text-lg'>
            Start building onchain with the blue cat! <br />
            Only on Base.
          </p>
          <div className='flex font-semibold lg:flex-row flex-col my-2 gap-6 md:gap-16'>
            <div className='flex flex-col font-semibold'>
              {footerListOne.map((item) => (
                <a href={item.url} key={item.id}>
                  {item.title}
                </a>
              ))}
            </div>
            <div className='flex flex-col'>
              {footerListTwo.map((item) => (
                <a href={item.url} target='_blank' key={item.id}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-around'>
          <div className='flex items-center flex-col my-20 md:hidden gap-3'>
            <h1 className='text-3xl font-bold p-1'>BABY</h1>
            <img src={heroLogo} alt='herologo' className='block h-12 w-60' />
          </div>
          <img
            src={footerImg}
            alt='footer Image'
            className='w-[450px] h-[500px] lg:w-[550px] lg:h-[650px] object-contain'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
