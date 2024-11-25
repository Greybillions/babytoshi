import heroImg from '../assets/img/hero1.jpg';
import heroLogo from '../assets/img/herologo.png';

const Hero = () => {
  return (
    <section id='home' className='bg-n-1 h-[90vh] overflow-hidden'>
      <div className='container flex flex-col items-center justify-between h-full'>
        <div className='flex items-center flex-col mt-10 md:flex-row gap-3 mb-20'>
          <h1 className='text-5xl md:text-7xl font-bold p-1'>BABY</h1>
          <img
            src={heroLogo}
            alt='herologo'
            className='block h-16 w-full md:h-[7rem] md:w-80 '
          />
        </div>
        <div className='rounded-xl relative lg:-translate-y-4 items-end'>
          <img src={heroImg} alt='hero image' height={450} width={450} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
