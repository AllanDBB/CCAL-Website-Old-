import React from 'react';
import './about_us.css';
import History from './history/history';
import Testimonio from './testimony/testimony';
import Team from './team/team'

import HistoryPicture from '../../assets/banners/Banner\ 5.jpeg'


const AboutUs = () => {
  return (
    <div className="aboutUs-container">

      <div className="fondo-pagina1">
        
        
        <div className="hero">
          <header>
            <h1>Conócenos</h1>
          </header>
        </div>
        
        <div className="bienvenidaTitle">
          <text>Bienvenida a Nuestra Institución</text>
        </div>

        <div className="bienvenidaBody">
          <text>Texto introductorio sobre la institución y su misión.</text>
        </div>


      </div>
      <div className="fondo-pagina2">
        {/* Sección de Historia del Colegioo */}




          

          <div className="equipo">
            <div className='equipoPicture'>
              <img src={HistoryPicture} alt="Descripción de la imagen" style={{ width: '47.25vh', height: 'auto' }}/>
            </div>
            <div className="equipoStructure">
              <div className="equipoTitle">
                <div className="title2">Nuestro Equipo</div>
              </div>

              <div className="equipoBody">
                <text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </text>
                <element><Team/></element>
              </div>

            </div>
            
          </div>

          <div className="historia">
            <div className="historiaPicture"><img src={HistoryPicture} alt="Descripción de la imagen" style={{ width: '30vh', height: 'auto' }}/></div>

            <div className='historiaText'>
              <div className="historiaTitulo">
                  <div className="title1">Nuestra Historia</div>
                  
              </div>

              
              <div className="historiaBody">
              <element><History/></element>
                <text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </text>
                
              </div>
            
            </div>
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

