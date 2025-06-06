import React, { useRef } from "react";
import PageHeader from "../components/PageHeader";
import productImg from "../assets/product2.avif";
import vermiCompostImg from "../assets/vermicompost.png"
import organicCompostImg from "../assets/organicCompost.png"
const Product = () => {

 
const products = [
  {
    id: 1,
    name: "Organic Compost",
    description:
      "Produced by engineering compost system method, enriched with micronutrients and antifungal agents for superior results.",
    benefits: [
      "Rich in micronutrients",
      "Contains antifungal properties",
      "Boosts soil health sustainably",
      "Better results than vermicompost",
    ],
    imgSrc: organicCompostImg, // Replace with actual path
    cost:"From ₹120.00"
  },
  {
    id: 2,
    name: "Vermicompost",
    description:
      "Produced by worms (vermi-composting), naturally breaking down organic waste into nutrient-rich fertilizer.",
    benefits: [
      "Improves soil structure",
      "Contains beneficial microbes",
      "Eco-friendly and natural process",
      "Widely used for organic farming",
    ],
    imgSrc:vermiCompostImg,
    cost:"From ₹120.00" // Replace with actual path
  },
];

const ProductCard = ({ product }) => (
  <div className="border border-[#2E1403] rounded-lg p-6 max-w-md mx-auto bg-[#F6F0E8] text-[#2E1403]">
    <div className="h-96 mb-4">
      <img
        src={product.imgSrc}
        alt={product.name}
        className="object-cover w-full h-full rounded-md"
      />
    </div>
    <h2 className="lg:text-[3vw] font-semibold mb-2">{product.name}</h2>
    <p className="mb-4 text-sm">{product.description}</p>
    <ul className="list-disc list-inside mb-4 text-sm">
      {product.benefits.map((benefit, i) => (
        <li key={i}>{benefit}</li>
      ))}
    </ul>
     <p className="mb-4 text-xl font-semibold text-[#D98324]">{product.cost}</p>
  </div>
);

 return (
    <div className="min-h-screen w-full bg-[#F6F0E8] text-[#2E1403]">
      <PageHeader
        title="Product"
        breadcrumb="Home / product"
        image={productImg}
      />
       <section className="px-4 md:px-16 mb-10 lg:mb-20">
    <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] my-10 md:py-10 underline font-semibold">
        Compost Products
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Product