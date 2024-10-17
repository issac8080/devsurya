import React from 'react';
import './Services.css'; // Import the appropriate CSS
import heroImage from '../assets/images/hero.jpeg'; // Assuming you're using the same hero image

const Services = () => {
  const services = [
    {
      title: 'Pre-Production Planning',
      description: 'This service involves scriptwriting, storyboarding, location scouting, casting, and all the necessary preparations before actual filming begins.',
      icon: (
        <svg width="24" height="24" fill="yellow">
          <path d="M12 2L2 7h20L12 2zm0 2l10 5-10 5-10-5 10-5zm0 10l10 5-10 5-10-5 10-5zm0 2l-8 4 8-4 8 4-8-4z" />
        </svg>
      ),
    },
    {
      title: 'Cinematography',
      description: 'Cinematographers, or directors of photography, provide expertise in capturing high-quality visuals. This includes camera operation, lighting design, and shot composition.',
      icon: (
        <svg width="24" height="24" fill="yellow">
          <path d="M12 2l-1.5 4.5H6l-1.5 4.5h4.5L6 18h4.5L12 22l1.5-4.5H18l1.5-4.5h-4.5L18 6h-4.5L12 2z" />
        </svg>
      ),
    },
    {
      title: 'Production Crew',
      description: 'This encompasses the hiring and coordination of various crew members, such as producers, directors, sound engineers, makeup artists, and production assistants.',
      icon: (
        <svg width="24" height="24" fill="yellow">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15v-2H9v-1h2V8h1v6h2v1h-2v2h-1zm-4-5h1V8H7v5z" />
        </svg>
      ),
    },
    {
      title: 'Post-Production Editing',
      description: 'Video editing is a crucial service where raw footage is transformed into a polished, cohesive narrative. Editors cut and arrange footage, add effects, and refine the final product.',
      icon: (
        <svg width="24" height="24" fill="yellow">
          <path d="M12 2l4 4-4 4-4-4 4-4zm0 18l-4-4 4-4 4 4-4 4zm-8-8h2v8H4V12zm16 0h2v8h-2v-8z" />
        </svg>
      ),
    },
    {
      title: 'Visual Effects (VFX)',
      description: 'VFX professionals create computer-generated imagery (CGI) and other special effects to enhance the visual appeal of a video or film.',
      icon: (
        <svg width="24" height="24" fill="yellow">
          <path d="M12 2l4 4-4 4-4-4 4-4zm0 18l-4-4 4-4 4 4-4 4zm-8-8h2v8H4V12zm16 0h2v8h-2v-8z" />
        </svg>
      ),
    },
    {
      title: 'Sound Design and Audio Production',
      description: 'Sound engineers & designers work to create high-quality audio for the video. This includes recording, editing, & mixing audio elements like dialogue, music, & sound effects.',
      icon: (
        <svg width="24" height="24" fill="yellow">
          <path d="M10 3v18l-7-7h-2V9h2l7-6zm1 0h3v18h-3V3zm6 0h3v18h-3V3zm6 0h3v18h-3V3z" />
        </svg>
      ),
    },
    {
      title: 'Color Grading',
      description: 'Colorists adjust the color and tone of the video to achieve a specific look or mood. This process is essential for setting the visual style of the production.',
      icon: (
        <svg width="24" height="24" fill="yellow">
          <path d="M12 2L2 12h20L12 2zm0 2l8 8H4l8-8zm0 16l10-10H2l10 10z" />
        </svg>
      ),
    },
    {
      title: 'Distribution and Marketing',
      description: 'After production, companies often assist with marketing, distribution, and promotion of the final product. This includes submitting films to festivals & creating marketing materials.',
      icon: (
        <svg width="24" height="24" fill="yellow">
          <path d="M12 2l8 8-8 8-8-8 8-8zm0 14l-4-4 4-4 4 4-4 4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="services-hero-text">
          <h1 className="services-title">Services</h1>
          <h4 className="services-breadcrumb">
            <span className="home">Home</span> - Services
          </h4>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-grid-section">
        <h2 className="services-heading">Bringing Your Vision to Life</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
