import React from "react";
import Project from "./Components/Project";
import logo1 from "./assets/logo1.png";

const Projects = () => {
  return (
    <div className="text-white max-w-[700px] m-auto py-[100px] flex flex-col items-center gap-[50px] relative z-1">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent">
        PROJECTS
      </h1>
      <div>
        <Project link={""} img={logo1} title={"Personal Website"} text={"I used React and Tilwind css to create this website and it took me all about 3 days to build it from scratch"}/>
      </div>
    </div>
  );
};

export default Projects;
