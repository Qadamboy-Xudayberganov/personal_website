import React from "react";

const Project = ({ link, img, title, text }) => {
  return (
    <div className="flex items-center gap-[20px] hover:scale-102 transition-all max-r450:flex-col">
      <a className="max-r450:w-full" href={link}>
        <div className="w-[240px] h-[150px] bg-white flex items-center justify-center rounded-[10px] max-r600:w-[180px] max-r600:h-[120px] max-r450:w-full max-r450:h-[200px]">
          <img className="w-[120px] max-r600:w-[90px] max-r450:w-[150px]" src={img} alt="" />
        </div>
      </a>
      <div className="flex flex-col gap-[15px] max-r600:gap-[10px]">
        <h2 className="text-[28px] font-bold leading-[20px] max-r600:text-[22px]">
          {title}
        </h2>
        <p className="text-[16px] leading-[18px] max-r600:text-[15px] max-r600:leading-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Project;
