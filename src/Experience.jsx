import React from "react";
import CodingLanguage from "./Components/CodingLang";

const Experience = () => {
  return (
    <div className="text-white max-w-[700px] mx-[30px] flex flex-col items-center gap-[50px] relative z-1  max-r900:mx-[20px]">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent max-r600:text-[40px]">
        EXPERIENCE
      </h1>

      <div className="w-full flex items-center justify-between">
        <h2 className="text-[28px] leading-[28px] max-r600:text-[24px] max-r600:leading-[24px]">
          Web Developer
        </h2>
        <h3 className="text-[14px] leading-[16px] mt-[8px] max-r600:text-[12px] max-r600:leading-[14px] max-r600:mt-[6px]">
          AUGUST 2023 <span className="text-[20px] mx-1">-</span> PRESENT
        </h3>
      </div>

      <div className="text-center text-[18px] flex flex-col gap-[30px] text-[E1E1E1] max-r600:text-[15px]">
        <p className="text-start text-[15px]">
          Currently, I am working on WebHR Mobile Application, WebHR is a Cloud
          based Social HR Software for SMEs by Verge Systems Inc. Additionally,
          my proficiency in React.js has equipped me with the skills to create
          fast, scalable, and dynamic web pages with excellent user experiences.
        </p>
        <p className="text-start text-[15px]">
          My experience with React Native has allowed me to develop
          cross-platform mobile applications that run seamlessly on both iOS and
          Android platforms. Additionally, my proficiency in React.js has
          equipped me with the skills to create fast, scalable, and dynamic web
          pages with excellent user experiences.
        </p>
        <div className="flex full justify-start gap-[10px]">
          <CodingLanguage title="React Native" />
          <CodingLanguage title="Java Script" />
          <CodingLanguage title="React" />
          <CodingLanguage title="Typescript" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
