import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1 className="about-title">About Us</h1>
          <h4 className="about-breadcrumb">
            <span className="home">Home</span> - About Us
          </h4>
        </div>
      </section>

      {/* Content Section */}
      <div className="about-content">
        <div className="about-section-left">
          <div className="image-container">
            <img src={require('../assets/images/hero.jpeg')} alt="Camera Crew" />
          </div>
          <h2>32+</h2>
          <p>Years of Experience</p>
          <div className="video-prompt">
            <h3>How do we work? Watch The Video!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus felis in tellus faucibus commodo. Nunc vel feugiat mauris.</p>
          </div>
        </div>

        <div className="about-section-right">
          <div className="image-container">
            <img src={require('../assets/images/hero.jpeg')} alt="Lighting Equipment" />
          </div>
          <div className="text-overlay">
            <h2>Behind the Lens, Ahead of the Curve</h2>
            <p>Integer ornare eros eu facilisis vestibulum. Nulla lacus eros, elementum id feugiat in, dictum vitae enim. Integer iaculis nisl vitae nibh facilisis porta.</p>
            <ul>
              <li>Integer volutpat posuere justo venenatis sagittis.</li>
              <li>Donec efficitur tempor dapibus.</li>
              <li>Sed sapien erat, placerat eu facilisis nec.</li>
            </ul>
            <a href="#readmore" className="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
