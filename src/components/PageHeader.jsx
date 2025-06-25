import React from "react";
import { Link } from "react-router-dom";

/**
 * PageHeader Component
 * Displays a split header with breadcrumb and page title on the left,
 * and an image on the right.
 *
 * Props:
 * - title: string (page title to show in center)
 * - breadcrumb: JSX/string (breadcrumbs after "Home >")
 * - image: image source (right side image)
 */
const PageHeader = ({ title, breadcrumb, image }) => {
  return (
    <div>
      {/* Thin top bar for design accent */}
      <div className="bg-[#2E1403] w-full lg:h-19 h-12" />

      {/* Main header section with two halves */}
      <div className="w-full flex bg-[#2E1403] lg:h-[60vh] h-[40vw] text-[#F6F0E8]">
        
        {/* Left side: Breadcrumbs and title */}
        <div className="w-1/2 border-t-2 border-r-2 border-[#D9C19E]/50 md:px-8 px-2 md:py-4 py-2 relative">
          {/* Breadcrumbs */}
          <p className="text-[3vw] md:text-[2vw] lg:text-[1vw]">
            <Link to="/" className="hover:underline">Home</Link> {breadcrumb}
          </p>

          {/* Centered Page Title */}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.5vw] text-center">
            {title}
          </h1>
        </div>

        {/* Right side: Image */}
        <div className="w-1/2 border-t-2 border-[#D9C19E]/50 lg:p-8 p-2 bg-[#2E1403]">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
