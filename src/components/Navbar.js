import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = ({ toggleTheme, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage hamburger menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">
          <Link to="/" className="navbar-title-link">Aryan</Link>
        </h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icons */}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>Skills</Link></li>
        
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            <FaMoon /> {/* Moon icon for theme toggle */}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
