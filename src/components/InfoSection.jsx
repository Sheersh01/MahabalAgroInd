import React from "react";
import {Link} from "react-router-dom";
import ReadMoreBtn from "./ReadMoreBtn";
import fertilizerImg from "../assets/fertilizer_6986765.png";
import Accordion from "../components/Accordion"
const InfoSection = () => {
const faqData = [
  {
    question: "Who delivers the compost?",
    answer: "Delivery is handled by our own team to ensure quality and timely service."
  },
  {
    question: "How long does delivery take?",
    answer: "We deliver within 12 hours of order confirmation in eligible areas."
  },
  {
    question: "Which areas are eligible for delivery?",
    answer: "Currently, we deliver to Nagpur Rural and Nagpur Urban regions."
  },
  {
    question: "What are the delivery charges or minimum order requirements?",
    answer: "Delivery charges and minimum order depend on the order size and distance."
  },
  {
    question: "What compost products do you offer?",
    answer: "We offer two types of compost: Organic Compost and Vermicompost."
  },
  {
    question: "What is special about your compost?",
    answer: "Our compost is rich in humus, beneficial microbes, and fortified with essential micronutrients for better soil and plant health."
  }
];

  return (
    <div className="bg-[#F6F0E8] text-[#2E1403] md:px-12 px-4">
      <div className="flex md:flex-row flex-col">
        <div className="lg:w-[40%] md:w-1/2 w-full flex items-center">
        <div className="lg:w-96 md:w-78 lg:h-96 md:h-78 w-72 h-72  rounded-full mx-auto">
            <img className="object-contain w-full h-full" src={fertilizerImg} alt="" />
        </div>
        </div>
        <div className="lg:w-[60%] md:w-1/2 w-full py-20">
          <h1 className="lg:text-[3vw] md:text-[3.2vw] text-[8vw] mb-4 font-semibold">Our Product</h1>
          <h1 className="font-semibold lg:text-[4vw] md:text-[4vw] text-[7vw] leading-none pb-8">
            Engineering Compost: A Smarter Way to Fertilize Naturally
          </h1>
          <p className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw] leading-normal">
            Discover the next generation of organic fertilizers — made from
            biomass, cow dung, cow urine, and enriched with natural cultures
            like trichoderma and bio NPK. Safe, sustainable, and designed to
            boost soil health and crop productivity without the drawbacks of
            chemical or raw waste fertilizers.
          </p>
         <Link to="/product"> <ReadMoreBtn title="Read More" /></Link>
        </div>
      </div>
       <div>
      <h1 className="text-center font-bold text-3xl mt-8 text-[#2E1403]">FAQs</h1>
      <Accordion data={faqData} />
    </div>
    </div>
  );
};

export default InfoSection;
