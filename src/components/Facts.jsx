import React from "react";
import ContentBox from "../components/ContentBox";
const Facts = ({ contents }) => {
  return (
    <div className="min-h-screen w-full lg:px-12 md:px-8 px-4 lg:py-20 md:py-10 py-10 ">
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

export default Facts;
