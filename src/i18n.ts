import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import resource from "./lang";

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    resources: resource,
   
    // interpolation: {
    //     escapeValue: false
    // }
   })