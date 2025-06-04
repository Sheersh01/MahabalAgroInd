import React, { useEffect, useRef } from "react";
import statsImg from "../assets/stat.avif"
import barChart from "../assets/bar-chart_7945679.png"
import analyticsImg from "../assets/analytics_7945651.png"
const Statistics = () => {
  const rotateRef = useRef(null);
  const lastScroll = useRef(0);
  const rotation = useRef(0);

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

  return (
    <div className="min-h-screen w-full md:px-12 px-4 py-20 text-[#00461f]">
      <h1 className="lg:text-[3vw] md:text-[3.2vw] text-[8vw] mb-4 font-semibold ">Mahabal in Numbers</h1>
      <p className="lg:text-[2.5vw] md:text-[3vw] lg:w-[80%] md:w-[905] md:mb-20 mb-10">
        Our continuously rising success each year,
        is making us one of Nagpur's organic fertilizer producers.
      </p>
      <div className="flex md:flex-row flex-col-reverse w-full items-center">
        <div className="lg:w-[60%] md:w-1/2 w-full flex lg:gap-40 gap-30 justify-evenly lg:justify-start">
          <div>
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">20+</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">Employee</h1>
            </div>
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">5</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">warehouse</h1>
            </div>
          </div>
          <div>
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">1</h1>
              <h1 className="uppercase md:text-[1.5vw] text-[3vw]">product</h1>
            </div>
            <div className="leading-none tracking-tight mb-10">
              <h1 className="md:text-[6vw] text-[10vw]">2+</h1>
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
