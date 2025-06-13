import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import aboutUsImg from "../assets/about2.avif";
import about2Img from "../assets/about5.avif";
import about3Img from "../assets/about3.avif";
import about4Img from "../assets/about4.avif";

const About = () => {
  const { t } = useTranslation("about");

  const aboutUsRef = useRef(null);
  const valuesRef = useRef(null);
  const historyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F0E8] text-[#2E1403]">
      <PageHeader
        title={t("title")}
        breadcrumb={t("breadcrumb")}
        image={aboutUsImg}
      />

      <div className="w-full md:px-12 md:mt-20 px-6 mt-10">
        <div className="border-[#2E1403] border-y-1 md:mb-20 mb-10 flex gap-12 justify-center text-center">
          <button
            onClick={() => scrollToSection(aboutUsRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            {t("tabs.about")}
          </button>
          <button
            onClick={() => scrollToSection(valuesRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            {t("tabs.values")}
          </button>
          <button
            onClick={() => scrollToSection(historyRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            {t("tabs.history")}
          </button>
        </div>

        {/* About Us Section */}
        <section
          ref={aboutUsRef}
          className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col"
        >
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src={about2Img}
                alt="About Us Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[8vw]">
              {t("about.heading")}
            </h1>
            <h1 className="my-4">{t("about.p1")}</h1>
            <h1>{t("about.p2")}</h1>
          </div>
        </section>

        {/* Our Values Section */}
        <section
          ref={valuesRef}
          className="lg:mb-40 md:mb-20 mb-10 w-full flex flex-col md:flex-row-reverse"
        >
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src={about3Img}
                alt="Our Values Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[8vw]">
              {t("values.heading")}
            </h1>
            <h1 className="my-4">{t("values.p1")}</h1>
            <h1>{t("values.p2")}</h1>
          </div>
        </section>

        {/* Our History Section */}
        <section
          ref={historyRef}
          className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col"
        >
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src={about4Img}
                alt="Our History Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[8vw]">
              {t("history.heading")}
            </h1>
            <h1 className="my-4">{t("history.p1")}</h1>
            <h1>{t("history.p2")}</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
