import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "This product has transformed the way our team works. Highly recommend to anyone looking for quality and reliability."
  },
  {
    id: 2,
    name: "Mark Smith",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "Exceptional service and support. The team went above and beyond to meet our needs."
  },
  {
    id: 3,
    name: "Sophia Lee",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "A fantastic experience from start to finish. The intuitive interface saved us tons of time."
  }
];

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map(({ id, name, role, photo, quote }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
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
  );
};

export default Testimonials;
