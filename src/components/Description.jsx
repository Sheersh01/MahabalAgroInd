import React, { useEffect, useRef } from "react";
import ContentBox from "./ContentBox";
import des from "../assets/des.avif";
import des2 from "../assets/des2.avif";
import des3 from "../assets/des3.avif";
import whatImg from "../assets/what.avif";
import whoImg from "../assets/who.avif";

const Description = () => {
  const textRef = useRef(null);

  const contents = [
    {
      heading: "Who are we. . .",
      description:
        "We believe in nurturing the earth responsibly, enhancing crop resilience, and reducing reliance on chemical fertilizers. Through innovation and commitment, we strive to support healthy ecosystems and promote environmental stewardship for generations to come.",
      img: whatImg,
      link: "/about",
    },
    {
      heading: "What we do. . .",
      description:
        "We serve farmers across Nagpur Rural and Urban, delivering nutrient-rich compost that reduces the need for chemicals and supports long-term soil vitality. Through innovation and eco-friendly practices, we help build a greener, healthier future for agriculture.",
      img: whoImg,
      link: "/awareness",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const letters = entry.target.querySelectorAll('.letter');
            const imageSpans = entry.target.querySelectorAll('.image-span');
            
            letters.forEach((letter, index) => {
              letter.style.animationDelay = `${index * 0.02}s`;
              letter.classList.add('animate-letter');
            });

            // Animate image spans with precise staggered timing
            imageSpans.forEach((span, index) => {
              // Get the data-position attribute to know when this span should animate
              const position = parseInt(span.getAttribute('data-position')) || 0;
              const delay = position * 0.02;
              
              span.style.animationDelay = `${delay}s`;
              span.classList.add('animate-letter');
            });
          }
        });
      },
      {
        threshold: 0.2, // Trigger earlier
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Add CSS animation
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

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      document.head.removeChild(style);
    };
  }, []);

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

  return (
    <div className="min-h-screen w-full lg:px-12 md:px-8 px-4 lg:py-20 md:py-10 py-10 ">
      <h1 
        ref={textRef}
        className="lg:mb-20 md:mb-12 mb-10 lg:text-[3vw] md:text-[4vw] text-[5.5vw] text-center"
      >
        {(() => {
          let position = 0;
          const text1 = "We're passionate about modernizing";
          const wrapped1 = wrapWordsWithPositions(text1, position);
          position = wrapped1.endIndex;
          
          const span1Position = position;
          position += 1; // Account for the span as one position
          
          const text2 = "agriculture. Our team of experts is dedicated to bringing latest technology to farming";
          const wrapped2 = wrapWordsWithPositions(text2, position);
          position = wrapped2.endIndex;
          
          const span2Position = position;
          position += 1;
          
          const text3 = "industry. With years of experience, we're committed to provide best solutions for farmers.";
          const wrapped3 = wrapWordsWithPositions(text3, position);
          position = wrapped3.endIndex;
          
          const span3Position = position;
          
          return (
            <>
              {wrapped1.elements}{" "}
              <span 
                className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
                data-position={span1Position}
              >
                <img className="w-full h-full object-cover" src={des} alt="" />
              </span>{" "}
              {wrapped2.elements}{" "}
              <span 
                className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
                data-position={span2Position}
              >
                <img className="w-full h-full object-cover" src={des2} alt="" />
              </span>{" "}
              {wrapped3.elements}{" "}
              <span 
                className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
                data-position={span3Position}
              >
                <img className="w-full h-full object-cover" src={des3} alt="" />
              </span>
            </>
          );
        })()}
      </h1>

      <div className="w-full flex md:flex-row flex-col lg:gap-12 md:gap-8 gap-8 ">
        {contents.map((item, index) => (
          <ContentBox
            key={index}
            heading={item.heading}
            description={item.description}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Description;