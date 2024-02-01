import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import Banner1 from '../../assets/banners/Banner1.jpg'
import Banner2 from '../../assets/banners/Banner 2.jpg'
import Admision from '../../assets/plus/Admision.png'
import Trophy from '../../assets/plus/Trophy-home.png'
import Conocenos from '../../assets/plus/Conocenos.png'
import Logo from '../../assets/logos/Logo.svg'
import Bcard from '../../assets/plus/Bcard.png'



const Home = () => {

  const preloadImages = (imagePaths) => {
    return imagePaths.map((path) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.src = path;
      });
    });
  };
  
  const [currentBanner, setCurrentBanner] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const importBanners = async () => {
      try {
        const bannerContext = require.context('../../../../server/home_banners/', false, /\.(png|jpe?g|svg)$/);
        const bannerPaths = bannerContext.keys().map(bannerContext);
        await Promise.all(preloadImages(bannerPaths));
        setBanners(bannerPaths);
      } catch (error) {
        console.error("Error loading banners:", error);
      }
    };
  
    importBanners();
  }, []);

  useEffect(() => {
    document.title = "CCAL";
    const bannerInterval = setInterval(() => {
      setCurrentBanner(currentBanner => {
        const nextBanner = (currentBanner + 1) % banners.length;
        console.log("Current banner index:", nextBanner, currentBanner);
        return nextBanner;
      });
    }, 15000);
  
    return () => clearInterval(bannerInterval);
  }, [banners]);
  const scrollToContent = () => {
    
    document.querySelector('.scroll-snap-card-container').scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    if (banners.length > 0) {
      // Actualiza las variables CSS para las imágenes
      const nextBanner = (currentBanner + 1) % banners.length;
      
      document.documentElement.style.setProperty('--banner-image-before', `url(${banners[currentBanner]})`);
      document.documentElement.style.setProperty('--banner-image-after', `url(${banners[nextBanner]})`);
  
      // Seleccionar el elemento .hero-section
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        // Simplemente alternar entre 'show-before' y 'show-after' cada vez
        if (heroSection.classList.contains('show-before')) {
          heroSection.classList.remove('show-before');
          heroSection.classList.add('show-after');
        } else {
          heroSection.classList.remove('show-after');
          heroSection.classList.add('show-before');
        }
      }
    }
  }, [currentBanner, banners]);  

  //console.log('Banner: ', banners[currentBanner])

  return (
    <div>

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
      </div>

        <div className="scroll-snap-card-container">
          {/* Paragraph next to the scroll card */}
          <div className="scroll-card-paragraph">

          </div>
          <iframe width="744" height="419" src="https://www.youtube.com/embed/AhGhLTd7BMc" title="¡Más que una fórmula! - 15 Aniversario del CCC Alajuela" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        <h2 className="card__title">Un poco sobre nosotros</h2>
        <p className="card__description">Esta institución nace en el año 2006 bajo el convenio entre el Ministerio de Educación Pública el Ministerio de Ciencia, Tecnología y Telecomunicaciones y la Universidad Estatal a Distancia, firmando como Rector el Señor Rodrigo Arias Camacho, actual jerarca de esta casa de enseñanza universitaria y gran aliado de los Colegios Científicos.</p>
      </div>
    </div>

    {/* Second Card */}
    <div className="card card2">
      <img src={Banner2} alt="Banner2" className="card" />
      <div className="card__content">
        <h2 className="card__title">Actualmente tenemos +420 egresados</h2>
        <p className="card__description">Actualmente la sede de Alajuela cuenta con un total de +420 egresados, siendo una institución educativa de excelencia académica y con visión preuniversitaria y contribuyendo en la formación de futuros profesionales de la mano de sus familias y el equipo docente y administrativo</p>
      </div>
    </div>
  </div>
</div>

    {/* Redirect card */}  

        <div class="card-redirect-container">
    <div class="card-redirect">
      <img src={Conocenos} alt="Conocenos" />
        <div class="card-redirect-details">
          <p class="text-title">¿Quieres saber más sobre nosotros?</p>
        </div>
        <NavLink to="/conócenos" className="card-redirect-button">
          <button class="card-redirect-button">
            Más información
          </button>
        </NavLink>
      </div>

    <div class="card-redirect">
    <img src={Trophy} alt="Trophy" />
        <div class="card-redirect-details">
          <p class="text-title">¿Te interesaría saber sobre nuestros logros?</p>
        </div>
        <NavLink to="/logros" className="card-redirect-button">
          <button class="card-redirect-button">
            Más información
          </button>
        </NavLink>
      </div>

    <div class="card-redirect">
      
      <img src={Admision} alt="Admision" />
        <div class="card-redirect-details">
          <p class="text-title">¿Acaso te gustaría aplicar a nuestra institución?</p>
        </div>
        <NavLink to="/admisión" className="card-redirect-button">
          <button class="card-redirect-button">
            Más información
          </button>
        </NavLink>
      </div>
    </div>

        {/* Flip Card */}

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