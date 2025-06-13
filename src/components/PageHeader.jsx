import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
const PageHeader = ({ title, breadcrumb, image }) => {
  return (
    <div>
      <div className="bg-[#2E1403] w-full lg:h-19 h-12"></div>
      <div className="w-full flex bg-[#2E1403] lg:h-[60vh] h-[40vw] text-[#F6F0E8]">
        <div className="w-1/2 border-t-2 border-r-2 border-[#D9C19E]/50 md:px-8 px-2 md:py-4 py-2 relative">
          <p className="text-[3vw] md:text-[2vw] lg:text-[1vw]">
            <Link to="/">Home </Link>
            {breadcrumb}
          </p>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5vw]">
            {title}
          </h1>
        </div>
        <div className="w-1/2 border-t-2 border-[#D9C19E]/50 lg:p-8 p-2 bg-[#2E1403]">
          <img className="h-full w-full object-cover" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
