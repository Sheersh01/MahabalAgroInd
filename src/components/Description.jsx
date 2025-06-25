import React, { useEffect, useRef } from "react";
import ContentBox from "./ContentBox";
import description from "../assets/homePage/description.avif";
import description2 from "../assets/homePage/description2.avif";
import description3 from "../assets/homePage/description3.avif";
import { useTranslation } from "react-i18next";
import GraphemeSplitter from "grapheme-splitter"; // Handles complex character splitting (e.g., emojis)

const Description = ({ contents }) => {
  const textRef = useRef(null);
  const { t } = useTranslation("home");

  useEffect(() => {
    // Intersection Observer to trigger animation on scroll into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const letters = entry.target.querySelectorAll(".letter");
            const imageSpans = entry.target.querySelectorAll(".image-span");

            // Animate each character in the text
            letters.forEach((letter, index) => {
              letter.style.animationDelay = `${index * 0.02}s`;
              letter.classList.add("animate-letter");
            });

            // Animate inline images with same delay logic
            imageSpans.forEach((span) => {
              const position = parseInt(span.getAttribute("data-position")) || 0;
              const delay = position * 0.02;
              span.style.animationDelay = `${delay}s`;
              span.classList.add("animate-letter");
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Inject animation CSS into document head
    const style = document.createElement("style");
    style.textContent = `
      @keyframes letterFadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-letter {
        animation: letterFadeIn 0.6s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      document.head.removeChild(style);
    };
  }, []);

  /**
   * Splits text into graphemes (e.g., emojis, accents) and wraps each in span with animation-ready classes.
   * Tracks position for animation sequencing.
   */
  const wrapWordsWithPositions = (text, startIndex = 0) => {
    const splitter = new GraphemeSplitter();
    const words = text.split(" ");
    let currentIndex = startIndex;

    const elements = words
      .map((word, wordIndex) => {
        const graphemes = splitter.splitGraphemes(word);

        const wordElement = (
          <span key={`word-${wordIndex}`} className="inline-block">
            {graphemes.map((char, charIndex) => (
              <span
                key={currentIndex + charIndex}
                className="letter inline-block opacity-0"
              >
                {char}
              </span>
            ))}
          </span>
        );

        currentIndex += graphemes.length;

        if (wordIndex < words.length - 1) {
          // Add space between words with animation
          const spaceElement = (
            <span
              key={`space-${currentIndex}`}
              className="letter inline-block opacity-0"
            >
              {"\u00A0"}
            </span>
          );
          currentIndex += 1;
          return [wordElement, spaceElement];
        }

        return wordElement;
      })
      .flat();

    return {
      elements,
      endIndex: currentIndex,
    };
  };

  // Fetch and prepare animated text parts from translation files
  const part1 = t("description.animatedText.part1");
  const part2 = t("description.animatedText.part2");
  const part3 = t("description.animatedText.part3");

  // Wrap and track character positions for animation delays
  let position = 0;
  const wrapped1 = wrapWordsWithPositions(part1, position);
  position = wrapped1.endIndex;
  const span1Position = position++;

  const wrapped2 = wrapWordsWithPositions(part2, position);
  position = wrapped2.endIndex;
  const span2Position = position++;

  const wrapped3 = wrapWordsWithPositions(part3, position);
  position = wrapped3.endIndex;
  const span3Position = position;

  return (
    <div className="min-h-screen w-full lg:px-12 md:px-8 px-4 lg:py-20 md:py-10 py-10">
      {/* Animated heading with inline images */}
      <h1
        ref={textRef}
        className="lg:mb-20 md:mb-12 mb-10 lg:text-[3vw] md:text-[3.8vw] text-[5.5vw] text-center"
      >
        <>
          {wrapped1.elements}
          <span
            className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
            data-position={span1Position}
          >
            <img className="w-full h-full object-cover" src={description} alt="" />
          </span>
          {wrapped2.elements}
          <span
            className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
            data-position={span2Position}
          >
            <img className="w-full h-full object-cover" src={description2} alt="" />
          </span>
          {wrapped3.elements}
          <span
            className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
            data-position={span3Position}
          >
            <img className="w-full h-full object-cover" src={description3} alt="" />
          </span>
        </>
      </h1>

      {/* Section content cards */}
      <div className="w-full flex md:flex-row flex-col lg:gap-12 md:gap-8 gap-8">
        {contents.map((item, index) => (
          <ContentBox
            key={index}
            heading={item.heading}
            description={item.description}
            img={item.img}
            link={item.link}
            buttonTitle={item.buttonTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Description;
