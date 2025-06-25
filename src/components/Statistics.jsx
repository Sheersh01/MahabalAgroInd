import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import GraphemeSplitter from "grapheme-splitter";

// Images
import statsCircleImg from "../assets/homePage/statsCircleImg.avif";
import barChart from "../assets/homePage/barChart.png";
import analyticsImg from "../assets/homePage/analyticsImg.png";

/**
 * Statistics Component
 * - Displays animated statistics and scroll-based rotating image
 * - Animates heading/subtitle letters individually
 * - Numbers count up when scrolled into view
 * - Animations play only once
 */
const Statistics = () => {
  const { t } = useTranslation();
  const rotateRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  // Scroll/rotation tracking
  const lastScroll = useRef(0);
  const rotation = useRef(0);

  // Animation state tracking
  const [hasAnimated, setHasAnimated] = useState({
    title: false,
    subtitle: false,
    stats: false,
  });

  // State for animated number values
  const [animatedNumbers, setAnimatedNumbers] = useState({
    employees: 0,
    warehouses: 0,
    products: 0,
    experience: 0,
  });

  // Target numbers from i18n
  const targetNumbers = t("statistics.data", { returnObjects: true });

  // Scroll handler for rotating image
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll.current ? "down" : "up";
      rotation.current += direction === "down" ? 0.08 : -0.08;

      if (rotateRef.current) {
        rotateRef.current.style.transform = `rotate(${rotation.current}deg)`;
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate number counting
  const animateNumber = (key, target, duration = 1500) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * target);

      setAnimatedNumbers((prev) => ({
        ...prev,
        [key]: currentValue,
      }));

      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  // Wrap characters with animation spans
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

  // Animation on intersection (letters + number count-up) - ONCE ONLY
  useEffect(() => {
    const createTextObserver = (elementType) =>
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated[elementType]) {
              const letters = entry.target.querySelectorAll(".letter");
              letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.02}s`;
                letter.classList.add("animate-letter");
              });
              
              // Mark as animated and disconnect observer
              setHasAnimated(prev => ({ ...prev, [elementType]: true }));
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      );

    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.stats) {
            // Trigger animated numbers
            setTimeout(() => animateNumber("employees", targetNumbers.employees), 100);
            setTimeout(() => animateNumber("products", targetNumbers.products), 0);
            setTimeout(() => animateNumber("warehouses", targetNumbers.warehouses), 200);
            setTimeout(() => animateNumber("experience", targetNumbers.experience), 300);
            
            // Mark as animated and disconnect observer
            setHasAnimated(prev => ({ ...prev, stats: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Inject keyframe CSS for letter fade-in
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

    const titleObserver = createTextObserver('title');
    const subtitleObserver = createTextObserver('subtitle');

    if (titleRef.current && !hasAnimated.title) titleObserver.observe(titleRef.current);
    if (subtitleRef.current && !hasAnimated.subtitle) subtitleObserver.observe(subtitleRef.current);
    if (statsRef.current && !hasAnimated.stats) statsObserver.observe(statsRef.current);

    // Cleanup on unmount
    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      if (subtitleRef.current) subtitleObserver.unobserve(subtitleRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
      document.head.removeChild(style);
    };
  }, [hasAnimated, targetNumbers]);

  return (
    <div className="min-h-screen w-full md:px-12 px-4 py-20 text-[#2E1403]">
      {/* Title with letter animation */}
      <h1
        ref={titleRef}
        className="lg:text-[3vw] md:text-[3.2vw] text-[8vw] mb-4 font-semibold"
      >
        {wrapWordsWithPositions(t("statistics.title")).elements}
      </h1>

      {/* Subtitle with letter animation */}
      <p
        ref={subtitleRef}
        className="lg:text-[2.5vw] md:text-[3vw] lg:w-[80%] md:w-[90%] md:mb-20 mb-10"
      >
        {wrapWordsWithPositions(t("statistics.subtitle")).elements}
      </p>

      <div className="flex md:flex-row flex-col-reverse w-full items-center">
        {/* Left: Animated Stats */}
        <div
          ref={statsRef}
          className="lg:w-[60%] md:w-1/2 w-full flex lg:gap-40 gap-30 justify-evenly lg:justify-start"
        >
          <div>
            {/* Employees */}
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">{animatedNumbers.employees}+</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">{t("statistics.employee")}</h1>
            </div>
            {/* Warehouses */}
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">{animatedNumbers.warehouses}</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">{t("statistics.warehouses")}</h1>
            </div>
          </div>
          <div>
            {/* Products */}
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">{animatedNumbers.products}</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">{t("statistics.products")}</h1>
            </div>
            {/* Experience */}
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">{animatedNumbers.experience}+</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">{t("statistics.experience")}</h1>
            </div>
          </div>
        </div>

        {/* Right: Rotating Circle Image with overlays */}
        <div className="lg:w-[40%] md:w-1/2 w-full mb-10 relative flex justify-center items-center">
          <div className="lg:h-96 lg:w-96 md:w-72 md:h-72 h-60 w-60 rounded-full overflow-hidden">
            <img
              ref={rotateRef}
              className="h-full w-full object-cover -rotate-10"
              src={statsCircleImg}
              alt=""
            />
          </div>
          {/* Overlay Icons */}
          <img
            className="lg:w-24 md:w-16 w-14 absolute bottom-0 xl:left-[7vw] lg:left-0 md:left-10 left-12"
            src={barChart}
            alt=""
          />
          <img
            className="lg:w-24 md:w-16 w-14 absolute top-0 xl:left-[26vw] lg:left-72 md:left-60 left-60"
            src={analyticsImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;