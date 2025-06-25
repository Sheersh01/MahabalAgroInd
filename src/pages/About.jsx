import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

// Component
import PageHeader from "../components/PageHeader";

// Assets
import aboutImg from "../assets/aboutPage/aboutImg.avif";
import aboutImg2 from "../assets/aboutPage/aboutImg2.avif";
import aboutImg3 from "../assets/aboutPage/aboutImg3.avif";
import aboutImg4 from "../assets/aboutPage/aboutImg4.avif";

/**
 * About Page Component
 * Contains three scrollable sections: About Us, Our Values, Our History
 */
const About = () => {
  const { t } = useTranslation("about"); // Translation hook for "about" namespace

  // Section Refs for smooth scrolling
  const aboutUsRef = useRef(null);
  const valuesRef = useRef(null);
  const historyRef = useRef(null);

  // Scrolls to the section referenced
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F0E8] text-[#2E1403]">
      {/* Page Header */}
      <PageHeader
        title={t("title")}
        breadcrumb={t("breadcrumb")}
        image={aboutImg}
      />

      {/* Navigation Tabs */}
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
          {/* Left: Image */}
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center rounded-2xl overflow-hidden">
              <img
                src={aboutImg2}
                alt="About Us Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right: Text Content */}
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
          {/* Right: Image */}
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center rounded-2xl overflow-hidden">
              <img
                src={aboutImg3}
                alt="Our Values Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Left: Text Content */}
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
          {/* Left: Image */}
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center rounded-2xl overflow-hidden">
              <img
                src={aboutImg4}
                alt="Our History Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right: Text Content */}
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
