import React from "react";
import CodingLanguage from "./Components/CodingLang";

const Experience = () => {
  return (
    <div className="text-white max-w-[700px] m-auto flex flex-col items-center gap-[50px] relative z-1">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent">
        EXPERIENCE
      </h1>

      <div className="w-full flex items-center justify-between">
        <h2 className="text-[28px] leading-[28px]">Web Developer</h2>
        <h3 className="text-[14px] leading-[16px]">
          AUGUST 2023 <span className="text-[20px] mx-1">-</span> PRESENT, KHIVA
        </h3>
      </div>

      <div className="text-center text-[18px] flex flex-col gap-[30px] text-[E1E1E1]">
        <p className="text-start text-[15px]">
          Currently, I am working on WebHR Mobile Application, WebHR is a Cloud
          based Social HR Software for SMEs by Verge Systems Inc. WebHR is
          currently used in over 160 countries world wide by thousands of
          organizations to manage HR, As a React.js developer with 1.5 year of
          experience, I have a strong foundation in creating dynamic and
          responsive mobile and web applications.
        </p>
        <p className="text-start text-[15px]">
          My experience with React Native has allowed me to develop
          cross-platform mobile applications that run seamlessly on both iOS and
          Android platforms. Additionally, my proficiency in React.js has
          equipped me with the skills to create fast, scalable, and dynamic web
          pages with excellent user experiences. I have a deep understanding of
          component-based architecture and state management, and I am
          well-versed in the latest web development trends and technologies.
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
