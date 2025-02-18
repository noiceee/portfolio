import "./navbar.scss";
import logo from "./kartikey.svg";
import cv from "./KartikeySingh_SDE.pdf";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [toggled, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset !== 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setToggle(false);
    }
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="kartikey-logo"
          onClick={() => scrollToSection('home')}
        />
      </div>
      <div className={toggled ? "list-wrapper" : "list-wrapper off"}>
        <span>
          <a onClick={() => scrollToSection('home')}>Home</a>
        </span>
        <span>
          <a onClick={() => scrollToSection('about')}>About</a>
        </span>
        <span>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
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
