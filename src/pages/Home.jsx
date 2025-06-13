import React from "react";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Statistics from "../components/Statistics";
import InfoSection from "../components/InfoSection";
import Motto from "../components/Motto";
import Testimonials from "../components/Testimonials";
import whatImg from "../assets/what.avif";
import whoImg from "../assets/who.avif";
import Facts from "../components/Facts";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");

  const contentsData = t("description.contentSections", { returnObjects: true }).map((item, index) => ({
    ...item,
    img: index === 0 ? whatImg : whoImg,
    link: index === 0 ? "/about" : "/awareness"
  }));

  const contentsData2 = t("description.contentSections2", { returnObjects: true }).map((item, index) => ({
    ...item,
    img: index === 0 ? whatImg : whoImg,
    link: index === 0 ? "/about" : "/awareness"
  }));

  return (
    <div className="relative">
      <Hero />
      <Description contents={contentsData} />
      <Statistics />
      <Motto />
      <Facts contents={contentsData2} />
      <InfoSection />
      <Testimonials />
    </div>
  );
};

export default Home;
