import "./App.scss";
import Particles from "react-tsparticles";
import particleOptions from "./particles-options";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Particles options={particleOptions} />
    </div>
  );
}

export default App;
