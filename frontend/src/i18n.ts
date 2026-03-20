import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "./translations/es/translation.json";
import en from "./translations/en/translation.json";

const resources = {
  es: { translation: es },
  en: { translation: en },
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Hook de React
  .init({
    fallbackLng: "es", // si no detecta, por defecto español
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    resources,
  });

export default i18n;
