import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo2.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <div className="bg-[#2E1403] w-full md:px-12 px-6 text-[#F6F0E8]">
      <div className="flex md:flex-row flex-col-reverse py-16 lg:px-20">
        <div className="flex ryt-half md:gap-12 md:w-[60%] w-full">
          <div className="text-[#F6F0E8] lg:text-[1.2vw] md:text-[2vw] text-[4.5vw] w-[40%]">
            <h1 className="pb-12">{t("menu")}</h1>
            <Link to="/">
              <h1 className="py-1 hover:text-[#D98324] transition-all">{t("home")}</h1>
            </Link>
            <Link to="/product">
              <h1 className="py-1 hover:text-[#D98324] transition-all">{t("product")}</h1>
            </Link>
            <Link to="/about">
              <h1 className="py-1 hover:text-[#D98324] transition-all">{t("about")}</h1>
            </Link>
            <Link to="/contact">
              <h1 className="py-1 hover:text-[#D98324] transition-all">{t("contact")}</h1>
            </Link>
          </div>
          <div className="lg:text-[1.2vw] md:text-[2vw] text-[4.5vw] w-[60%]">
            <h1 className="text-[#F6F0E8] pb-12">{t("contactUs")}</h1>
            <h1 className="text-[#F6F0E8] py-1">{t("email")}</h1>
            <h1 className="text-[#F6F0E8] py-1">{t("phone")}</h1>
            <Link to="https://whatsapp.com/channel/0029Va5bDEgAzNbzOjnzau3h">
              <h1 className="bg-[#F6F0E8] text-black px-4 py-2 my-4 rounded-full w-fit hover:bg-[#D98324] transition-all flex items-center gap-2">
                {t("whatsapp")} <FaWhatsapp />
              </h1>
            </Link>
          </div>
        </div>
        <div className="left-half md:w-[40%] w-full">
          <div className="h-60 w-full">
            <img className="w-full h-full object-contain" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
      <hr className="text-[#F6F0E8]" />
      <h1 className="text-center w-full text-[#F6F0E8] md:py-6 py-4 lg:text-[1.2vw] md:text-[1.5vw] text-[3vw]">
        {t("copyright")}
      </h1>
    </div>
  );
};

export default Footer;
