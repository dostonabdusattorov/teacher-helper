import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./globals/en.json";
import ru from "./globals/ru.json";
import uz from "./globals/uz.json";
import krill from "./globals/krill.json";
import { ILanguages } from "../constants";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: ILanguages.EN,
  interpolation: {
    escapeValue: true,
  },
  resources: {
    [ILanguages.EN]: {
      global: en,
    },
    [ILanguages.RU]: {
      global: ru,
    },
    [ILanguages.UZ]: {
      global: uz,
    },
    [ILanguages.KRILL]: {
      global: krill,
    },
  },
});

export default i18n;
