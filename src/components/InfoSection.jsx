import React from "react";
import {Link} from "react-router-dom";
import ReadMoreBtn from "./ReadMoreBtn";
import fertilizerImg from "../assets/fertilizer_6986765.png";
const InfoSection = () => {
  return (
    <div className="bg-white text-[#00461f] md:px-12 px-4">
      <div className="flex md:flex-row flex-col">
        <div className="lg:w-[40%] md:w-1/2 w-full flex items-center">
        <div className="lg:w-96 md:w-78 lg:h-96 md:h-78 w-72 h-72  rounded-full mx-auto">
            <img className="object-contain w-full h-full" src={fertilizerImg} alt="" />
        </div>
        </div>
        <div className="lg:w-[60%] md:w-1/2 w-full py-20">
          <h1 className="lg:text-[3vw] md:text-[3.2vw] text-[8vw] mb-4 font-semibold">Our Product</h1>
          <h1 className="font-semibold lg:text-[4vw] md:text-[4vw] text-[7vw] leading-none pb-8">
            Engineering Compost: A Smarter Way to Fertilize Naturally
          </h1>
          <p className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw] leading-normal">
            Discover the next generation of organic fertilizers — made from
            biomass, cow dung, cow urine, and enriched with natural cultures
            like trichoderma and bio NPK. Safe, sustainable, and designed to
            boost soil health and crop productivity without the drawbacks of
            chemical or raw waste fertilizers.
          </p>
         <Link to="/product"> <ReadMoreBtn title="Read More" /></Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
