import React, { useRef } from "react";
import PageHeader from "../components/PageHeader";
import productImg from "../assets/product2.avif";

const Product = () => {
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null);
  const usageRef = useRef(null);
  const sustainableRef = useRef(null);
  const deliveryRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-white text-[#00461f]">
      <PageHeader
        title="Product"
        breadcrumb="Home / Product"
        image={productImg}
      />
      <div className="w-full md:px-12 md:mt-20 px-8 mt-10">
        <div className="border-[#00461f] border-y-1 md:mb-20 mb-10 flex gap-12 justify-center flex-wrap text-center">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="uppercase md:text-[1.5vw] text-[2.5vw] hover:text-green-700 transition-colors cursor-pointer"
          >
            About Our Compost
          </button>
          <button 
            onClick={() => scrollToSection(benefitsRef)}
            className="uppercase md:text-[1.5vw] text-[2.5vw] hover:text-green-700 transition-colors cursor-pointer"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection(usageRef)}
            className="uppercase md:text-[1.5vw] text-[2.5vw] hover:text-green-700 transition-colors cursor-pointer"
          >
            Usage Guide
          </button>
          <button 
            onClick={() => scrollToSection(sustainableRef)}
            className="uppercase md:text-[1.5vw] text-[2.5vw] hover:text-green-700 transition-colors cursor-pointer"
          >
            Sustainable Farming
          </button>
          <button 
            onClick={() => scrollToSection(deliveryRef)}
            className="uppercase md:text-[1.5vw] text-[2.5vw] hover:text-green-700 transition-colors cursor-pointer"
          >
            Delivery & Info
          </button>
        </div>

        <section ref={aboutRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src="your-image-path-product1.jpg"
                alt="EcoHarvest Engineering Compost Product"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[6vw] leading-none tracking-tight">
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
                src="your-image-path-product2.jpg"
                alt="Why Choose Compost Over Chemicals"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[6vw] leading-none tracking-tight">
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
                src="your-image-path-product3.jpg"
                alt="Using EcoHarvest Compost Guide"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[6vw] leading-none tracking-tight">
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
                src="your-image-path-product4.jpg"
                alt="Sustainable Farming with Compost"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[6vw] leading-none tracking-tight">
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

        <section ref={deliveryRef} className="lg:mb-40 md:mb-20 mb-10 w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full">
            <div className="w-full bg-pink-100 lg:h-[30vw] md:h-[40vw] h-[60vw] mb-10 flex items-center justify-center">
              <img
                src="your-image-path-delivery.jpg"
                alt="Delivery Process Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center lg:px-8 md:px-4 lg:text-[1vw] md:text-[1.5vw]">
            <h1 className="font-semibold lg:text-[2.8vw] md:text-[3.2vw] text-[6vw] leading-none tracking-tight mb-4">
              Delivery Process & Product Details
            </h1>

            <div className="mb-6">
              <h2 className="font-semibold mb-2">Delivery Process</h2>
              <p><strong>Who delivers?</strong> Delivery by our own team.</p>
              <p><strong>Time taken:</strong> Within 12 hours of order confirmation.</p>
              <p><strong>Eligible Areas:</strong> Nagpur Rural, Nagpur Urban.</p>
              <p><strong>Delivery charges / Minimum order:</strong> Depends upon order size.</p>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold mb-2">Product Range</h2>
              <p>Currently offering two compost types:</p>
              <ul className="list-disc list-inside">
                <li>Organic Compost</li>
                <li>Vermicompost</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Key Product Information</h2>
              <p>
                Our compost is rich in humus and packed with beneficial microbes. 
                It is enriched with essential micronutrients to support healthy soil and plants.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;