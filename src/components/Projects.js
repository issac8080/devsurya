import React from 'react';
import './Projects.css'; // Ensure that this file contains the styles you've shared

// Sample project data to render project cards dynamically
const projectsData = [
  {
    id: 1,
    title: 'RRR',
    description: 'An epic tale of freedom fighters in the 1920s.',
    videoSrc: 'https://www.youtube.com/embed/8ugaeA-nMTc',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    id: 2,
    title: 'KGF: Chapter 2',
    description: 'The saga of Rocky, a feared gangster, continues.',
    videoSrc: 'https://www.youtube.com/embed/odm0D8LGGjI',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    id: 3,
    title: 'Pushpa: The Rise',
    description: 'The journey of a man rising against all odds.',
    videoSrc: 'https://www.youtube.com/embed/xt_65k-gv_Y',
    rating: '⭐⭐⭐⭐⭐',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-text">
          <h1>Projects</h1>
          <h3>Home – Projects</h3>
        </div>
      </section>

      {/* Main Section */}
      <section className="projects-section">
        <div className="projects-heading">
          <h2>Capturing Moments, Crafting Stories</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="youtube-video-container">
                <iframe
                  width="100%"
                  height="400"
                  src={project.videoSrc}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-rating">{project.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
