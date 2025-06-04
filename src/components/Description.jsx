import React from "react";
import ContentBox from "./ContentBox";
import des from "../assets/des.avif";
import des2 from "../assets/des2.avif";
import des3 from "../assets/des3.avif";

const Description = () => {
  return (
    <div className="min-h-screen w-full lg:px-12 md:px-8 px-4 lg:py-20 md:py-10 py-10">
      <h1 className="lg:mb-20 md:mb-12 mb-10 lg:text-[3vw] md:text-[4vw] text-[5.5vw] text-center">
        We're passionate about modernizing{" "}
        <span className="overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3">
          <img className="w-full h-full object-cover" src={des} alt="" />
        </span>{" "}
        agriculture.Our team of experts is dedicated to bringing latest
        technology to farming{" "}
        <span className="overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3">
          <img className="w-full h-full object-cover" src={des2} alt="" />
        </span>{" "}
        industry.With years of experience, we're committed to providing best
        solutions for farmers.{" "}
        <span className="overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3">
          <img className="w-full h-full object-cover" src={des3} alt="" />
        </span>
      </h1>
      <div className="w-full flex md:flex-row flex-col lg:gap-12 md:gap-8 gap-8 ">
        <ContentBox />
        <ContentBox />
      </div>
    </div>
  );
};

export default Description;
