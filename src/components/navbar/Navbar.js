import React from 'react';
import { NavLink } from 'react-router-dom';  // Cambiado a NavLink
import './Navbar.css';  // Cambiado el nombre del archivo para seguir buenas prácticas
import LogoSvg from '../Logo.svg';

// Componente Navbar
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Contenedor del logo */}
      <div className="logo-container">
        <NavLink to="/">
          <img src={LogoSvg} alt="CCAL Logo" className="logo" />
        </NavLink>
      </div>

      {/* Contenedor de los enlaces de navegación */}
      <div className="nav-links-container">
        <ul className="nav-links">
          {/* Enlace a la página de Inicio */}
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active-link">
              Inicio
            </NavLink>
          </li>
          {/* Enlace a la página de Conócenos */}
          <li className="nav-item">
            <NavLink to="/conocenos" className="nav-link" activeClassName="active-link">
              Conócenos
            </NavLink>
          </li>
          {/* Enlace a la página de Logros */}
          <li className="nav-item">
            <NavLink to="/logros" className="nav-link" activeClassName="active-link">
              Logros
            </NavLink>
          </li>
          {/* Enlace a la página de Admisión */}
          <li className="nav-item">
            <NavLink to="/admision" className="nav-link" activeClassName="active-link">
              Admisión
            </NavLink>
          </li>
          {/* Enlace a la página de Contáctanos */}
          <li className="nav-item">
            <NavLink to="/contacto" className="nav-link" activeClassName="active-link">
              Contáctanos
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Botón de menú (para dispositivos móviles) */}
      <button className="menu-toggle">
        <span className="menu-icon">☰</span>
      </button>
    </nav>
  );
};

export default Navbar;
