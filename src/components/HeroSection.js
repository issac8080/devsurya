import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const images = [
  require('../assets/images/hero.jpeg'),
  require('../assets/images/about.jpeg'),
  require('../assets/images/client1.jpeg'),
];

const fullText = 'Welcome to ';
const highlightText = 'Devasurya Production House';
const typingSpeed = 150;

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [text, setText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (text.length < highlightText.length) {
        setText((prevText) => prevText + highlightText[text.length]);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="overlay" />
      <div className="hero-content">
        <h2 className="hero-title">
          <span>{fullText}</span>
          <span className="typewriter">{text}</span>
        </h2>
        <h1 className="hero-subtitle">
          Crafting Visual Stories with Passion.
        </h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus sapien. Proin mattis lectus ut faucibus iaculis. Sed laoreet dolor at orci aliquam, vitae facilisis tellus dignissim.
        </p>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="cross">&times;</div>
        ) : (
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        )}
      </div>

      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HeroSection;
