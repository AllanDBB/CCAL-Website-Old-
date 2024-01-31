import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import Banner1 from '../../assets/banners/Banner 1.jpg'
import Banner2 from '../../assets/banners/Banner 2.jpg'
import Admision from '../../assets/plus/Admision.png'
import Trophy from '../../assets/plus/Trophy-home.png'
import Conocenos from '../../assets/plus/Conocenos.png'
import Logo from '../../assets/logos/Logo.svg'
import Bcard from '../../assets/plus/Bcard.png'
// import Blue from '../../assets/plus/blue.png'
// import Yellow from '../../assets/plus/yellow.png'

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
      {/* <div className="sidebar" style={{ backgroundImage: `url(${Blue})`, left: '2vw' }}></div>
      <div className="sidebar" style={{ backgroundImage: `url(${Yellow})`, left: '4vw' }}></div>
      <div className="sidebar" style={{ backgroundImage: `url(${Blue})`, left: '6vw' }}></div> */}

      {/* Hero Section */}
      <div className="home-container">

        <header className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenidos al Colegio Científico de Alajuela</h1>
            <p className="hero-description">
              Institución líder en la educación media | Somos más que una fórmula
            </p>
            <button className="HomeB" onClick={scrollToContent}>¡Empezar Ahora!</button>
          </div>
        </header>
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