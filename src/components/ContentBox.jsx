import React from 'react';
import { Link } from "react-router-dom";
import ReadMoreBtn from './ReadMoreBtn';
import { FaQuestion } from 'react-icons/fa';

const ContentBox = ({
  heading,
  description,
  buttonTitle = "Read More",
  img,
  link = "#"
}) => {
  return (
    <div className="group lg:w-1/2 md:w-[50%] lg:pt-10 lg:pb-10 md:py-8 lg:px-8 md:px-6 px-4 py-8 rounded-2xl text-[#F6F0E8] relative overflow-hidden">

      {/* === Background Image (scales on hover) === */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-[1.25] z-0"
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* === Semi-transparent dark overlay to improve text readability === */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* === Foreground Content (Icon, Title, Description, Button) === */}
      <div className="relative z-20 p-4">
        {/* Optional icon (currently FaQuestion) */}
        <h1 className="lg:text-[3vw] md:text-[4vw] text-[5vw]">
          <FaQuestion />
        </h1>

        {/* Heading */}
        <h1 className="font-bold lg:text-[3vw] md:text-[4vw] text-[5vw] lg:my-12 my-6 capitalize leading-none">
          {heading}
        </h1>

        {/* Description */}
        <p className="lg:text-[1.7vw] md:text-[2vw] text-[4vw] leading-tight">
          {description}
        </p>

        {/* Call-to-action button */}
        <Link to={link}>
          <ReadMoreBtn title={buttonTitle} />
        </Link>
      </div>
    </div>
  );
};

export default ContentBox;
