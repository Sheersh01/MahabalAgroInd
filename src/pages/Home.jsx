import React from "react";
import { useTranslation } from "react-i18next";

// Section components
import Hero from "../components/Hero";
import Description from "../components/Description";
import Statistics from "../components/Statistics";
import Motto from "../components/Motto";
import Facts from "../components/Facts";
import InfoSection from "../components/InfoSection";
import Testimonials from "../components/Testimonials";

// Images for Description & Facts sections
import whatImg from "../assets/homePage/what.avif";
import whoImg from "../assets/homePage/who.avif";
import IndustryWeServe from "../assets/homePage/IndustryWeServe.avif";
import compostSystem from "../assets/homePage/compostSystem.avif";

/**
 * Home Page Component
 * - Displays main hero, sections like what/who we are, statistics, motto, industry info, etc.
 */
const Home = () => {
  const { t } = useTranslation("home"); // i18n for 'home' namespace

  // First description section content (what/who we are)
  const contentsData = t("description.contentSections", { returnObjects: true }).map((item, index) => ({
    ...item,
    img: index === 0 ? whatImg : whoImg,
    link: index === 0 ? "/about" : "/farmers", // Link to relevant page
  }));

  // Second facts section content (industries served / composting system)
  const contentsData2 = t("description.contentSections2", { returnObjects: true }).map((item, index) => ({
    ...item,
    img: index === 0 ? IndustryWeServe : compostSystem,
    link: index === 0 ? "/about" : "/farmers", // Reuses same routing logic
  }));

  return (
    <div className="relative">
      {/* Landing Hero Section */}
      <Hero />

      {/* What & Who We Are */}
      <Description contents={contentsData} />

      {/* Animated Statistics */}
      <Statistics />

      {/* Company Motto */}
      <Motto />

      {/* Industry Info & Compost System Details */}
      <Facts contents={contentsData2} />

      {/* Info about Products or Process */}
      <InfoSection />

      {/* User Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Home;
