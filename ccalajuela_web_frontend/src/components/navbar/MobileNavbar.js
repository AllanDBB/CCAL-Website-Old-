import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNavbar.css'; // Asegúrate de que la ruta al archivo CSS sea correcta
import LogoSvg from '../Logo.svg'; // Asegúrate de que la ruta al logo sea correcta

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-logo-container">
        <NavLink to="/">
          <img src={LogoSvg} alt="CCAL Logo" className="mobile-logo" />
        </NavLink>
      </div>

      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        <span className="mobile-menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
      </button>

      <div className={`mobile-nav-links ${isMenuOpen ? 'mobile-show-menu' : ''}`}>
        <ul>
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <NavLink to="/" exact className="mobile-nav-link" activeClassName="mobile-active-link">
              Inicio
            </NavLink>
          </li>
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <NavLink to="/conócenos" className="mobile-nav-link" activeClassName="mobile-active-link">
              Conócenos
            </NavLink>
          </li>
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <NavLink to="/logros" className="mobile-nav-link" activeClassName="mobile-active-link">
              Logros
            </NavLink>
          </li>
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <NavLink to="/admision" className="mobile-nav-link" activeClassName="mobile-active-link">
              Admisión
            </NavLink>
          </li>
          <li className="mobile-nav-item" onClick={toggleMenu}>
            <NavLink to="/contacto" className="mobile-nav-link" activeClassName="mobile-active-link">
              Contáctanos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
