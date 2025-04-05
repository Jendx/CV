import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@Constants/supportedLanguages";
import en from "./Translations/en";
import cz from "./Translations/cz";

i18n.use(initReactI18next).init({
  lng: SUPPORTED_LANGUAGES.en.code,
  fallbackLng: SUPPORTED_LANGUAGES.en.code,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    cz: {
      translation: cz,
    },
  },
});

export default i18n;
