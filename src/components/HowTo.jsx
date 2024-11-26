import Marquee from './Marquee';
import { exchangeIcons } from '../assets/icons';
import CopyTextBtn from './CopyTextBtn';
import howtoImg from '../assets/img/howtoImg.jpg';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animation';

function HowTo() {
  const textToCopy = '0x3A4Ae78EbB5caAD5d704C2FDAf19917C203bDfa3';

  useGSAP(() => {
    animateWithGsap('#icon', {
      opacity: 1,

      y: -25,
      stagger: 0.2,
    });
  });

  return (
    <section
      id='howto'
      className='bg-n-1 border-b-[1.5rem] border-t-[1.5rem] border-t-[#40e0bb] border-b-n-2 border-b-[#ffb300]'
    >
      <div className='container '>
        <Marquee text='THE TICKER IS $BTOSHI' repeat={10} />
        <div className='my-16 md:my-32 mx-auto flex lg:flex-row flex-col-reverse gap-16  justify-center items-center px-4'>
          <div className='lg:w-1/2'>
            <img
              src={howtoImg}
              alt={howtoImg}
              className='w-full lg:w-3/4 lg:mx-auto rounded-xl'
            />
          </div>
          <div className='flex flex-col items-left lg:w-1/2'>
            <p className='uppercase font-bold  lg:text-center'>
              based & verified
            </p>
            <h2 className='text-3xl lg:text-5xl font-bold lg:text-center'>
              How to buy Baby Toshi
            </h2>
            <div className='flex flex-wrap w-full my-16 items-center justify-center transition-all'>
              {exchangeIcons.map((item) => (
                <a
                  id='icon'
                  key={item.id}
                  href={item.url}
                  className='bg-white opacity-0 translate-y-50 mt-2 p-1 w-36 lg:w-40 hover:bg-teal-200 transition-all h-14 lg:h-16 ml-6 mb-4 md:mb-6 rounded-3xl flex justify-center items-center px-3'
                >
                  <img
                    src={item.icon}
                    alt={item.id}
                    className=' rounded-xl object-cover'
                  />
                </a>
              ))}
            </div>
            <div className='flex flex-col mt-2 md:mt-4'>
              <p className='text-lg font-bold uppercase mb-3 text-center'>
                Official contract Address:
              </p>
              <CopyTextBtn text={textToCopy} />
            </div>
          </div>
        </div>
        <Marquee text='THE BABY FACE OF BASE' repeat={10} />
      </div>
    </section>
  );
}

export default HowTo;
