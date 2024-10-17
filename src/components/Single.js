import React from 'react';
import './Single.css'; // Importing the CSS file for styling

const SingleProject = () => {
  return (
    <div className="single-project-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-text">
          <h1>Project Title</h1>
          <h3>Home – Project</h3>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/8ugaeA-nMTc" // Example RRR trailer link
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Movie Synopsis Section */}
      <section className="synopsis-section">
        <h2>Synopsis</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis efficitur ipsum, id ullamcorper libero. Nullam sit amet dolor maximus, vulputate augue id, interdum purus. Fusce quis dictum magna. Donec et neque mattis, tincidunt ante id, volutpat nulla. Mauris dapibus euismod finibus. Integer id odio euismod, egestas mi eu, rhoncus ligula. Phasellus rutrum eros nec lectus laoreet, at porttitor nibh iaculis. Morbi malesuada sed sapien in venenatis. In id tellus vel orci scelerisque tincidunt eu sed nulla.
        </p>
        <p>
          Fusce ornare accumsan lorem eget dignissim. Vivamus auctor, ligula eget pharetra laoreet, eros erat luctus neque, vel egestas erat felis nec nunc. Morbi non odio tempor, scelerisque eros eget, accumsan orci. Vivamus bibendum neque sagittis ex faucibus, non aliquam lorem molestie. Fusce a felis quam.
        </p>

        <div className="movie-details">
          <p><strong>Movie Genre:</strong> Action, Drama</p>
          <p><strong>Producer:</strong> Dekassyah</p>
          <p><strong>Director:</strong> Dekassyah</p>
          <p><strong>Writer:</strong> Hendriko</p>
          <p><strong>Production:</strong> Direct.Production</p>
          <p><strong>Cast:</strong> Sylvester Harper, Marcus Wells, Isabella Cruz, Gabriel Stone, Victoria Mitchell, Lucas Reynolds, Celeste Anderson</p>
        </div>
      </section>
    </div>
  );
};

export default SingleProject;
