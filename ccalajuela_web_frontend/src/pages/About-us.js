import React from 'react';
import './About-us.css';
import History from './About-us/History/History';
import Testimonio from './About-us/Testimonios/testimonios';
import Team from './About-us/Equipo/Team';
import Pika from './Pika/pika'


const AboutUs = () => {
  return (
    <div className="aboutUs-container">
                                                                                                    {/* Sección del Banner Principal */}

      <div className="fondo-pagina1">
        
        
        <div className="hero">
          <header>
            <h1>Conócenos</h1>
          </header>
        </div>
        
        <div className="bienvenidaTitle">
          <h2>Bienvenida a Nuestra Institución</h2>
        </div>

        <div className="bienvenidaBody">
          <p>Texto introductorio sobre la institución y su misión.</p>
        </div>


      </div>
                                                                                                         {/* Sección de Datos */}

      <div className="fondo-pagina2">
        {/* Sección de Historia del Colegio */}
        <div className="historiaTitulo">
          <h2>Nuestra Historia</h2>
          <History />
        </div>

        <div className="historiaBody">
          <p>Una breve reseña de los orígenes y hitos importantes del colegio.</p>
        </div>

        <div className="equipoTitle">
          <h2>Nuestro Equipo</h2>
          <Team />
        </div>

        <div className="equipoBody">
          <p>Resumen de nuestro equipo.</p>
        </div>

        <div className="valoresTitle">
          <h2>Filosofia Educativa</h2>
        </div>

        <div className="valoresTitle">
          <p>Nuestra filosofia educativa.</p>
        </div>

        <div className="instalacionesTitle">
          <h2>Instalaciones</h2>
        </div>

        <div className="instalacionesBody">
          <p>Breve reseña de nuestras instalaciones.</p>
        </div>


        <div className="compromisoTitle">
          <h2>Compromiso</h2>
        </div>

        <div className="compromisoBody">
          <p>Breve reseña de nuestros compromisos.</p>
        </div>

        <div className="testimoniosTitle">
          <h2>Testimonios</h2>
          <Testimonio />
        </div>

        <div className="testimoniosBody">
          <p>Breve reseña de nuestros testimonios.</p>
        </div>

        <div className="contacto">
          <h2>contacto</h2>
          <p>Breve reseña de nuestros contactos.</p>

          <div className="pika">
          <Pika />
        </div>
        </div>    


      </div>





      </div>

  );
};

export default AboutUs;

