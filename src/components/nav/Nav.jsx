import React from 'react'
import './nav.css'
import Logo from "../../assets/logo.svg"


function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="brand">
          <img src={Logo} alt="Fatima Lajam Logo" className="logo" />
          <span>Fatima Lajam</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Nav



