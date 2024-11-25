import { roadMap } from '../constants';
import { FcMindMap } from 'react-icons/fc';
import btnImg from '../assets/img/btnImg.jpg';

const Roadmap = () => {
  return (
    <section
      id='roadmap'
      className='bg-container flex items-center justify-center mx-auto'
    >
      <div className='relative container w-[20rem] lg:w-1/2 z-10'>
        <div className='bg-r-1 border-[10px] b-r-1 lg:p-16 w-auto p-3'>
          <div className=''>
            <p className='uppercase font-bold text-[#0052ff] lg:text-left '>
              based & verified
            </p>
            <h2 className='text-4xl lg:text-6xl font-bold'>Roadmap</h2>
            {roadMap.map((item) => (
              <div className='my-8 font-semibold text-lg' key={item.id}>
                <h3 className='flex items-center gap-2'>
                  <FcMindMap />
                  {item.timeline}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
            <div className='relative my-12 w-auto h-auto text-left pl-3 md:pl-0 '>
              <a
                href=''
                target='_blank'
                className='px-10 py-4 bg-[#0052ff] text-white rounded-3xl hover:bg-[#ff6501] transition-all'
              >
                <span className='ml-7 font-semibold'>Join Us Now</span>
              </a>
              <img
                src={btnImg}
                alt='btn Image'
                className='absolute top-1/2 left-10 md:left-7 transform -translate-x-1/2 -translate-y-1/2 rounded-full'
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
