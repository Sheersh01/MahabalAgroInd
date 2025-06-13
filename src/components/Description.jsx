import React, { useEffect, useRef } from "react";
import ContentBox from "./ContentBox";
import des from "../assets/des.avif";
import des2 from "../assets/des2.avif";
import des3 from "../assets/des3.avif";
import { useTranslation } from "react-i18next";
import GraphemeSplitter from "grapheme-splitter"; // ✅ NEW

const Description = ({ contents }) => {
  const textRef = useRef(null);
  const { t } = useTranslation("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const letters = entry.target.querySelectorAll(".letter");
            const imageSpans = entry.target.querySelectorAll(".image-span");

            letters.forEach((letter, index) => {
              letter.style.animationDelay = `${index * 0.02}s`;
              letter.classList.add("animate-letter");
            });

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

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      document.head.removeChild(style);
    };
  }, []);

  const wrapWordsWithPositions = (text, startIndex = 0) => {
    const splitter = new GraphemeSplitter(); // ✅ Use grapheme splitter
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

  // 🔤 Localized animated text
  const part1 = t("description.animatedText.part1");
  const part2 = t("description.animatedText.part2");
  const part3 = t("description.animatedText.part3");

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
      <h1
        ref={textRef}
        className="lg:mb-20 md:mb-12 mb-10 lg:text-[3vw] md:text-[4vw] text-[5.5vw] text-center"
      >
        <>
          {wrapped1.elements}
          <span
            className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
            data-position={span1Position}
          >
            <img className="w-full h-full object-cover" src={des} alt="" />
          </span>
          {wrapped2.elements}
          <span
            className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
            data-position={span2Position}
          >
            <img className="w-full h-full object-cover" src={des2} alt="" />
          </span>
          {wrapped3.elements}
          <span
            className="image-span overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 opacity-0"
            data-position={span3Position}
          >
            <img className="w-full h-full object-cover" src={des3} alt="" />
          </span>
        </>
      </h1>

      <div className="w-full flex md:flex-row flex-col lg:gap-12 md:gap-8 gap-8">
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
