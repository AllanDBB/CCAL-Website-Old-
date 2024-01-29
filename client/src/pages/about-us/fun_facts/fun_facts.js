import React from 'react';
import './fun_facts.css';

import Logo from '../../../assets/logos/Logo.svg'

const AboutUs = () => {
  return (
    <div class="tooltip-container">
        <span class="tooltip">A nuestras instalaciones, nuestros estudiantes le conocen como la casita :).</span>
        <span class="text">
         <img src={Logo} alt="Imagen Adicional 1" className="section-image" />
        </span>
    </div>
  
  );
}

export default AboutUs;
