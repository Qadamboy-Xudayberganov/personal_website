import React from "react";
import CodingLanguage from "./Components/CodingLang";

const Experience = () => {
  return (
    <div className="text-white max-w-[700px] mx-[30px] flex flex-col items-center gap-[50px] max-r600:mx-[20px]">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent max-r600:text-[40px]">
        EXPERIENCE
      </h1>

      <div className="w-full flex items-center justify-between max-r450:justify-start max-r450:flex-col max-r450:items-start max-r450:gap-[5px]">
        <h2 className="text-[28px] leading-[28px]">Web Developer</h2>
        <h3 className="text-[14px] leading-[16px] mt-[8px] flex gap-1 max-r600:mt-[6px] max-r450:mt-0">
          <span className="hidden max-r450:flex">(</span>
          AUGUST 2023 <span className="text-[20px] mx-1">-</span> PRESENT
          <span className="hidden max-r450:flex">)</span>
        </h3>
      </div>

      <div className="text-center text-[18px] flex flex-col gap-[30px] text-[E1E1E1] max-r600:text-[15px]">
        <p className="text-start text-[15px]">
          Over the past few years, I’ve worked on diverse web development
          projects ranging from personal portfolios and landing pages to fully
          responsive business websites. This hands-on experience has sharpened
          my skills in front-end development, ensuring clean code, fast load
          times, and pixel-perfect design.
        </p>
        <p className="text-start text-[15px]">
          I’ve collaborated with designers, marketers, and clients to turn
          concepts into functional, SEO-optimized websites. Every project has
          strengthened my ability to adapt, solve problems, and deliver
          solutions that align with both user needs and business goals.
        </p>
        <div className="flex full gap-[10px] max-r600:flex-col">
          <span className="flex gap-[10px]">
            <CodingLanguage title="React Native" />
            <CodingLanguage title="Java Script" />
          </span>
          <span className="flex gap-[10px]">
            <CodingLanguage title="React" />
            <CodingLanguage title="Typescript" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
