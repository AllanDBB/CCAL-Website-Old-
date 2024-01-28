import React, {useEffect} from 'react';
import './home.css';
import Banner1 from '../../assets/banners/Banner 1.jpg'
import Banner2 from '../../assets/banners/Banner 2.jpg'
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
            <button className="cta-button" onClick={scrollToContent}>¡Empezar Ahora!</button>
          </div>
        </header>
      </div>

        <div className="scroll-snap-card-container">
          {/* Paragraph next to the scroll card */}
          <div className="scroll-card-paragraph">
            <p>
            Antes de continuar, nos encantaría invitarte a conocer más sobre nosotros a través de nuestras redes sociales. En Instagram, Facebook y otras plataformas, compartimos momentos especiales, anuncios importantes y capturamos la esencia de nuestra comunidad. 
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
      <div class="card-redirect-details">
        <p class="text-title">¿Quieres saber más sobre nosotros?</p>
        <p class="text-body">Poner icono representativo</p>
      </div>
      <button class="card-redirect-button">Más información</button>
    </div>

    <div class="card-redirect">
      <div class="card-redirect-details">
        <p class="text-title">¿Te interesaría saber sobre nuestros logros?</p>
        <p class="text-body">Poner icono representativo</p>
      </div>
      <button class="card-redirect-button">Más información</button>
    </div>

    <div class="card-redirect">
      <div class="card-redirect-details">
        <p class="text-title">¿Acaso te gustaría aplicar a nuestra institución?</p>
        <p class="text-body">Poner icono representativo</p>
      </div>
      <button class="card-redirect-button">Más información</button>
    </div>
  </div>

        {/* Flip Card */}

        <div className="flip-card-text-container">
        <div className="flip-card-text">
    <p>¿Interesado en visitar el colegio o ponerte en contacto con nosotros? Descubre más sobre nuestra institución, programas educativos y oportunidades únicas que ofrecemos. ¡Estamos aquí para ayudarte a dar el siguiente paso en tu viaje educativo!</p>
</div>
  <div className="Flip-card">
    {/* Tu código de Flip Card existente aquí */}
  </div>
</div>

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