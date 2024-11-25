import { socialIcons } from '../assets/icons';

const Links = () => {
  return (
    <section id='links' className='z-20 w-full'>
      <div className='container h-[auto] w-full mx-auto my-7'>
        <h2 className='text-center text-xl font-semibold'>Official Links</h2>
        <div className='flex flex-wrap items-center justify-center p-3 mx-auto my-3'>
          {socialIcons.map((item) => (
            <a
              className='rounded-full'
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
