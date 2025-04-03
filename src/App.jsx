import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-black overflow-y-hidden">
      <span id="main">
        <Header />
      </span>
      <Home />
      <span id="aboutMe" className="transition-all">
        <AboutMe />
      </span>
      <Experience />
      <Projects />
      <span id="contact">
        <Contact />
      </span>
    </div>
  );
}

export default App;
