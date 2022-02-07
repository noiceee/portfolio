import "./navbar.scss";
import logo from "./kartikey.svg";
import { useState } from "react";

export default function Navbar() {
  const [toggled, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = ()=>{
    setScrolled(window.pageYOffset !== 0);
  }

  return (
    <nav className={scrolled?"navbar scrolled":"navbar"}>
      <div className="logo-wrapper">
        <img src={logo} alt="kartikey-logo" onClick={()=>{window.location.href = "#"}}/>
      </div>
      <div className={toggled ? "list-wrapper" : "list-wrapper off"}>
        <span onClick={()=>{window.location.href = "#"}}>Home</span>
        <span onClick={()=>{window.location.href = "#"}}>About me</span>
        <span onClick={()=>{window.location.href = "#"}}>Projects</span>
        <span onClick={()=>{window.location.href = "#"}}>Resume</span>
      </div>
      <div className="nav-toggler" onClick={()=>{setToggle(!toggled)}}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
