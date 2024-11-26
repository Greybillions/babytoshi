import { socialIcons } from '../assets/icons';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animation.js';

const Links = () => {
  useGSAP(() => {
    animateWithGsap('#link', {
      opacity: 1,
      y: -25,
      stagger: 0.1,
      ease: 'power2.out',
    });
  });

  return (
    <section className='z-20 w-full'>
      <div className='container h-[auto] w-full mx-auto my-7'>
        <h2 className='text-center text-xl font-semibold'>Official Links</h2>
        <div className='flex flex-wrap items-center justify-center p-3 mx-auto my-3'>
          {socialIcons.map((item) => (
            <a
              id='link'
              className='rounded-full opacity-0 translate-y-50'
              key={item.id}
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={item.icon}
                alt={item.id}
                className='h-12 w-12 mx-3 mt-2 rounded-full object-cover'
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
