import React from 'react';
import './about_us.css';

import AdditionalImage1 from '../../assets/banners/Banner 2.jpg';
import AdditionalImage2 from '../../assets/banners/Banner 8.jpg';

import Funfact from './fun_facts/fun_facts2'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-banner">
        <h1>Conócenos</h1>
        <p>Descubre más sobre nuestra institución, nuestro equipo y la casita.</p>
      </div>

      <div className="section flex-section">
        <div className="text-content">
          <h2>Nuestra Historia</h2>
         
          <p>El Colegio Científico de Costa Rica en Alajuela, fundado en 2006, es una institución preuniversitaria destacada por su excelencia académica. Famoso por participar en competiciones académicas nacionales e internacionales, el colegio enfatiza las áreas STEAM, integrando habilidades blandas y duras para formar estudiantes integrales. Con 370 egresados, su enfoque educativo innovador prepara a los jóvenes para impactar positivamente en la sociedad.</p>
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

{/*

      <div className="text-content-fun-fact">
        <div className="white-section-alone-fun-fact">
            <text>Dato curiso del dia</text>
            <fun-facts-container><Funfact/></fun-facts-container>
        </div>
      </div>
  */}
    </div>
  );
}

export default AboutUs;
