// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // load translations using HTTP (fetch from /public)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
        lng: "en", // always start with English
    fallbackLng: "en", // use en if detected language is not available
    debug: false,
    ns: ["home", "about","product","awareness","contact","footer","navbar"], // list all namespaces (page files)
    defaultNS: "home", // default namespace
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // fetch path
    },
  });

// Force English on page load
i18n.changeLanguage("en");

export default i18n;
