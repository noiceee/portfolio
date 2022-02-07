import "./App.scss";
import Particles from "react-tsparticles";
import particleOptions from "./particles-options";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="top-section">
        <div className="particles-cover">
        </div>
        <Navbar />
        <Hero />
        <Particles id="ts-particles" options={particleOptions} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
