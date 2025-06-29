import React from "react";
import { useTranslation } from "react-i18next";

// Components
import PageHeader from "../components/PageHeader";

// Assets
import productImg from "../assets/productsPage/product.avif";
import vermiCompostImg from "../assets/productsPage/vermicompost.png";
import organicCompostImg from "../assets/productsPage/organicCompost.png";

/**
 * Product Page Component
 * Displays a list of compost products with details
 */
const Product = () => {
  const { t } = useTranslation("product"); // Translation hook (namespace: "product")

  // Array of product data using translation values
  const products = [
    {
      id: 1,
      name: t("product.organic.name"),
      description: t("product.organic.description"),
      benefits: t("product.organic.benefits", { returnObjects: true }), // Returns array
      cost: t("product.organic.cost"),
      imgSrc: organicCompostImg,
    },
    {
      id: 2,
      name: t("product.vermi.name"),
      description: t("product.vermi.description"),
      benefits: t("product.vermi.benefits", { returnObjects: true }), // Returns array
      cost: t("product.vermi.cost"),
      imgSrc: vermiCompostImg,
    },
  ];

  /**
   * ProductCard Component
   * Reusable card to display individual product info
   */
  const ProductCard = ({ product }) => (
    <div className="border border-[#2E1403] rounded-lg p-6 max-w-md mx-auto bg-[#F6F0E8] text-[#2E1403]">
      {/* Product Image */}
      <div className="h-96 mb-4">
        <img
          src={product.imgSrc}
          alt={product.name}
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      {/* Product Name */}
      <h2 className="lg:text-[3vw] font-semibold mb-2">{product.name}</h2>

      {/* Product Description */}
      <p className="mb-4 text-sm">{product.description}</p>

      {/* Product Benefits List */}
      <ul className="list-disc list-inside mb-4 text-sm">
        {Array.isArray(product.benefits) &&
          product.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#F6F0E8] text-[#2E1403]">
      {/* Page Header Section */}
      <PageHeader
            home={t("product.homeLink")}
        title={t("product.pageTitle")}
        breadcrumb={t("product.breadcrumb")}
        image={productImg}
      />

      {/* Main Section */}
      <section className="px-4 md:px-8 lg:px-16 mb-10 lg:mb-20">
        {/* Page Title */}
        <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] my-10 md:py-10 underline font-semibold">
          {t("product.pageTitle")}
        </h1>

        {/* Product Grid */}
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
