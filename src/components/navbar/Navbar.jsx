import "./navbar.scss";
import logo from "./kartikey.svg";
import cv from "./KartikeySingh-Frontend.pdf";
import { useState } from "react";

export default function Navbar() {
  const [toggled, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset !== 0);
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="kartikey-logo"
          onClick={() => {
            window.location.href = "#";
          }}
        />
      </div>
      <div className={toggled ? "list-wrapper" : "list-wrapper off"}>
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#">About me</a>
        </span>
        <span>
          <a href="#">Projects</a>
        </span>
        <span>
          <a href={cv} download>Resume</a>
        </span>
      </div>
      <div
        className="nav-toggler"
        onClick={() => {
          setToggle(!toggled);
        }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
