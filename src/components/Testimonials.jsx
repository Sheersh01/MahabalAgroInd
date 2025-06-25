import React from 'react';
import { useTranslation } from 'react-i18next';

// Imported profile images (referenced using string keys in translations)
import profile from "../assets/homePage/profile.png";
import profile1 from "../assets/homePage/profile1.avif";
import profile2 from "../assets/homePage/profile2.avif";
import profile3 from "../assets/homePage/profile3.avif";

/**
 * Testimonials Component
 * - Renders user testimonials using data from i18n translation JSON
 * - Supports multiple profile images via a mapped lookup
 */
const Testimonials = () => {
  const { t } = useTranslation(); // No namespace used

  // Map to match image name string to imported asset
  const imageMap = {
    profile,
    profile1,
    profile2,
    profile3
  };

  // Get testimonial data from translation file
  const testimonials = t("testimonials.items", { returnObjects: true });

  return (
    <div>
      {/* Section Heading */}
      <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] underline font-semibold capitalize">
        {t("testimonials.heading")}
      </h1>

      {/* Testimonials Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 ">
          {testimonials.map(({ name, quote, image }, index) => (
            <div
              key={index}
              className="bg-[#F6F0E8] rounded-lg border border-[#2E1403]  p-6 flex flex-col items-center text-center hover:shadow-[#2E1403]/40 hover:shadow-md transition-all"
            >
              {/* Profile Image */}
              <img
                src={imageMap[image] || profile} // Fallback to default if image not found
                alt={name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              {/* Testimonial Quote */}
              <p className="text-gray-700 italic mb-4">"{quote}"</p>

              {/* Author Name */}
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
