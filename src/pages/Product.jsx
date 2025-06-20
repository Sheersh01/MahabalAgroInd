import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import productImg from "../assets/productsPage/product.avif";
import vermiCompostImg from "../assets/productsPage/vermicompost.png";
import organicCompostImg from "../assets/productsPage/organicCompost.png";

const Product = () => {
  const { t } = useTranslation("product"); // not using namespaces

  const products = [
    {
      id: 1,
      name: t("product.organic.name"),
      description: t("product.organic.description"),
      benefits: t("product.organic.benefits", { returnObjects: true }),
      cost: t("product.organic.cost"),
      imgSrc: organicCompostImg,
    },
    {
      id: 2,
      name: t("product.vermi.name"),
      description: t("product.vermi.description"),
      benefits: t("product.vermi.benefits", { returnObjects: true }),
      cost: t("product.vermi.cost"),
      imgSrc: vermiCompostImg,
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
        {Array.isArray(product.benefits) &&
          product.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
      </ul>
      <p className="mb-4 text-xl font-semibold text-[#D98324]">{product.cost}</p>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#F6F0E8] text-[#2E1403]">
      <PageHeader
        title={t("product.pageTitle")}
        breadcrumb={t("product.breadcrumb")}
        image={productImg}
      />
      <section className="px-4 md:px-8 lg:px-16 mb-10 lg:mb-20">
        <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] my-10 md:py-10 underline font-semibold">
          {t("product.pageTitle")}
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

export default Product;
