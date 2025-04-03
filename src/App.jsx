import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <span id="main" className="flex flex-col items-center">
        <Home />
        <span
          id="aboutMe"
        >
          <AboutMe />
        </span>
        <Experience />
        <Projects />
        <span id="contact">
          <Contact />
        </span>
      </span>
    </div>
  );
}

export default App;
