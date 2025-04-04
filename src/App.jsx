import { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/your-website-name.com/visits")
      .then((res) => res.json())
      .then((data) => setViews(data.value));
  }, []);

  return (
    <div className="bg-black flex flex-col items-center">
      <Header />
      <div id="main" className="flex flex-col items-center">
        <Home />
        <span id="aboutMe">
          <AboutMe />
        </span>
        <Experience />
        <Projects />
        <span id="contact">
          <Contact />
        </span>
      </div>
      <p className="text-white w-[700px] flex justify-start">Views: {views}</p>
    </div>
  );
}

export default App;
