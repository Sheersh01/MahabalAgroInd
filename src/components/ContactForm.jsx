import React, { useState } from "react";

const ContactForm = ({send}) => {
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const inputStyles =
    "border border-[#2E1403] focus:outline-none focus:ring-2 focus:ring-[#2E1403] px-4 py-2 rounded-xl placeholder:text-gray-500";

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "8ef5797b-2001-4846-a5e2-63c4e8591455"); // 🔑 Replace with your real access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Thanks for contacting us! We'll get back to you shortly.");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit} className="w-full relative">
      {/* 👀 Honeypot field (spam trap) */}
      <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />

      {/* ✅ CAPTCHA (Web3Forms built-in) */}
      <input type="hidden" name="captcha" value="true" />

      <div className="w-full flex flex-wrap gap-y-4 mb-4">
        <input
          className={`${inputStyles} xl:mr-6 mr-3 h-12 w-[48%]`}
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          className={`${inputStyles} h-12 w-[48%]`}
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
      </div>

      <input
        className={`${inputStyles} mb-4 h-12 w-full`}
        type="text"
        name="company"
        placeholder="Company Name (Optional)"
      />

      <div className="w-full flex flex-wrap gap-y-4 mb-4">
        <input
          className={`${inputStyles} xl:mr-6 mr-3 h-12 w-[48%]`}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
        />
        <input
          className={`${inputStyles} h-12 w-[48%]`}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>

      <textarea
        placeholder="Message"
        name="message"
        className={`${inputStyles} w-full h-[20vh] mb-6`}
        required
      ></textarea>

      <button
        type="submit"
        disabled={submitting}
        className="bg-[#D98324] uppercase text-[#F6F0E8] lg:px-8 md:px-4 lg:py-4 md:py-2 rounded-full font-semibold flex items-center gap-4 w-fit lg:text-[1vw] md:text-[1.5vw] text-[4vw] px-4 py-2 cursor-pointer hover:scale-[1.1] transition-all"
      >
        {submitting ? "Sending..." : `${send}`}
      </button>

      {result && (
        <div className="text-[#D98324] font-semibold text-lg text-center py-6">
          {result}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
