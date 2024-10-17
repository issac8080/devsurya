import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Projects from './components/Projects';
import Single from './components/Single';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Single" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
