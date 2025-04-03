import React from "react";

const Project = ({ link, img, title, text }) => {
  return (
    <div className="flex items-center gap-[20px] hover:scale-102 transition-all">
        <a href={link}>
      <div className="w-[240px] h-[150px] bg-white flex items-center justify-center rounded-[10px]">
          <img className="w-[120px]" src={img} alt="" />
      </div>
        </a>
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[28px] font-bold leading-[20px]">{title}</h2>
        <p className="text-[12px] leading-[14px]">{text}</p>
      </div>
    </div>
  );
};

export default Project;
