import "./App.scss";
import Particles from "react-tsparticles";
import particleOptions from "./particles-options";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="app">
      <div className="top-section">
        <div className="particles-cover">
          <Navbar />
        </div>
        <Navbar />
        <Hero />
        <Particles id="ts-particles" options={particleOptions} />
      </div>
    </div>
  );
}

export default App;
