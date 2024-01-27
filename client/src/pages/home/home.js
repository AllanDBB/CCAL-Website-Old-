import React, {useEffect} from 'react';
import './home.css';
import Banner1 from '../../assets/banners/Banner 1.jpg'
import Banner2 from '../../assets/banners/Banner 2.jpg'
import Blue from '../../assets/plus/blue.png'
import Yellow from '../../assets/plus/yellow.png'
const Home = () => {

  useEffect(() => {
    document.title = "CCAL";
  }, []);

  const scrollToContent = () => {
    document.querySelector('.scroll-snap-card-container').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Wavy Lines */}
      <div className="sidebar" style={{ backgroundImage: `url(${Blue})`, left: '2vw' }}></div>
      <div className="sidebar" style={{ backgroundImage: `url(${Yellow})`, left: '4vw' }}></div>
      <div className="sidebar" style={{ backgroundImage: `url(${Blue})`, left: '6vw' }}></div>

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
            <button className="cta-button" onClick={scrollToContent}>¡Empezar Ahora!</button>
          </div>
        </header>
      </div>

        <div className="scroll-snap-card-container">
          {/* Paragraph next to the scroll card */}
          <div className="scroll-card-paragraph">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="scroll-snap-card">
            <div className="slide azul">
              <p className="tip">Post Insta 1</p>
            </div>
            <div className="slide yellow">
              <p className="tip">Post Insta 2</p>
            </div>
            <div className="slide azul2">
              <p className="tip">Post Insta 3</p>
            </div>
          </div>
        </div>

{/* Wrapper for Title and Card Container */}
<div className="card-section-wrapper">
  {/* Title for Card Section */}
  <div className="card-photo-title">
    <h1>¿SABÍAS QUE?</h1>
  </div>

  {/* Card Container */}
  <div className="card-container">
    {/* First Card */}
    <div className="card card1">
      <img src={Banner1} alt="Banner1" className="card" />
      <div className="card__content">
        <h2 className="card__title">Lider en cr</h2>
        <p className="card__description">Algo asi</p>
      </div>
    </div>

    {/* Second Card */}
    <div className="card card2">
      <img src={Banner2} alt="Banner2" className="card" />
      <div className="card__content">
        <h2 className="card__title">x cantidad egresados</h2>
        <p className="card__description">algo asi</p>
      </div>
    </div>
  </div>
</div>

        {/* Redirect card */}
        <div class="card-redirect-container">
    <div class="card-redirect">
      <div class="card-redirect-details">
        <p class="text-title">Intro para conocernos</p>
        <p class="text-body">Poner icono representativo</p>
      </div>
      <button class="card-redirect-button">More info</button>
    </div>

    <div class="card-redirect">
      <div class="card-redirect-details">
        <p class="text-title">Dato de logros</p>
        <p class="text-body">Poner icono representativo</p>
      </div>
      <button class="card-redirect-button">More info</button>
    </div>

    <div class="card-redirect">
      <div class="card-redirect-details">
        <p class="text-title">Intro proceso admision</p>
        <p class="text-body">Poner icono representativo</p>
      </div>
      <button class="card-redirect-button">More info</button>
    </div>
  </div>

        {/* Flip Card */}
        <div class="Flip-card">
  <div class="Flip-card-wrapper">
    <div class="Flip-card-inner">
      <div class="Flip-card-front">
        <p>Fotito y algo mas que represente tarjeta introduccion</p>
      </div>
      <div class="Flip-card-back">
        <p>Info que lleve a conocenos (poner en la izquierda indicador de que se puede girar)</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};



export default Home;