import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import productImg from "../assets/awareness.avif";
import awareness1Img from "../assets/awareness5.avif";
import awareness3Img from "../assets/awareness3.avif";
import awareness4Img from "../assets/awareness4.avif";

// Benefit icons
import icon1 from "../assets/seeding (1).png";
import icon2 from "../assets/water-drop.png";
import icon3 from "../assets/crops (1).png";
import icon4 from "../assets/flasks.png";
import icon5 from "../assets/yes (1).png";
import icon6 from "../assets/save-money.png";

const Farmers = () => {
  const { t } = useTranslation("awareness");
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null);
  const usageRef = useRef(null);
  const sustainableRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const benefitIcons = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <div className="min-h-screen w-full bg-[#F6F0E8] text-[#2E1403]">
      <PageHeader
        title={t("title")}
        breadcrumb={t("breadcrumb")}
        image={productImg}
      />

      <div className="w-full md:px-12 md:mt-20 px-6 mt-10">
        {/* Navigation Buttons */}
        <div className="border-y border-[#2E1403] md:mb-20 mb-10 flex flex-wrap justify-center md:gap-12 gap-4  text-center py-4">
          {[
            { label: "menu.about", ref: aboutRef },
            { label: "menu.benefits", ref: benefitsRef },
            { label: "menu.usage", ref: usageRef },
            { label: "menu.sustainable", ref: sustainableRef }
          ].map(({ label, ref }, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(ref)}
              className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors"
            >
              {t(label)}
            </button>
          ))}
        </div>

        {/* About Section */}
        <section ref={aboutRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full">
            <div className="w-full h-[60vw] md:h-[50vw] lg:h-[30vw] mb-10">
              <img src={awareness1Img} alt="Mahabal Compost" className="object-cover w-full h-full rounded-xl" />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center lg:px-8 md:px-4 md:text-left">
            <h1 className="font-semibold text-[6vw] md:text-[3.2vw] lg:text-[2.8vw] leading-tight md:text-start text-center mb-10">
              {t("about.title")}
            </h1>
            {(t("about.points", { returnObjects: true }) || []).map((point, idx) => (
              <p key={idx} className="mb-2 lg:text-[1.2vw] md:text-[2vw]">• {point}</p>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="lg:mb-40 md:mb-20 mb-10 w-full">
          <h1 className="font-semibold text-[8vw] md:text-[3.2vw] lg:text-[2.8vw] mb-10 text-center">
            {t("benefits.title")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="group border border-[#2E1403] rounded-2xl p-6 h-[13rem] md:h-[14rem] lg:h-[18rem] justify-start bg-[#F6F0E8] text-[#2E1403] hover:bg-[#2E1403] hover:text-[#F6F0E8] transition-all duration-300"
              >
                <img
                  className="lg:w-14 md:w-10 w-8 lg:h-14 md:h-10 h-8  lg:mb-4 mb-2  transition duration-300 group-hover:invert"
                  src={benefitIcons[index - 1]}
                  alt={`Benefit ${index}`}
                />
                <h2 className="lg:text-lg md:text-md text-sm font-bold mb-2">
                  {t(`benefits.card${index}.title`)}
                </h2>
                <p className="lg:text-lg md:text-md text-sm">{t(`benefits.card${index}.text`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Section */}
        <section ref={usageRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full">
            <div className="w-full h-[60vw] md:h-[50vw] lg:h-[30vw] mb-10">
              <img src={awareness3Img} alt="How to Apply" className="object-cover w-full h-full rounded-xl" />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center lg:px-8 md:px-4   md:text-left">
            <h1 className="font-semibold text-[8vw] md:text-[3.2vw] lg:text-[2.8vw] leading-tight text-center mb-6  md:text-start">
              {t("usage.title")}
            </h1>
            {(t("usage.points", { returnObjects: true }) || []).map((point, idx) => (
              <p key={idx} className="mb-2">• {point}</p>
            ))}
          </div>
        </section>

        {/* Sustainable Section */}
        <section ref={sustainableRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 w-full">
            <div className="w-full h-[60vw] md:h-[50vw] lg:h-[30vw] mb-10">
              <img src={awareness4Img} alt="Sustainable Farming" className="object-cover w-full h-full rounded-xl" />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center lg:px-8 md:px-4  md:text-left">
            <h1 className="font-semibold text-[8vw] md:text-[3.2vw] lg:text-[2.8vw] leading-tight text-center mb-4  md:text-start">
              {t("sustainable.title")}
            </h1>
            {(t("sustainable.points", { returnObjects: true }) || []).map((point, idx) => (
              <p key={idx} className="mb-3">• {point}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Farmers;
