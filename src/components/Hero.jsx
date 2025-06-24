import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroImg from '../assets/homePage/hero.avif';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const linesRef = useRef([]);
  const imgRef = useRef(null);
  const { t } = useTranslation('home');

  useEffect(() => {
    gsap.fromTo(
      linesRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
      }
    );

    // Parallax scroll effect with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          if (imgRef.current) {
            const parallaxSpeed = 0.15;
            // Move image up when scrolling down (negative value)
            imgRef.current.style.transform = `translateY(${-scrolled * parallaxSpeed}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen text-[#F6F0E8] w-full bg-black overflow-hidden">
      <img
        ref={imgRef}
        className="absolute top-0 left-0 w-full h-[120%] object-cover object-top opacity-[60%] bg-black will-change-transform"
        src={heroImg}
        alt="Hero Background"
      />
      <div className="absolute top-1/2 -translate-y-1/2 lg:px-20 md:px-4 w-full md:space-y-2 space-y-12 z-10">
        {t('hero.title', { returnObjects: true }).map((word, index) => (
          <h1
            key={index}
            ref={(el) => (linesRef.current[index] = el)}
            className={`lg:text-[8vw] md:text-[10vw] text-[12vw] leading-none uppercase text-center ${
              index === 0
                ? 'md:text-left'
                : index === 1
                ? 'md:text-right lg:pr-80 md:pr-20'
                : index === 2
                ? 'lg:pl-20 md:pl-20'
                : 'md:text-right lg:pr-20 md:pr-10'
            }`}
          >
            {word}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Hero;