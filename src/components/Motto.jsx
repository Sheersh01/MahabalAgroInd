import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import GraphemeSplitter from 'grapheme-splitter'; // ✅ Import Unicode splitter
import mottoImg from '../assets/homePage/mottoImg.avif';

const Motto = () => {
  const { t } = useTranslation();
  const mottoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
        rootMargin: '0px 0px -50px 0px',
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

  const wrapTextByWords = (text) => {
    const splitter = new GraphemeSplitter();
    return text.split(' ').map((word, wordIndex) => {
      const graphemes = splitter.splitGraphemes(word);
      return (
        <span key={`word-${wordIndex}`} className="inline-block mr-2 whitespace-nowrap">
          {graphemes.map((char, i) => (
            <span key={`char-${wordIndex}-${i}`} className="letter inline-block opacity-0">
              {char}
            </span>
          ))}
        </span>
      );
    });
  };

  return (
    <div className="w-full mb-20 h-screen relative text-[#F6F0E8] bg-black">
      <img
        className="w-full h-full object-cover object-top opacity-[85%]"
        src={mottoImg}
        alt="Motto Background"
      />
      <div className="absolute top-10 left-0 lg:px-12 px-6 lg:py-10 py-6">
        <h1 className="uppercase lg:text-[2vw] md:text-[3vw] text-[4.5vw]">
          {t('motto.heading')}
        </h1>
        <h1
          ref={mottoRef}
          className="lg:text-[3vw] md:text-[4.8vw] text-[6vw] py-8 leading-tight"
        >
          {wrapTextByWords(t('motto.statement'))}
        </h1>
      </div>
    </div>
  );
};

export default Motto;
