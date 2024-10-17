import React from 'react';
import './Contact.css';
import heroImage from '../assets/images/hero.jpeg';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Hero Section */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="contact-hero-text">
          <h1 className="contact-title">Contact</h1>
          <h4 className="contact-breadcrumb">
            <span className="home">Home</span> - Contact
          </h4>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <div className="contact-left">
          <h2 className="contact-header">Contact</h2>
          <p className="contact-info">
            OUR ADDRESS <br />
            99 Roving St., Big City, Pku, Riau, Indonesia
          </p>
          <p className="contact-info">
            CALL US <br />
            +123-234-1234 <br />
            hello@awesomesite.com
          </p>
          <p className="contact-info">
            VISIT US <br />
            hello@awesomesite.com
          </p>
        </div>
        <div className="contact-right">
          <h3>SEND US A MESSAGE</h3>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="firstName" placeholder="Your First Name" />
              <input type="text" name="lastName" placeholder="Your Last Name" />
            </div>
            <div className="form-group">
              <input type="text" name="companyName" placeholder="Your Company Name" />
              <input type="email" name="email" placeholder="Your Company Email" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="5"></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
