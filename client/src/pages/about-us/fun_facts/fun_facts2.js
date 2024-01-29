import React from 'react';
import './fun_facts2.css';

import Logo from '../../../assets/logos/Logo.svg'

const AboutUs = () => {
  return (
    <div class="tooltip-mario-container">
        <div class="box">
            <img id="miImagen" src={Logo} alt="Descripción de la imagen"/>
        </div>
        <div class="mush">
            <text>A nuestras instalaciones, nuestros estudiantes le conocen como la casita :).</text>
        </div>
        
    </div>


  );
}

export default AboutUs;
