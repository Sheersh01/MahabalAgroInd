import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import contactUsImg from "../assets/contactUs6.jpg";
import { FaLocationDot } from "react-icons/fa6";
import GoogleMap from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="min-h-screen w-full">
      <PageHeader
        title={t("pageTitle")}
        breadcrumb={t("breadcrumb")}
        image={contactUsImg}
      />

      <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] lg:mt-16 mt-10 md:py-10 underline font-semibold">
        {t("mainHeading")}
      </h1>

      <div className="w-full pb-10 md:py-10 px-4 flex md:flex-row flex-col">
        {/* Left Contact Info */}
        <div className="lg:w-[40%] md:w-1/2 w-full md:p-8 py-8 flex flex-col items-center justify-center">
          <div className="bg-[#2E1403] text-[#F6F0E8] py-4 px-8 rounded-2xl">
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw]">
              {t("headOffice")}
            </h1>
            <h1 className="py-6 lg:text-[2.5vw] md:text-[3.2vw] text-[8vw]">
              <FaLocationDot />
            </h1>
            <h1 className="lg:text-[1.5vw] md:text-[2.4vw] text-[5vw] pb-8 lg:leading-8 leading-6 whitespace-pre-line">
              {t("address")}
            </h1>
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw] pb-4">
              {t("emailLabel")} : {t("emailValue")}
            </h1>
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw]">
              {t("phoneLabel")} : {t("phoneValue")}
            </h1>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:w-[60%] md:w-1/2 w-full lg:px-12 lg:py-8 md:px-8 md:py-4">
          <h1 className="lg:text-[2vw] md:text-[4vw] text-[10vw] text-center pb-10 font-semibold text-[#2E1403]">
            {t("getInTouch")}
          </h1>
          <ContactForm send={ t("send")}/>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[90vh]">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
