import React from 'react';
import './footer.css'; 

import Facebook from '../../assets/logos/icons8-facebook-nuevo.svg';
import Instagram from '../../assets/logos/icons8-instagram.svg';
import GitHub from '../../assets/logos/Google__G__logo.svg';
import Pika from './Pika/pika';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <Pika/>
          <p>© 2024 | Colegio Científico de Alajuela</p>
        </div>
        <div className="footer-section social-media">
          <div className="social-icons">
            <a href="http://facebook.com/ccalajuela" className="footer-link">
              <img src={Facebook} alt='Logo de Facebook' className="social-icon"/>
            </a>
            <a href="http://instagram.com/ccalajuela" className="footer-link">
              <img src={Instagram} alt='Logo de Instagram' className="social-icon"/>
            </a>
            <a href="http://github.com/sagebox_" className="footer-link">
              <img src={GitHub} alt='Logo de GitHub' className="social-icon"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
