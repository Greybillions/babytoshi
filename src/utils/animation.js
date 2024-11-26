import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// General function to create a GSAP animation with ScrollTrigger
export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      start: 'top 88%',
      toggleActions: 'play none none reverse',

      ...scrollProps,
    },
  });
};
