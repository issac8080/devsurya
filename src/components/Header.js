import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li 
            onMouseEnter={() => setShowAbout(true)} 
            onMouseLeave={() => setShowAbout(false)}
          >
            <span>About <strong>+</strong></span>
            {showAbout && (
              <ul className="dropdown">
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/ourteam">Our Team</Link></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => setShowProjects(true)} 
            onMouseLeave={() => setShowProjects(false)}
          >
            <span>Projects <strong>+</strong></span>
            {showProjects && (
              <ul className="dropdown">
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/single">Single Project</Link></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => setShowPages(true)} 
            onMouseLeave={() => setShowPages(false)}
          >
            <span>Pages <strong>+</strong></span>
            {showPages && (
              <ul className="dropdown">
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/404">Error 404</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </header>
  );
};

export default Header;
