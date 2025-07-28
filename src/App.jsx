import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Navigation />
      <section id="home">
        <Home />
      </section>
      <section id="aboutMe">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills  />
      </section>
    </div>
  );
 
}

export default App;
