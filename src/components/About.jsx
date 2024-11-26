import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { aboutImages } from '../constants';
import btnImg from '../assets/img/btnImg.jpg';
import whitePaper from '../assets/whitepaper.pdf';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const animateImage = () => {
      const tl = gsap.timeline();

      // Fade out the current image
      tl.to(imageRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // Update the index after fade-out
          setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % aboutImages.length
          );
        },
      })
        // Wait for the image index update
        .add(() => {
          // Ensure the new image is loaded before fading in
          imageRef.current.src =
            aboutImages[(currentImageIndex + 1) % aboutImages.length];
        })
        // Fade in the new image
        .to(imageRef.current, {
          opacity: 1,
          duration: 1,
        });
    };

    const interval = setInterval(animateImage, 5000); // Run animation every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [currentImageIndex]); // Ensure effect runs on index change

  return (
    <section id='story' className='bg-n-2'>
      <div className='container w-full mx-auto mt-7 flex flex-col lg:flex-row h-auto lg:h-[80vh] justify-around items-center'>
        <div className='p-3 flex flex-col items-left justify-center md:p-16 md:pl-40 mx-auto my-3 w-full text-pretty lg:w-1/2'>
          <h2 className='text-left text-lead pl-3 md:pl-0'>Story of Btoshi</h2>
          <p className='text-left text-5xl font-semibold my-3 pl-3 md:pl-0'>
            Tokenomics
          </p>
          <p className='text-left text-lg font-semibold px-3 md:pl-0'>
            BToshi is a community-driven, non-custodial, non-fungible token
            (NFT) project that allows users to own and trade unique digital
            assets. We believe in innovation, collaboration, and excellence.
            <br /> <br />
            Together, we will achieve great milestones and bring our vision of
            BabyToshi CTO to the community. Our meme coin is not just about
            hype—it&apos;s about building a sustainable, fun, and engaged
            ecosystem.
          </p>
          <div className='relative mt-12 w-auto h-auto text-left pl-3 md:pl-0 '>
            <a
              href={whitePaper}
              download='Baby-Toshi-White-Paper.pdf'
              className='px-6 py-4 bg-white text-black rounded-3xl hover:bg-teal-300 transition-all'
            >
              <span className='ml-7 font-semibold'>Download Whitepaper</span>
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
        <div className='flex items-center h-[14rem] md:h-[24rem] w-full m flex-col mt-10 gap-3 mb-20 md:w-1/2'>
          <img
            ref={imageRef}
            src={aboutImages[currentImageIndex]}
            alt='about image'
            className='block h-[18rem] w-[18rem] md:h-full md:w-[24rem] opacity-1'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
