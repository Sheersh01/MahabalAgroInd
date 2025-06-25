import React from "react";
import { useTranslation } from "react-i18next";

// Component Imports
import PageHeader from "../components/PageHeader";
import GoogleMap from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";

// Asset Import
import contactUsImg from "../assets/contactPage/contact.jpg";

// Icon Import
import { FaLocationDot } from "react-icons/fa6";

/**
 * Contact Page Component
 * Displays a contact form, location info, and map
 */
const Contact = () => {
  const { t } = useTranslation("contact"); // Internationalization hook for the "contact" namespace

  return (
    <div className="min-h-screen w-full">
      {/* Page Header with image and breadcrumb */}
      <PageHeader
        title={t("pageTitle")}
        breadcrumb={t("breadcrumb")}
        image={contactUsImg}
      />

      {/* Main Heading */}
      <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] lg:mt-16 mt-10 md:py-10 underline font-semibold">
        {t("mainHeading")}
      </h1>

      {/* Contact Section: Info + Form */}
      <div className="w-full pb-10 md:py-10 px-4 flex md:flex-row flex-col">
        
        {/* Left: Contact Info Box */}
        <div className="xl:w-[40%] md:w-1/2 w-full md:p-8 py-8 flex flex-col items-center justify-center">
          <div className="bg-[#2E1403] text-[#F6F0E8] py-4 px-8 rounded-2xl">
            {/* Office Label */}
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw]">
              {t("headOffice")}
            </h1>

            {/* Location Icon */}
            <h1 className="py-6 lg:text-[2.5vw] md:text-[3.2vw] text-[8vw]">
              <FaLocationDot />
            </h1>

            {/* Address */}
            <h1 className="lg:text-[1.25vw] md:text-[2.4vw] text-[5vw] pb-8 lg:leading-8 leading-6 whitespace-pre-line">
              {t("address")}
            </h1>

            {/* Email */}
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw] pb-4">
              {t("emailLabel")} : {t("emailValue")}
            </h1>

            {/* Phone */}
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw]">
              {t("phoneLabel")} : {t("phoneValue")}
            </h1>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="xl:w-[60%] md:w-1/2 w-full lg:px-12 lg:py-8 md:px-8 md:py-4">
          <h1 className="lg:text-[2vw] md:text-[4vw] text-[10vw] text-center pb-10 font-semibold text-[#2E1403]">
            {t("getInTouch")}
          </h1>
          <ContactForm send={t("send")} />
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-[90vh]">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
