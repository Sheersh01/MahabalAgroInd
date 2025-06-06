import React, { useEffect, useRef } from 'react';
import motoImg from "../assets/moto.avif";

const Motto = () => {
  const mottoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const letters = entry.target.querySelectorAll('.letter');
            letters.forEach((letter, index) => {
              letter.style.animationDelay = `${index * 0.025}s`;
              letter.classList.add('animate-letter');
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (mottoRef.current) observer.observe(mottoRef.current);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes letterFadeIn {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-letter {
        animation: letterFadeIn 0.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (mottoRef.current) observer.unobserve(mottoRef.current);
      document.head.removeChild(style);
    };
  }, []);

  // Wrap each letter inside a word span
  const wrapTextByWords = (text) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={`word-${wordIndex}`} className="inline-block mr-2 whitespace-nowrap">
        {word.split('').map((char, i) => (
          <span key={`char-${wordIndex}-${i}`} className="letter inline-block opacity-0">
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div className='w-full mb-20 h-screen relative text-[#F6F0E8] bg-black'>
      <img className='w-full h-full object-cover object-top opacity-[850%]' src={motoImg} alt="Motto Background" />
      <div className='absolute top-10 left-0 lg:px-12 px-6 lg:py-10 py-6'>
        <h1 className='uppercase lg:text-[2vw] md:text-[3vw] text-[4.5vw]'>Our Motto</h1>
        <h1
          ref={mottoRef}
          className='lg:text-[3vw] md:text-[4.8vw] text-[6vw] py-8 leading-tight '
        >
          {wrapTextByWords(
            "We are Mahabal Agro Industry, we provide valorization of organic waste to high quality organic compost with engineering compost system. This organic compost can be utilized to improve soil condition of farm."
          )}
        </h1>
      </div>
    </div>
  );
};

export default Motto;
