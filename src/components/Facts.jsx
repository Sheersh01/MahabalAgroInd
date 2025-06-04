import React from 'react'
import ContentBox from './ContentBox'
import whatImg from "../assets/what.avif";
import whoImg from "../assets/who.avif";

const Facts = () => {
   const contents = [
      {
        heading: "Who are we. . .",
        description:
          "We believe in nurturing the earth responsibly, enhancing crop resilience, and reducing reliance on chemical fertilizers. Through innovation and commitment, we strive to support healthy ecosystems and promote environmental stewardship for generations to come.",
          img:whatImg
      },
      {
        heading: "What we do. . .",
        description:
          "We serve farmers across Nagpur Rural and Urban, delivering nutrient-rich compost that reduces the need for chemicals and supports long-term soil vitality. Through innovation and eco-friendly practices, we help build a greener, healthier future for agriculture.",
          img:whoImg
      },
    ];
  return (
  <div className='min-h-screen w-full lg:px-12 md:px-8 px-4 lg:py-20 md:py-10 py-10'>
  <div className='w-full flex md:flex-row flex-col lg:gap-12 md:gap-8 gap-8 '>
            {contents.map((item, index) => (
          <ContentBox
            key={index}
            heading={item.heading}
            description={item.description}
            img={item.img}
          />
        ))}
        </div>
   </div>
  )
}

export default Facts