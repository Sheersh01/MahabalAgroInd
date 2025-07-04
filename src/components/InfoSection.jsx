import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Custom components
import ReadMoreBtn from "./ReadMoreBtn";
import Accordion from "../components/Accordion";

// Image asset
import fertilizerImg from "../assets/homePage/fertilizerImg.png";

// Main InfoSection component
const InfoSection = () => {
  // i18next translation hook
  const { t } = useTranslation();

  // Getting FAQ data as an array of objects
  const faqData = t("faq.items", { returnObjects: true });

  return (
    <div className="bg-[#F6F0E8] text-[#2E1403] md:px-12 px-4">
      
      {/* Section: Info about compost/fertilizer */}
      <div className="flex md:flex-row flex-col">
        
        {/* Left Image Column */}
        <div className="lg:w-[40%] md:w-1/2 w-full flex items-center">
          <div className="lg:w-96 md:w-78 lg:h-96 md:h-78 w-72 h-72 rounded-full mx-auto">
            <img
              className="object-contain w-full h-full"
              src={fertilizerImg}
              alt="Fertilizer"
            />
          </div>
        </div>

        {/* Right Text Column */}
        <div className="lg:w-[60%] md:w-1/2 w-full py-20">
          <h1 className="font-semibold lg:text-[4vw] md:text-[4vw] text-[7vw] leading-none pb-8">
            {t("info.heading")}
          </h1>
          <p className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw] leading-normal">
            {t("info.description")}
          </p>

          {/* CTA Button */}
          <Link to="/product">
            <ReadMoreBtn title={t("info.button")} />
          </Link>
        </div>
      </div>

      {/* Section: FAQ Accordion */}
      <div>
        <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] lg:mt-16 mt-10 md:py-2 underline font-semibold">
          {t("faq.heading")}
        </h1>

        {/* FAQ List */}
        <Accordion data={faqData} />
      </div>
    </div>
  );
};

export default InfoSection;
