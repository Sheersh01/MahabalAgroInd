import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mrbkgrpb");

  const inputStyles =
    "border border-[#00461f] focus:outline-none focus:ring-2 focus:ring-[#00461f] px-4 py-2 rounded-xl placeholder:text-gray-500";

  if (state.succeeded) {
    return (
      <div className="text-green-700 font-semibold text-lg text-center py-6">
        ✅ Thanks for contacting us! We'll get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="w-full flex flex-wrap gap-y-4 mb-4">
        <input
          className={`${inputStyles} lg:mr-6 mr-3 h-12 w-[48%]`}
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
          className={`${inputStyles} lg:mr-6 mr-3 h-12 w-[48%]`}
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
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <textarea
        placeholder="Message"
        name="message"
        className={`${inputStyles} w-full h-[20vh] mb-6`}
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
       className='bg-[#42ff00] uppercase text-[#00461f] lg:px-8 md:px-4 lg:py-4 md:py-2 rounded-full font-semibold  flex items-center gap-4 w-fit lg:text-[1vw] md:text-[1.5vw] text-[4vw] px-4 py-2'>
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
