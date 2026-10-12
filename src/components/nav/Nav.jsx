
import { useState } from "react";
import "./nav.css";
import Logo from "../../assets/logo.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="brand" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Fatima Lajam Logo"
            className="logo"
          />
          <span>Fatima Lajam</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`nav-links ${menuOpen ? "active" : ""}`}
          id="nav-links"
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#volunteering" onClick={closeMenu}>Volunteering</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Nav;



