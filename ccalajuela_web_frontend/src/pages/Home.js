import React from 'react';
import './Home.css';
import heroImage from './Banners/Banner 1.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-container">
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
        <header className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenido a CCAL</h1>
            <p className="hero-description">
              Somos más que una fórmula.
            </p>
            <button className="cta-button">¡Empezar Ahora!</button>
          </div>
        </header>
      </div>

      {/* Snap Cards Section */}
      <div className="scroll-snap-card">
        <div className="slide red">
          <p className="tip">Scroll On Me</p>
        </div>
        <div className="slide blue">
          <p className="tip">Scroll On Me</p>
        </div>
        <div className="slide green">
          <p className="tip">Scroll On Me</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
