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

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
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
          onClick={(e) => scrollToSection('home', e)}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className={toggled ? "list-wrapper" : "list-wrapper off"}>
        <span>
          <a href="#home" onClick={(e) => scrollToSection('home', e)}>Home</a>
        </span>
        <span>
          <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
        </span>
        <span>
          <a href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</a>
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
        aria-label="Toggle navigation"
        aria-expanded={toggled}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
