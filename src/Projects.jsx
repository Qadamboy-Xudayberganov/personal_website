import React from "react";
import Project from "./Components/Project";
import logo1 from "./assets/logo1.png";

const Projects = () => {
  return (
    <div className="text-white max-w-[700px] mx-[30px] m-auto py-[100px] flex flex-col items-center gap-[50px] max-r600:mx-[20px]">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent max-r600:text-[40px]">
        PROJECTS
      </h1>
      <div className="flex flex-col gap-5 max-r450:gap-15">
        <Project link={""} img={logo1} title={"Personal Website"} text={"I used React and Tilwind css to create this website and it took me all about 3 days to build it from scratch"}/>
        <Project link={""} img={logo1} title={"Personal Website"} text={"I used React and Tilwind css to create this website and it took me all about 3 days to build it from scratch"}/>
        <Project link={""} img={logo1} title={"Personal Website"} text={"I used React and Tilwind css to create this website and it took me all about 3 days to build it from scratch"}/>
        <Project link={""} img={logo1} title={"Personal Website"} text={"I used React and Tilwind css to create this website and it took me all about 3 days to build it from scratch"}/>
      </div>
    </div>
  );
};

export default Projects;
