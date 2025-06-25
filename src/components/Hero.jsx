import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

// Hero background image
import heroImg from '../assets/homePage/hero.avif';

const Hero = () => {
  const linesRef = useRef([]);     // Refs for each animated line of text
  const imgRef = useRef(null);     // Ref for the background image

  const { t } = useTranslation('home');  // Load translations from "home" namespace

  useEffect(() => {
    // Animate hero text lines using GSAP
    gsap.fromTo(
      linesRef.current,
      { autoAlpha: 0, y: 50 },      // Initial: invisible and pushed down
      {
        autoAlpha: 1,              // Final: visible
        y: 0,                      // Move to original position
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,              // Animate lines one after the other
      }
    );

    // Parallax effect for hero background image
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxSpeed = 0.15;

          if (imgRef.current) {
            imgRef.current.style.transform = `translateY(${-scrolled * parallaxSpeed}px)`;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen text-[#F6F0E8] w-full bg-black overflow-hidden">
      {/* Background Image with parallax effect */}
      <img
        ref={imgRef}
        className="absolute top-0 left-0 w-full h-[120%] object-cover object-top opacity-[60%] bg-black will-change-transform"
        src={heroImg}
        alt="Hero Background"
      />

      {/* Animated Title Text */}
      <div className="absolute top-1/2 -translate-y-1/2 lg:px-20 md:px-4 w-full md:space-y-2 space-y-12 z-10">
        {t('hero.title', { returnObjects: true }).map((word, index) => (
          <h1
            key={index}
            ref={(el) => (linesRef.current[index] = el)}
            className={`lg:text-[8vw] md:text-[10vw] text-[12vw] leading-none uppercase text-center
              ${index === 0 
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
