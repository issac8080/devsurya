import React from 'react';
import './Faq.css'; // Ensure to create and import the CSS file

const FAQ = () => {
  const faqs = [
    {
      question: "What is the pre-production phase in filmmaking?",
      answer: "Pre-production is the initial phase of filmmaking, where planning and preparation take place. It involves tasks such as scriptwriting, casting, location scouting, budgeting, and scheduling to ensure a smooth production process."
    },
    {
      question: "What role does a director of photography (DP) play in a film production?",
      answer: "The Director of Photography (DP) is responsible for the visual look of a film. They work closely with the director to create the right mood and atmosphere through lighting, camera angles, and shot composition."
    },
    {
      question: "What is post-production, and what does it entail?",
      answer: "Post-production involves editing your footage, adding sound effects, music, and visual effects, color grading, and finalizing the film for distribution."
    },
    {
      question: "What is the purpose of a film producer?",
      answer: "Film producers oversee all aspects of a production, from securing financing and managing budgets to hiring key personnel and ensuring the project stays on track. They play a crucial role in bringing a film from concept to completion."
    },
    {
      question: "What is the significance of location scouting in filmmaking?",
      answer: "Location scouting is crucial as it helps find the perfect locations that enhance the story visually and thematically, ensuring they align with the film's vision."
    },
    {
      question: "How does sound design impact a film's quality?",
      answer: "Sound design is vital as it enhances the emotional and psychological aspects of a film, creating an immersive experience for the audience."
    },
    {
      question: "How do I start the process of making my own film?",
      answer: "Begin by developing a compelling and well-structured script or concept. This forms the foundation of your film."
    },
    {
      question: "What's the importance of pre-production in filmmaking?",
      answer: "Pre-production is essential as it sets the groundwork for a successful shoot, ensuring that all elements are planned and organized."
    },
    {
      question: "What equipment do I need for filming?",
      answer: "Basic equipment includes a camera, tripod, lighting equipment, microphones, and editing software."
    },
    {
      question: "How can I find the right cast and crew for my film?",
      answer: "Network within the industry, utilize casting websites, and hold auditions to find actors. Collaborate with experienced crew members who share your vision."
    },
    {
      question: "What's the role of post-production in the filmmaking process?",
      answer: "Post-production involves editing your footage, adding sound effects, music, and visual effects, color grading, and finalizing the film for distribution."
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-hero-section">
        <h1 className="faq-hero-title">Frequently Asked Questions</h1>
        <p className="faq-hero-description">Everything you need to know about filmmaking, from pre-production to post-production.</p>
      </div>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question">{faq.question}</h3>
            <hr className="faq-divider" />
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
      <h2 className="faq-movie-title">Need to Make Your Movie?</h2>
      <p className="faq-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
  );
};

export default FAQ;
