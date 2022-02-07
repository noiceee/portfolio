import "./navbar.scss";
import logo from "./kartikey.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="kartikey-logo" />
      </div>
      <div className="list-wrapper">
        <span>Home</span>
        <span>About me</span>
        <span>Projects</span>
        <span>Resume</span>
      </div>
    </nav>
  );
}
