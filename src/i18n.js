import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          Header: {
            aboutMe: "About me",
            contact: "Contact",
          },
          Home: {
            firstName: "Qadamboy",
            secondName: "Xudayberganov",
            description:
              "Passionate Software Engineer with a focus on Web development, dedicated to crafting minimalistic and user-friendly Web applications.",
          },
        },
      },
      //   uz: {
      //     translation: {
      //       Header: {
      //         aboutMe: "Men haqimda",
      //         contact: "Bog'lanish",
      //       },
      //       Home: {
      //         firstName: "Qadamboy",
      //         secondName: "Xudayberganov",
      //         description:
      //           "Minimalistik va foydalanuvchi uchun qulay veb-ilovalarni yaratishga bag‘ishlangan, veb-dasturlashga ixtisoslashgan ishtiyoqli dasturiy ta'minot muhandisi.",
      //       },
      //     },
      //   },
      //   ru: {
      //     translation: {
      //       description: {
      //         part1: "Ändere <1>src/App.js</1> und speichere um neu zu laden.",
      //         part2: "Lerne React",
      //       },
      //     },
      //   },
    },
  });

export default i18n;
