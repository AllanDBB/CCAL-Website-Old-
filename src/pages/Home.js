import React from 'react';
import './Home.css';
import heroImage from './Banners/Banner 1.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
      <header className="hero-section">
        <h1 className="hero-title">Bienvenido a CCAL</h1>
        <p className="hero-description">
          Somos más que una formula.
        </p>
        <button className="cta-button">¡Empezar Ahora!</button>
      </header>
    </div>
  );
};

export default Home;
