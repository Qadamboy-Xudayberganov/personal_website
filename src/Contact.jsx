import React from "react";
import instagram from "./assets/instagram.svg";
import github from "./assets/github.svg";
import telegram from "./assets/telegram.png";

const Contact = () => {
  return (
    <div className="text-white max-w-[700px] m-auto pb-[100px] flex flex-col items-center gap-[50px] relative z-1">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent">
        CONTACT
      </h1>
      <div className="flex w-full justify-between">
        <a
          className="w-[150px] h-[150px] flex justify-center items-center border-2 rounded-[20px] transition-all border-white hover:border-none hover:scale-150"
          href="https://www.instagram.com/qadamboy_xudayberganov?utm_source=qr"
          target="_blank"
        >
          <img className="w-[50px] h-[50px]" src={instagram} alt="" />
        </a>
        <a
          className="w-[150px] h-[150px] flex justify-center items-center border-2 rounded-[20px] transition-all border-white hover:border-none hover:scale-150"
          href="https://t.me/Qadamboy_Xudayberganov"
          target="_blank"
        >
          <div>
            <img className="w-[50px] h-[50px]" src={telegram} alt="" />
          </div>
        </a>
        <a
          className="w-[150px] h-[150px] flex justify-center items-center border-2 rounded-[20px] transition-all border-white hover:border-none hover:scale-150"
          href="https://github.com/Qadamboy-Xudayberganov"
          target="_blank"
        >
          <img className="w-[50px] h-[50px]" src={github} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
