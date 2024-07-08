import React, {useEffect} from 'react';
import './about_us.css';

import AdditionalImage1 from '../../assets/banners/Banner_2.webp';
import AdditionalImage2 from '../../assets/banners/Banner_8.webp';

const AboutUs = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="about-us-container" id='top'>
      <div className="about-us-banner">
        <h1>CONÓCENOS</h1>
        <p>Descubre más sobre nuestra institución, nuestro equipo y la casita.</p>
      </div>

      <div className="section flex-section">
        <div className="text-content">
          <h2>Nuestra Historia</h2>
         
          <p>El Colegio Científico de Costa Rica en Alajuela, fundado en 2006, es una institución preuniversitaria destacada por su excelencia académica. Famoso por participar en competiciones académicas nacionales e internacionales, el colegio enfatiza las áreas STEAM, integrando habilidades blandas y duras para formar estudiantes integrales. Con +420 egresados, su enfoque educativo innovador prepara a los jóvenes para impactar positivamente en la sociedad.</p>
        </div>
        <img src={AdditionalImage1} alt="Imagen Adicional 1" className="section-image" />
      </div>

      <div className="section flex-section reverse-flex">
        <div className="text-content">
          <h2>Nuestro Equipo</h2>
          <p>Nuestro equipo está conformado por docentes con una destacada habilidad para la enseñanza y un alto grado de preparación académica. Cada miembro del personal posee una excepcional capacidad para transmitir conocimientos, fomentando un ambiente de aprendizaje enriquecedor y estimulante. Estos profesionales altamente cualificados no solo se dedican a la educación, sino que también son inspiración constante para sus alumnos, guiándolos con dedicación y un enfoque pedagógico innovador. Su compromiso con la excelencia educativa se refleja en cada clase, donde la pasión y el conocimiento se combinan para crear una experiencia de aprendizaje única e inolvidable.</p>
        </div>
        <img src={AdditionalImage2} alt="Imagen Adicional 2" className="section-image" />
      </div>

    </div>
  );
}

export default AboutUs;
