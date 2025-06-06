import React from "react";
import PageHeader from "../components/PageHeader";
import contactUsImg from "../assets/contactUs6.jpg";
import { FaLocationDot } from "react-icons/fa6";
import GoogleMap from "../components/GoogleMap";
import ContactForm from "../components/ContactForm"; // new component

const Contact = () => {
  return (
    <div className="min-h-screen w-full">
      <PageHeader
        title="Contact Us"
        breadcrumb="Home / Contact Us"
        image={contactUsImg}
      />

      <h1 className="text-center lg:text-[5vw] md:text-[7.5vw] text-[10vw] text-[#2E1403] lg:mt-16 mt-10 md:py-10 underline font-semibold">
        Contact Us
      </h1>

      <div className="w-full pb-10 md:py-10 px-4 flex md:flex-row flex-col">
        {/* Left Contact Info */}
        <div className="lg:w-[40%] md:w-1/2 w-full md:p-8 py-8 flex flex-col items-center justify-center">
          <div className="bg-[#2E1403] text-[#F6F0E8] py-4 px-8 rounded-2xl">
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw]">
              Head Office
            </h1>
            <h1 className="py-6 lg:text-[2.5vw] md:text-[3.2vw] text-[8vw]">
              <FaLocationDot />
            </h1>
            <h1 className="lg:text-[1.5vw] md:text-[2.4vw] text-[5vw] pb-8 lg:leading-8 leading-6">
              Shri Gorakshan Anusandhan,
              <br /> Umred Rd, opposite Smt Radhikatai Pandav College of Engg,
              <br /> Nagpur, Maharashtra,
              <br /> 441204
            </h1>
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw] pb-4">
              E-Mail : mahabalagroind@gmail.com
            </h1>
            <h1 className="lg:text-[1.2vw] md:text-[1.8vw] text-[4vw]">
              Phone no : +91 997573228
            </h1>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:w-[60%] md:w-1/2 w-full lg:px-12 lg:py-8 md:px-8 md:py-4">
          <h1 className="lg:text-[2vw] md:text-[4vw] text-[10vw] text-center pb-10">
            Get in Touch
          </h1>
          <ContactForm />
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
