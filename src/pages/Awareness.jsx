import React, { useRef } from "react";
import PageHeader from "../components/PageHeader";
import productImg from "../assets/awareness.avif";
import awareness1Img from "../assets/awareness5.avif";
import awareness2Img from "../assets/awareness2.avif";
import awareness3Img from "../assets/awareness3.avif";
import awareness4Img from "../assets/awareness4.avif";

const Awareness = () => {
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
        title="Awareness"
        breadcrumb="Home / awareness"
        image={productImg}
      />
      <div className="w-full md:px-12 md:mt-20 px-6 mt-10">
        <div className="border-[#2E1403] border-y-1 md:mb-20 mb-10 flex md:gap-12 gap-2 justify-center flex-wrap text-center">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            About Compost
          </button>
          <button 
            onClick={() => scrollToSection(benefitsRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection(usageRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            Usage Guide
          </button>
          <button 
            onClick={() => scrollToSection(sustainableRef)}
            className="uppercase md:text-[1.5vw] text-[3vw] hover:text-[#D98324] transition-colors cursor-pointer"
          >
            Sustainable Farming
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
              What is EcoHarvest Engineering Compost?
            </h1>
            <h1 className="my-4">
              EcoHarvest Engineering Compost is a high-quality organic compost
              developed from 100% natural ingredients including biomass, cow
              dung, cow urine, and fortified with essential decomposition
              cultures, Trichoderma, and Bio-NPK. This scientifically formulated
              blend undergoes a controlled composting process to ensure it is
              fully decomposed, nutrient-rich, and biologically active. It is
              rich in humus, the organic matter that supports healthy microbial
              life and soil fertility.
            </h1>
            <h1>
              Unlike traditional composts or raw organic inputs, our product is
              engineered with a balanced ratio of carbon and nitrogen
              components, along with bio-enhancers that accelerate
              decomposition. This results in a uniform, mature compost that acts
              as both a natural fertilizer and a soil conditioner, supporting
              plant growth, improving soil aeration, and enhancing root
              development for all types of crops.
            </h1>
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
              Why Choose This Compost Over Raw Cow Dung or Chemical Fertilizers?
            </h1>
            <h1 className="my-4">
              Raw cow dung, if not decomposed properly, can release harmful
              gases like methane and may contain pathogens or weed seeds that
              adversely affect crop health. Similarly, prolonged use of chemical
              fertilizers deteriorates soil structure, disrupts the natural
              microbial balance, and leads to long-term fertility loss. These
              methods may give short-term yield spikes but harm the ecosystem in
              the long run.
            </h1>
            <h1>
              Our EcoHarvest Engineering Compost provides a safe and sustainable
              alternative. By using fully decomposed organic matter enriched
              with beneficial microbes and nutrients, it restores soil health,
              increases water retention, and enhances nutrient availability.
              This leads to improved crop resilience, higher yields, and
              sustainable farming practices that protect the environment.
            </h1>
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
              How to Use EcoHarvest Engineering Compost
            </h1>
            <h1 className="my-4">
              For best results, apply the compost to the soil before planting by
              mixing it into the top 6-8 inches of soil. Use approximately 1-2
              kg per square meter depending on crop type and soil condition.
              For established plants, side-dress compost around the root zone to
              provide continuous nutrients throughout the growing season.
            </h1>
            <h1>
              Regular application improves soil organic matter, promotes healthy
              microbial activity, and helps retain moisture. Combine compost use
              with proper irrigation and crop rotation to maximize benefits.
              Avoid using raw cow dung directly on crops to prevent the risk of
              phytotoxicity and pathogen contamination.
            </h1>
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
              Promoting Sustainable Farming and Soil Health
            </h1>
            <h1 className="my-4">
              Using EcoHarvest Engineering Compost supports long-term soil
              fertility, reduces dependency on chemical inputs, and enhances
              ecosystem biodiversity. Healthy soils lead to healthier crops,
              greater carbon sequestration, and improved resilience against
              pests and diseases.
            </h1>
            <h1>
              Our compost aligns with sustainable agriculture principles,
              encouraging farmers to adopt practices that protect natural
              resources and promote environmental stewardship. Join us in
              building a greener future by enriching your fields with natural
              goodness.
            </h1>
          </div>
        </section>

      
      </div>
    </div>
  );
};

export default Awareness;
