import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/logo2.png"
const Footer = () => {
  return (
    <div className=" bg-[#00461f] w-full md:px-12 px-6 text-white ">
      <div className="flex md:flex-row flex-col-reverse py-16">
        <div className="left-half md:w-[50%] w-full mt-10">
        <div className="h-40 w-fit ">
                 <img className="w-full h-full object-contain" src={Logo} alt="" />
               </div>
          <div className="flex gap-6 md:pb-10 pb-6">
            <h1 className="lg:text-[2vw] md:text-[4vw] text-[8vw] hover:text-[#42ff00]">
              <FaFacebookF />
            </h1>
            <h1 className="lg:text-[2vw] md:text-[4vw] text-[8vw] hover:text-[#42ff00]">
              <BsInstagram />
            </h1>
            <h1 className="lg:text-[2vw] md:text-[4vw] text-[8vw] hover:text-[#42ff00]">
              <PiYoutubeLogoFill />
            </h1>
            <h1 className="lg:text-[2vw] md:text-[4vw] text-[8vw] hover:text-[#42ff00]">
              <FaLinkedinIn />
            </h1>
          </div>
          <h1 className="lg:text-[1.2vw] md:text-[2vw] pb-4 pl-2">
            Subscribe to newsletter
          </h1>
          <div className="border rounded-full border-white w-fit pl-4 pr-2 py-2 flex items-center gap-4 ">
            <input
              type="text"
              placeholder="Please enter e-mail address"
              className="w-50 focus:outline-none focus:ring-2 focus:ring-[#00461f]"
            />
            <button className="px-2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex md:justify-evenly ryt-half md:gap-12 gap-20 md:w-[50%] w-full">
          <div className="text-white lg:text-[1.2vw] md:text-[2vw]">
            <h1 className="pb-12">MENU</h1>
            <Link to="/">
              {" "}
              <h1 className="py-1 hover:text-[#42ff00]">Home</h1>
            </Link>
            <Link to="/product">
              {" "}
              <h1 className="py-1 hover:text-[#42ff00]">Product</h1>
            </Link>
            <Link to="/about">
              {" "}
              <h1 className="py-1 hover:text-[#42ff00]">About Us</h1>
            </Link>
            <Link to="/contact">
              {" "}
              <h1 className="py-1 hover:text-[#42ff00]">Contact Us</h1>
            </Link>
          </div>
          <div className="lg:text-[1.2vw] md:text-[2vw]">
            <h1 className="text-white pb-12">CONTACT US</h1>
            <h1 className="text-white py-1">mahabalagroind@gmail.com</h1>
            <h1 className="text-white py-1">+91 997573228</h1>
            <Link to="https://whatsapp.com/channel/0029Va5bDEgAzNbzOjnzau3h">
              <h1 className="bg-white text-black px-4 py-2 my-4 rounded-full w-fit hover:bg-[#42ff00]">
                {" "}
                CHANNEL LINK
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <hr className="text-white" />
      <h1 className="text-center w-full text-white md:py-6 py-4 lg:text-[1.2vw] md:text-[1.5vw] text-[3vw]">
        Copyright © 2025 MahabalAgro Ind. All right reserved.
      </h1>
    </div>
  );
};

export default Footer;
