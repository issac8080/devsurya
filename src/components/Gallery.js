import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    { src: require('../assets/images/video1.jpeg'), alt: 'Video 1' },
    { src: require('../assets/images/video2.jpeg'), alt: 'Video 2' },
    { src: require('../assets/images/video3.jpeg'), alt: 'Video 3' },
    { src: require('../assets/images/video4.jpeg'), alt: 'Video 4' },
    { src: require('../assets/images/client1.jpeg'), alt: 'Client 1' },
    { src: require('../assets/images/client2.jpeg'), alt: 'Client 2' },
    { src: require('../assets/images/client3.jpeg'), alt: 'Client 3' },
    { src: require('../assets/images/hero.jpeg'), alt: 'Hero Image' },
    { src: require('../assets/images/about.jpeg'), alt: 'About Image' },
  ];

  return (
    <div className="gallery-container">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="overlay"></div>
        <div className="gallery-hero-text">
          <h1 className="gallery-title">Gallery</h1>
          <h4 className="gallery-breadcrumb">
            <span className="home">Home</span> - Gallery
          </h4>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
