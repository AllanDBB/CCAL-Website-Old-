import React from 'react';
import './About-us.css';
import History from './About-us/History/History';


const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      {/* Sección del Banner Principal */}
      <div className="hero-section">
        <header>
          <h1>Bienvenido a CCAL</h1>
          <p>Somos más que una formula.</p>
          <button>¡Empezar Ahora!</button>
        </header>
      </div>

      
      <div className="bienvenida">
        <h2>Bienvenida a Nuestra Institución</h2>
        <p>Texto introductorio sobre la institución y su misión.</p>
      </div>

      {/* Sección de Historia del Colegio */}
      <div className="historia">
        <h2>Nuestra Historia</h2>
        <History />
        <p>Una breve reseña de los orígenes y hitos importantes del colegio.</p>
      </div>


      <section className="equipo-section">
        <h2>Nuestro Equipo</h2>
        <p>Resumen de nuestro equipo.</p>
      </section>

      <section className="valores-section">
        <h2>Filosofia Educativa</h2>
        <p>Nuestra filosofia educativa.</p>
      </section>

      <section className="instalaciones-section">
        <h2>Instalaciones</h2>
        <p>Breve reseña de nuestras instalaciones.</p>
      </section>



      </div>

  );
};

export default AboutUs;

