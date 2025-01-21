// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './en/translation.json';
import ptTranslation from './pt/translation.json';

const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false // Isso é importante
    }
  });

export default i18n;