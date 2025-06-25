import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from "../assets/homePage/profile.png";
import profile1 from "../assets/homePage/profile1.avif";
import profile2 from "../assets/homePage/profile2.avif";
import profile3 from "../assets/homePage/profile3.avif";

const Testimonials = () => {

const imageMap = {
  profile,
  profile1,
  profile2,
  profile3
};

  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true });

  return (
    <div>
      <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] underline font-semibold capitalize">
        {t("testimonials.heading")}
      </h1>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, quote, image  }, index) => (
            
            <div
              key={index}
              className="bg-[#F6F0E8] rounded-lg border border-[#2E1403] shadow-[#2E1403]/20 shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
               src={imageMap[image] || profile}
               alt={name}
               className="w-24 h-24 rounded-full object-cover mb-4"
               />
              <p className="text-gray-700 italic mb-4">"{quote}"</p>
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
