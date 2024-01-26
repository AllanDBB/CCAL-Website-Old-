import React, { useEffect }  from 'react';
import './About-us.css';
import History from './About-us/History/History';
import Testimonio from './About-us/Testimonios/testimonios';
import Filo from './About-us/Filosofía/filosofía'





const AboutUs = () => {

  useEffect(() => {
    
    document.title = "CCAL - Conócenos";
  }, []);

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
          <title1>
          <h2>Nuestra Historia</h2>
          </title1>
          <History />
        </div>

        <div className="historiaBody">
          <div className='hisoriaTextBox1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

      

        <div className="equipoTitle">
          <h2>Nuestro Equipo</h2>
        </div>

        <div className="equipoBody">
          <p>Resumen de nuestro equipo.</p>
        </div>

        <div className="valoresTitle">
          <h2>Filosofia Educativa</h2>
          <Filo/>
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

         


      </div>

      



      </div>

  );
};

export default AboutUs;

