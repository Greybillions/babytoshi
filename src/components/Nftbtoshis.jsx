import BackgroundBoxes from './BackgroundBoxes';
import heroLogo from '../assets/img/herologo.png';
import btnImg from '../assets/img/btnImg.jpg';
import { nftImages } from '../constants';

const Nftbtoshis = () => {
  return (
    <section id='nftbtoshis' className='bg-[#080b13] text-white relative py-20'>
      <BackgroundBoxes />
      <div className='flex items-center flex-col container relative z-50'>
        <p className='uppercase text-md font-semibold text-[#40e0bb]'>
          Introducing
        </p>
        <div className='flex items-center justify-center mt-2'>
          <h2 className='block md:hidden text-6xl font-bold p-1'>B</h2>
          <h2 className='hidden md:block text-6xl font-bold p-1 mr-3'>BABY</h2>
          <img
            src={heroLogo}
            alt='herologo'
            className='block h-12 w-40 md:h-16 md:w-80'
          />
          <p className='text-4xl text-black ml-6 bg-white p-1'>NFTs</p>
        </div>
        <div className='nfts w-[90%] flex items-center justify-center  gap-2 flex-wrap md:p-2 my-20'>
          {nftImages.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt='nft image'
                className='object-contain w-[100px] md:w-[250px] '
              />
            </div>
          ))}
        </div>
        <div className='relative mt-4 w-auto h-auto text-left pl-3 md:pl-0 '>
          <a
            href=''
            className='px-6 py-4 bg-white text-black rounded-3xl hover:bg-teal-300 transition-all'
          >
            <span className='ml-7 font-semibold'>NFT Collection</span>
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
    </section>
  );
};

export default Nftbtoshis;
