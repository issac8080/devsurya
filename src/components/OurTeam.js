import React from 'react';
import './OurTeam.css'; // Make sure to create and import the CSS
import teamImage1 from '../assets/images/client1.jpeg'; // Example team images
import teamImage2 from '../assets/images/client2.jpeg';
import teamImage3 from '../assets/images/client3.jpeg';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Michael Reynolds',
      position: 'Director of Cinematography',
      image: teamImage1,
    },
    {
      name: 'Benjamin Foster',
      position: 'Creative Editor',
      image: teamImage2,
    },
    {
      name: 'David Martinez',
      position: 'Production Manager',
      image: teamImage3,
    },
    // Add more team members if needed
  ];

  return (
    <div className="our-team-container">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-text">
          <h1 className="team-title">Our Team</h1>
          <h4 className="team-breadcrumb">
            <span className="home">Home</span> - Our Team
          </h4>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-info">
          <h2>Where Creative Minds Unite!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="team-stats">
            <div className="stat">
              <h3>32+</h3>
              <p>Years of Experiences</p>
            </div>
            <div className="stat">
              <h3>78+</h3>
              <p>Winning Awards</p>
            </div>
            <div className="stat">
              <h3>1.2K</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member-card" key={index}>
              <img src={member.image} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
