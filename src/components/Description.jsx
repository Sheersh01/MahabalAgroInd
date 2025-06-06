// Description.jsx
import React from "react";
import ContentBox from "./ContentBox";
import des from "../assets/des.avif";
import des2 from "../assets/des2.avif";
import des3 from "../assets/des3.avif";
import whatImg from "../assets/what.avif";
import whoImg from "../assets/who.avif";
const Description = () => {
  const contents = [
    {
      heading: "Who are we. . .",
      description:
        "We believe in nurturing the earth responsibly, enhancing crop resilience, and reducing reliance on chemical fertilizers. Through innovation and commitment, we strive to support healthy ecosystems and promote environmental stewardship for generations to come.",
      img: whatImg,
      link: "/about",
    },
    {
      heading: "What we do. . .",
      description:
        "We serve farmers across Nagpur Rural and Urban, delivering nutrient-rich compost that reduces the need for chemicals and supports long-term soil vitality. Through innovation and eco-friendly practices, we help build a greener, healthier future for agriculture.",
      img: whoImg,
      link: "/awareness",
    },
  ];

  return (
    <div className="min-h-screen w-full lg:px-12 md:px-8 px-4 lg:py-20 md:py-10 py-10 ">
      <h1 className="lg:mb-20 md:mb-12 mb-10 lg:text-[3vw] md:text-[4vw] text-[5.5vw] text-center ">
        We're passionate about modernizing{" "}
        <span className="overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3 ">
          <img className="w-full h-full object-cover" src={des} alt="" />
        </span>{" "}
        agriculture. Our team of experts is dedicated to bringing latest
        technology to farming{" "}
        <span className="overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3">
          <img className="w-full h-full object-cover" src={des2} alt="" />
        </span>{" "}
        industry. With years of experience, we're committed to providing best
        solutions for farmers.{" "}
        <span className="overflow-hidden lg:w-50 md:w-40 w-16 h-6 translate-y-2 lg:h-16 md:h-10 rounded-full inline-block lg:translate-y-4 md:translate-y-3">
          <img className="w-full h-full object-cover" src={des3} alt="" />
        </span>
      </h1>

      <div className="w-full flex md:flex-row flex-col lg:gap-12 md:gap-8 gap-8 ">
        {contents.map((item, index) => (
          <ContentBox
            key={index}
            heading={item.heading}
            description={item.description}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Description;
