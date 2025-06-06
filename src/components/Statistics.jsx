import React, { useEffect, useRef, useState } from "react";
import statsImg from "../assets/stat.avif"
import barChart from "../assets/bar-chart_7945679.png"
import analyticsImg from "../assets/analytics_7945651.png"

const Statistics = () => {
  const rotateRef = useRef(null);
  const lastScroll = useRef(0);
  const rotation = useRef(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  // State for animated numbers
  const [animatedNumbers, setAnimatedNumbers] = useState({
    employees: 0,
    warehouses: 0,
    products: 0,
    experience: 0
  });

  // Target numbers
  const targetNumbers = {
    employees: 20,
    warehouses: 5,
    products: 2,
    experience: 2
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll.current ? "down" : "up";

      // Adjust rotation step size as needed
      rotation.current += direction === "down" ? 0.05 : -0.05;

      if (rotateRef.current) {
        rotateRef.current.style.transform = `rotate(${rotation.current}deg)`;
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to animate a number from 0 to target
  const animateNumber = (key, target, duration = 1500) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOut function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * target);
      
      setAnimatedNumbers(prev => ({
        ...prev,
        [key]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Function to wrap each word in a span while keeping letters inside for animation
  const wrapWordsWithPositions = (text, startIndex = 0) => {
    const words = text.split(' ');
    let currentIndex = startIndex;
    
    const elements = words.map((word, wordIndex) => {
      const wordElement = (
        <span key={`word-${wordIndex}`} className="inline-block">
          {word.split('').map((char, charIndex) => (
            <span
              key={currentIndex + charIndex}
              className="letter inline-block opacity-0"
            >
              {char}
            </span>
          ))}
        </span>
      );
      
      currentIndex += word.length;
      
      // Add space after word (except last word)
      if (wordIndex < words.length - 1) {
        const spaceElement = (
          <span
            key={`space-${currentIndex}`}
            className="letter inline-block opacity-0"
          >
            {'\u00A0'}
          </span>
        );
        currentIndex += 1;
        return [wordElement, spaceElement];
      }
      
      return wordElement;
    }).flat();
    
    return {
      elements,
      endIndex: currentIndex
    };
  };

  useEffect(() => {
    // Text animation observers
    const createTextObserver = (ref) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const letters = entry.target.querySelectorAll('.letter');
              
              letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.02}s`;
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
    };

    // Stats animation observer for number counting
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start number animations with staggered delays
            setTimeout(() => animateNumber('employees', targetNumbers.employees), 100);
            setTimeout(() => animateNumber('products', targetNumbers.products), 0);
            setTimeout(() => animateNumber('warehouses', targetNumbers.warehouses), 200);
            setTimeout(() => animateNumber('experience', targetNumbers.experience), 300);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Add CSS animations
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
        animation: letterFadeIn 0.6s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    // Create observers for each text element
    const titleObserver = createTextObserver();
    const subtitleObserver = createTextObserver();

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }
    if (subtitleRef.current) {
      subtitleObserver.observe(subtitleRef.current);
    }
    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (subtitleRef.current) {
        subtitleObserver.unobserve(subtitleRef.current);
      }
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen w-full md:px-12 px-4 py-20 text-[#2E1403]">
      <h1 
        ref={titleRef}
        className="lg:text-[3vw] md:text-[3.2vw] text-[8vw] mb-4 font-semibold"
      >
        {wrapWordsWithPositions("Mahabal in Numbers").elements}
      </h1>
      <p 
        ref={subtitleRef}
        className="lg:text-[2.5vw] md:text-[3vw] lg:w-[80%] md:w-[905] md:mb-20 mb-10"
      >
        {wrapWordsWithPositions("Our continuously rising success each year, is making us one of Nagpur's organic fertilizer producers.").elements}
      </p>
      <div className="flex md:flex-row flex-col-reverse w-full items-center">
        <div 
          ref={statsRef}
          className="lg:w-[60%] md:w-1/2 w-full flex lg:gap-40 gap-30 justify-evenly lg:justify-start"
        >
          <div>
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">{animatedNumbers.employees}+</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">Employee</h1>
            </div>
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">{animatedNumbers.warehouses}</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">warehouse</h1>
            </div>
          </div>
          <div>
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">{animatedNumbers.products}</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">product</h1>
            </div>
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">{animatedNumbers.experience}+</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">years experience</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] md:w-1/2 w-full mb-10 relative flex justify-center items-center">
          <div className="lg:h-96 lg:w-96 md:w-72 md:h-72 h-60 w-60 rounded-full overflow-hidden">
            <img
              ref={rotateRef}
              className="h-full w-full object-cover -rotate-10"
              src={statsImg}
              alt=""
            />
          </div>
          <img
            className="lg:w-24 md:w-16 w-14 absolute bottom-0 lg:left-20 md:left-10 left-12"
            src={barChart}
            alt=""
          />
          <img
            className="lg:w-24 md:w-16 w-14 absolute top-0 lg:left-96 md:left-60 left-56"
            src={analyticsImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;