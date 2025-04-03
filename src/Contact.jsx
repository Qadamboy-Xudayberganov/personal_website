import React from "react";
import instagram from "./assets/instagram.svg";
import github from "./assets/github.svg";
import telegram from "./assets/telegram.png";

const Contact = () => {
  return (
    <div className="text-white max-w-[700px] mx-[30px] pb-[100px] flex flex-col items-center gap-[50px] max-r600:mx-[20px]">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent max-r600:text-[40px]">
        CONTACT
      </h1>
      <div className="flex gap-20 max-r900:gap-10 max-r600:gap-5 max-r450:gap-3">
        <a
          className="w-[140px] h-[140px] flex justify-center items-center border-2 rounded-[20px] transition-all border-white hover:border-none hover:scale-150 max-r600:w-[110px] max-r600:h-[110px] max-r450:w-[50px] max-r450:h-[50px] max-r450:rounded-[7px] max-r450:border"
          href="https://www.instagram.com/qadamboy_xudayberganov?utm_source=qr"
          target="_blank"
        >
          <img className="w-[50px] h-[50px] max-r600:w-[40px] max-r600:h-[40px] max-r450:w-[20px] max-r450:h-[20px]" src={instagram} alt="" />
        </a>
        <a
          className="w-[140px] h-[140px] flex justify-center items-center border-2 rounded-[20px] transition-all border-white hover:border-none hover:scale-150 max-r600:w-[110px] max-r600:h-[110px] max-r450:w-[50px] max-r450:h-[50px] max-r450:rounded-[7px] max-r450:border"
          href="https://t.me/Qadamboy_Xudayberganov"
          target="_blank"
        >
          <div>
            <img className="w-[50px] h-[50px] max-r600:w-[40px] max-r600:h-[40px] max-r450:w-[20px] max-r450:h-[20px]" src={telegram} alt="" />
          </div>
        </a>
        <a
          className="w-[140px] h-[140px] flex justify-center items-center border-2 rounded-[20px] transition-all border-white hover:border-none hover:scale-150 max-r600:w-[110px] max-r600:h-[110px] max-r450:w-[50px] max-r450:h-[50px] max-r450:rounded-[7px] max-r450:border"
          href="https://github.com/Qadamboy-Xudayberganov"
          target="_blank"
        >
          <img className="w-[50px] h-[50px] max-r600:w-[40px] max-r600:h-[40px] max-r450:w-[20px] max-r450:h-[20px]" src={github} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
