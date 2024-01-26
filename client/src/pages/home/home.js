import React, {useEffect} from 'react';
import './home.css';
import Banner1 from '../../assets/banners/Banner 1.jpg'
import Banner2 from '../../assets/banners/Banner 2.jpg'
const Home = () => {

  useEffect(() => {
    document.title = "CCAL";
  }, []);

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
        <div className="slide azul">
          <p className="tip">Scroll On Me</p>
        </div>
        <div className="slide yellow">
          <p className="tip">Scroll On Me</p>
        </div>
        <div className="slide azul2">
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
      </div>


        {/* Redirect card */}
        <div class="card-redirect-container">
    <div class="card-redirect">
      <div class="card-redirect-details">
        <p class="text-title">Card title 1</p>
        <p class="text-body">Here are the details of the card</p>
      </div>
      <button class="card-redirect-button">More info</button>
    </div>

    <div class="card-redirect">
      <div class="card-redirect-details">
        <p class="text-title">Card title 2</p>
        <p class="text-body">Here are the details of the card</p>
      </div>
      <button class="card-redirect-button">More info</button>
    </div>

    <div class="card-redirect">
      <div class="card-redirect-details">
        <p class="text-title">Card title 3</p>
        <p class="text-body">Here are the details of the card</p>
      </div>
      <button class="card-redirect-button">More info</button>
    </div>
  </div>

        {/* Flip Card */}
        <div class="Flip-card">
  <div class="Flip-card-wrapper">
    <div class="Flip-card-inner">
      <div class="Flip-card-front">
        <p>Front Side</p>
      </div>
      <div class="Flip-card-back">
        <p>Back Side</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};



export default Home;