import React, { useEffect, useRef } from "react";

const GTranslateWidget = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Add the global gtranslateSettings object
    window.gtranslateSettings = {
    default_language: "en",
    detect_browser_language: true,
    languages: ["en", "hi", "mr"],
    wrapper_selector: ".gtranslate_wrapper",
  };

    // Create script tag
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.defer = true;

    // Append script to body
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
      // Optionally clean the global object if you want
      delete window.gtranslateSettings;
    };
  }, []);

  return <div  className="gtranslate_wrapper" ref={wrapperRef}></div>;
};

export default GTranslateWidget;
