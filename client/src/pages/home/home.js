import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import Admision from '../../assets/plus/Admision.png';
import Trophy from '../../assets/plus/Trophy-home.png';
import Conocenos from '../../assets/plus/Conocenos.png';
import Logo from '../../assets/logos/Logo.svg';
import Bcard from '../../assets/plus/Bcard.png';

// Banners
import Banner1 from '../../assets/banners/Banner_1.webp';
import Banner2 from '../../assets/banners/Banner_2.webp';
import Banner3 from '../../assets/banners/Banner_3.webp';
import Banner4 from '../../assets/banners/Banner_4.webp';
import Banner5 from '../../assets/banners/Banner_5.webp';
import Banner6 from '../../assets/banners/Banner_6.webp';
import Banner7 from '../../assets/banners/Banner_7.webp';
import Banner8 from '../../assets/banners/Banner_8.webp';
import Banner9 from '../../assets/banners/Banner_9.webp';
import Banner10 from '../../assets/banners/Banner_10.webp';
import Banner11 from '../../assets/banners/Banner_11.webp';

const bannerImages = [
  Banner1, Banner2, Banner3, Banner4, Banner5,
  Banner6, Banner7, Banner8, Banner9, Banner10, Banner11
];

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const preloadImages = (imagePaths) => {
      return imagePaths.map((path) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = path;
        });
      });
    };

    const importBanners = async () => {
      try {
        await Promise.all(preloadImages(bannerImages));
        setBanners(bannerImages);
      } catch (error) {
        console.error("Error loading banners:", error);
      }
    };

    importBanners();
  }, []);

  useEffect(() => {
    document.title = "CCAL";
    if (banners.length > 0) {
      const bannerInterval = setInterval(() => {
        setCurrentBanner((currentBanner) => (currentBanner + 2) % banners.length);
      }, 9000); 

      return () => clearInterval(bannerInterval);
    }
  }, [banners]);

  const scrollToContent = () => {
    document.querySelector('.scroll-snap-card-container').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (banners.length > 0) {
      const nextBanner = (currentBanner + 1) % banners.length;

      document.documentElement.style.setProperty('--banner-image-before', `url(${banners[currentBanner]})`);
      document.documentElement.style.setProperty('--banner-image-after', `url(${banners[nextBanner]})`);

      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        heroSection.classList.toggle('show-before');
        heroSection.classList.toggle('show-after');
      }
    }
  }, [currentBanner, banners]);

  return (
    <div className="home-container">
      {banners.length > 0 && (
        <header className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenidos al Colegio Científico de Alajuela</h1>
            <p className="hero-description">
              Institución líder en la educación media | Somos más que una fórmula
            </p>
            <button className="HomeB" onClick={scrollToContent}>¡Empezar Ahora!</button>
          </div>
        </header>
      )}
      <div className="scroll-snap-card-container">
        <div className="scroll-card-paragraph"></div>
        <div className="responsive-iframe-container">
          <iframe
            width="744"
            height="419"
            src="https://www.youtube.com/embed/AhGhLTd7BMc"
            title="¡Más que una fórmula! - 15 Aniversario del CCC Alajuela"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="card-section-wrapper">
        <div className="card-photo-title">
          <h1>¿SABÍAS QUE?</h1>
        </div>
        <div className="card-container">
          <div className="card card1">
            <img src={Banner5} alt="Sobre Nosotros" className="card-image" />
            <div className="card__content">
              <h2 className="card__title">Un poco sobre nosotros</h2>
              <p className="card__description">
                Esta institución nace en el año 2006 bajo el convenio entre el Ministerio de Educación Pública el Ministerio de Ciencia, Tecnología y Telecomunicaciones y la Universidad Estatal a Distancia, firmando como Rector el Señor Rodrigo Arias Camacho, actual jerarca de esta casa de enseñanza universitaria y gran aliado de los Colegios Científicos.
              </p>
            </div>
          </div>
          <div className="card card2">
            <img src={Banner8} alt="Egresados" className="card-image" />
            <div className="card__content">
              <h2 className="card__title">Actualmente tenemos +420 egresados</h2>
              <p className="card__description">
                Actualmente la sede de Alajuela cuenta con un total de +420 egresados, siendo una institución educativa de excelencia académica y con visión preuniversitaria y contribuyendo en la formación de futuros profesionales de la mano de sus familias y el equipo docente y administrativo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-redirect-container">
        <div className="card-redirect">
          <img src={Conocenos} alt="Conócenos" />
          <div className="card-redirect-details">
            <p className="text-title">¿Quieres saber más sobre nosotros?</p>
          </div>
          <NavLink to="/conócenos" className="card-redirect-button">
            <button className="card-redirect-button">Más información</button>
          </NavLink>
        </div>
        <div className="card-redirect">
          <img src={Trophy} alt="Logros" />
          <div className="card-redirect-details">
            <p className="text-title">¿Te interesaría saber sobre nuestros logros?</p>
          </div>
          <NavLink to="/logros" className="card-redirect-button">
            <button className="card-redirect-button">Más información</button>
          </NavLink>
        </div>
        <div className="card-redirect">
          <img src={Admision} alt="Admision" />
          <div className="card-redirect-details">
            <p className="text-title">¿Acaso te gustaría aplicar a nuestra institución?</p>
          </div>
          <NavLink to="/admisión" className="card-redirect-button">
            <button className="card-redirect-button">Más información</button>
          </NavLink>
        </div>
      </div>
      <div className="flip-card-text-container">
        <div className="flip-card-text">
          <p>¿Interesado en visitar el colegio o ponerte en contacto con nosotros? Descubre más sobre nuestra institución, programas educativos y oportunidades únicas que ofrecemos. ¡Estamos aquí para ayudarte a dar el siguiente paso en tu viaje educativo!</p>
        </div>
        <div className="Flip-card">
          <div className="Flip-card-wrapper">
            <div className="Flip-card-inner">
              <div className="Flip-card-front">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="Flip-card-back">
                <img src={Bcard} alt="BCard" />
                <div className="Flip-card-back-text">
                  <NavLink to="/contáctanos" className="Flip-card-back-text">
                    <p>¡Contáctanos!</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
