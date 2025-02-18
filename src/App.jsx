import "./App.scss";
import Particles from "react-tsparticles";
import particleOptions from "./particles-options";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="top-section" id="home">
        <div className="particles-cover"></div>
        <Navbar />
        <Hero />
        <Particles id="ts-particles" options={particleOptions} />
      </div>
      <About />
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
