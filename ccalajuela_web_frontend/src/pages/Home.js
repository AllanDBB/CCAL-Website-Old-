import React from 'react';
import './Home.css';
import Banner1 from '../pages/Banners/Banner 1.jpg'
import Banner2 from '../pages/Banners/Banner 2.jpg'
import Banner3 from '../pages/Banners/Banner 3.jpg'
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-container">
        {/* Commenting out the hero image part */}
        {/* <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div> */}
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

      {/* Card Container */}
      <div className="card-container">
        {/* First Card */}
        <div className="card card1">
        <img src={Banner1} alt="Banner1" className="card" />
          <div className="card__content">
            <h2 className="card__title">Card 1</h2>
            <p className="card__description">Description for Card 1</p>
          </div>
        </div>

        {/* Second Card */}
        <div className="card card2">
        <img src={Banner2} alt="Banner2" className="card" />
          <div className="card__content">
            <h2 className="card__title">Card 2</h2>
            <p className="card__description">Description for Card 2</p>
          </div>
        </div>

        {/* Third Card */}
        <div className="card card3">
        <img src={Banner3} alt="Banner3" className="card" />
          <div className="card__content">
            <h2 className="card__title">Card 3</h2>
            <p className="card__description">Description for Card 3</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;