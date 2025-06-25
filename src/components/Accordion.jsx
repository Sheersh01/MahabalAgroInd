import React, { useState, useRef, useEffect } from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";

// 🔽 Single Accordion Item Component
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); // Track open/close state
  const contentRef = useRef(null);             // Ref to measure content height
  const [height, setHeight] = useState("0px"); // Dynamic height for smooth animation

  useEffect(() => {
    // On state change, update height for transition
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`border mb-2 border-[#2E1403] md:p-8 px-4 py-2 rounded-md transition-colors duration-300 ${
        isOpen ? "bg-[#2E1403] text-[#F6F0E8]" : "bg-[#F6F0E8] text-[#2E1403]"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left font-normal lg:text-[2vw]"
      >
        {question}
        <BsArrowDownRightCircle
          className={`w-10 h-10 transform transition-transform duration-300 ${
            isOpen ? "-rotate-90" : ""
          }`}
        />
      </button>

      {/* Expandable Answer Panel */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        <div className="pb-4 text-[#F6F0E8] lg:text-[1.3vw] text-[4vw]">
          {answer}
        </div>
      </div>
    </div>
  );
};

// 📦 Main Accordion Component — maps all items
const Accordion = ({ data }) => {
  return (
    <div className="w-full bg-[#F6F0E8] py-8 rounded-xl">
      {data.map((item, idx) => (
        <AccordionItem
          key={idx}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
