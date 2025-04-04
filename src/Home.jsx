import main from "./assets/main.svg";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  uz: { nativeName: "Uzbek" },
  ru: { nativeName: "Russian" },
};

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="text-white max-w-[700px] pt-[150px] mx-[30px] flex flex-col items-center max-r900:mx-[20px]">
      <div className="flex flex-col items-center gap-[36px] max-r900:gap-[30px] max-r600:gap-[25px]">
        <img
          className="w-[200px] bg-[#1a1a1a] rounded-[50%] max-r900:w-[180px] max-r600:w-[160px]"
          src={main}
          alt=""
        />

        {/* Change lang section */}

        {/* {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))} */}

        {/* Change lang section */}

        <div className="flex flex-col items-center text-[48px] font-bold max-r900:text-[40px] max-r600:text-[36px] max-r450:text-[34px]">
          {/* 1 */}

          <div className="flex flex-col items-center">
            <h1 className="leading-[44px] max-r900:leading-[38px] max-r600:leading-[36px]">
              {t("Home.firstName")}
            </h1>
            <h1 className="leading-[44px] max-r900:leading-[38px] max-r600:leading-[36px]">
              {t("Home.secondName")}
            </h1>
          </div>
        </div>
        <p className="text-[20px] text-center max-w-[650px] max-r900:text-[18px] max-r600:text-[15px] max-r600:max-w-[500px]">
          {/* 2 */}
          {t("Home.description")}
        </p>
        <a
          className="border border-white py-[12px] px-[50px] rounded-[30px] hover:bg-white hover:text-black transition-all hover:scale-110 max-r900:text-[15px] max-r900:px-[40px]"
          href="#contact"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};
export default Home;
