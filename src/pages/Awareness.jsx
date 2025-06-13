import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import productImg from "../assets/awareness.avif";
import awareness1Img from "../assets/awareness5.avif";
import awareness2Img from "../assets/awareness2.avif";
import awareness3Img from "../assets/awareness3.avif";
import awareness4Img from "../assets/awareness4.avif";

const Awareness = () => {
  const { t } = useTranslation("awareness");
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null);
  const usageRef = useRef(null);
  const sustainableRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F0E8] text-[#2E1403]">
      <PageHeader
        title={t("title")}
        breadcrumb={t("breadcrumb")}
        image={productImg}
      />
      <div className="w-full md:px-12 md:mt-20 px-6 mt-10">
        <div className="border-[#2E1403] border-y-1 md:mb-20 mb-10 flex md:gap-12 gap-2 justify-center flex-wrap text-center">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            {t("menu.about")}
          </button>
          <button 
            onClick={() => scrollToSection(benefitsRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            {t("menu.benefits")}
          </button>
          <button 
            onClick={() => scrollToSection(usageRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            {t("menu.usage")}
          </button>
          <button 
            onClick={() => scrollToSection(sustainableRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            {t("menu.sustainable")}
          </button>
        </div>

        <section ref={aboutRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src={awareness1Img}
                alt="EcoHarvest Engineering Compost Product"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[8vw] leading-none tracking-tight">
              {t("about.title")}
            </h1>
            <h1 className="my-4">{t("about.para1")}</h1>
            <h1>{t("about.para2")}</h1>
          </div>
        </section>

        <section ref={benefitsRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex flex-col items-center md:flex-row-reverse">
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src={awareness2Img}
                alt="Why Choose Compost Over Chemicals"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[8vw] leading-none tracking-tight">
              {t("benefits.title")}
            </h1>
            <h1 className="my-4">{t("benefits.para1")}</h1>
            <h1>{t("benefits.para2")}</h1>
          </div>
        </section>

        <section ref={usageRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src={awareness3Img}
                alt="Using EcoHarvest Compost Guide"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[8vw] leading-none tracking-tight">
              {t("usage.title")}
            </h1>
            <h1 className="my-4">{t("usage.para1")}</h1>
            <h1>{t("usage.para2")}</h1>
          </div>
        </section>

        <section ref={sustainableRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex flex-col items-center md:flex-row-reverse">
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src={awareness4Img}
                alt="Sustainable Farming with Compost"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[8vw] leading-none tracking-tight">
              {t("sustainable.title")}
            </h1>
            <h1 className="my-4">{t("sustainable.para1")}</h1>
            <h1>{t("sustainable.para2")}</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awareness;
