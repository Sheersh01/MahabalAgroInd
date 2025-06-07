import React from 'react';
import profile from "../assets/profile.png"
const testimonialsData = [
  {
    id: 1,
    name: "Rakesh Kumar",
    photo: profile,
    quote: "This product has transformed the way our team works. Highly recommend to anyone looking for quality and reliability."
  },
  {
    id: 2,
    name: "Aditya Srivastava",
    photo: profile,
    quote: "Exceptional service and support. The team went above and beyond to meet our needs."
  },
  {
    id: 3,
    name: "Aashish Sinha",
    photo: profile,
    quote: "This product has transformed the way our team works. Highly recommend to anyone looking for quality and reliability."
  }
];

const Testimonials = () => {
  return (
   <div>
      <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] underline font-semibold capitalize">
         What our clients say
      </h1>
     <section className="max-w-6xl mx-auto px-6 py-12">
       
      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map(({ id, name, role, photo, quote }) => (
          <div
            key={id}
            className="bg-[#F6F0E8] rounded-lg border border-[#2E1403] shadow-[#2E1403]/20 shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={photo}
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
