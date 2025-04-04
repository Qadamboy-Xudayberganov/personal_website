import logo from "./assets/logo.png";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  uz: { nativeName: "Uzbek" },
  ru: { nativeName: "Russian" },
};

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="bg-black m-auto h-20 flex items-center justify-between fixed w-full z-1 max-r900:h-16">
      <a
        className="mx-[100px] max-r900:mx-[40px] max-r600:mx-[20px] max-r450:mx-[15px]"
        href="#main"
      >
        <img
          className="w-20 rounded-[50%] max-r900:w-18 max-r600:w-16"
          src={logo}
          alt=""
        />
      </a>
      <div className="w-[250px] flex justify-between mx-[100px] max-r900:w-[210px] max-r900:mx-[50px] max-r600:w-[180px] max-r600:mx-[30px] max-r450:w-[170px] max-r450:mx-[20px]">
        <a
          className="text-white px-[25px] py-[8px] flex items-center justify-center border-white border rounded-[8px] hover:bg-white hover:text-black transition-all hover:scale-105 max-r900:px-[20px] max-r900:text-[15px] max-r900:py-[6px] max-r600:px-[16px] max-r600:text-[13px] max-r600:rounded-[6px] max-r450:px-[12px]"
          href="#aboutMe"
        >
          {t("Header.aboutMe")}
        </a>
        <a
          className="bg-white px-[25px] py-[8px] flex items-center justify-center rounded-[8px] border-white border hover:bg-transparent hover:text-white transition-all hover:scale-105 max-r900:px-[20px] max-r900:text-[15px] max-r900:py-[6px] max-r600:px-[16px] max-r600:text-[13px] max-r600:rounded-[6px] max-r450:px-[12px]"
          href="#contact"
        >
      {t("Header.contact")}
        </a>
      </div>
    </header>
  );
};

export default Header;
