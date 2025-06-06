import React, { useRef } from "react";
import PageHeader from "../components/PageHeader";
import aboutUsImg from "../assets/about.avif";
import about2Img from "../assets/about2.avif";
import about3Img from "../assets/about3.avif";
import about4Img from "../assets/about4.avif";

const About = () => {
  const aboutUsRef = useRef(null);
  const valuesRef = useRef(null);
  const historyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F0E8] text-[#2E1403]">
      <PageHeader
        title="About Us"
        breadcrumb="Home / About Us"
        image={aboutUsImg}
      />
      
      <div className="w-full md:px-12 md:mt-20 px-8 mt-10">
        <div className="border-[#2E1403] border-y-1 md:mb-20 mb-10 flex gap-12 justify-center text-center">
          <button 
            onClick={() => scrollToSection(aboutUsRef)}
            className="uppercase md:text-[1.5vw] text-[2.5vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection(valuesRef)}
            className="uppercase md:text-[1.5vw] text-[2.5vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            Our Values
          </button>
          <button 
            onClick={() => scrollToSection(historyRef)}
            className="uppercase md:text-[1.5vw] text-[2.5vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            Our History
          </button>
        </div>

        <section ref={aboutUsRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col">
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
           <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[6vw] leading-none tracking-tight">
            About Us
            </h1>
            <h1 className="my-4">
              At EcoHarvest Engineering, we are dedicated to transforming agriculture through sustainable practices. Our mission is to restore soil vitality and empower farmers by providing high-quality organic compost enriched with beneficial microbes and nutrients.
            </h1>
            <h1>
              We believe in nurturing the earth responsibly, enhancing crop resilience, and reducing reliance on chemical fertilizers. Through innovation and commitment, we strive to support healthy ecosystems and promote environmental stewardship for generations to come.
            </h1>
          </div>
        </section>

        <section ref={valuesRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex flex-col md:flex-row-reverse">
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
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[6vw] leading-none tracking-tight">
            Our Values
            </h1>
            <h1 className="my-4">
              Integrity, sustainability, and innovation form the core of our values. We prioritize transparency in our processes, ensuring every batch of compost meets rigorous quality standards.
            </h1>
            <h1>
              We are committed to fostering long-term relationships with our clients and partners by promoting environmentally friendly farming practices. Our focus is on creating solutions that balance productivity with ecological responsibility.
            </h1>
          </div>
        </section>

        <section ref={historyRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col">
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
          <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[6vw] leading-none tracking-tight">
            Our History
            </h1>
            <h1 className="my-4">
              Founded in 2010, EcoHarvest Engineering began as a small initiative to address soil degradation and promote organic farming. Over the years, we have grown into a trusted supplier of eco-friendly compost solutions for farmers and agricultural businesses.
            </h1>
            <h1>
              Our journey has been marked by continuous research, technological advancements, and close collaboration with the farming community. We take pride in contributing to healthier soils, better crop yields, and a greener planet.
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;