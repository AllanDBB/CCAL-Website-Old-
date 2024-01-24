import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import LogoSvg from '../Logo.svg';
import Button2 from '../buttons/Button2';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/">
          <img src={LogoSvg} alt="CCAL Logo" className="logo" />
        </NavLink>
      </div>

      <div className={`nav-links-container ${isMenuOpen ? 'show-menu' : ''}`}>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active-link">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/conócenos" className="nav-link" activeClassName="active-link">
              Conócenos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/logros" className="nav-link" activeClassName="active-link">
              Logros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admision" className="nav-link" activeClassName="active-link">
              Admisión
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacto" className="nav-link" activeClassName="active-link">
              Contáctanos
            </NavLink>
          </li>
        </ul>
        <div className="nav-item">
          <NavLink to="/iniciar-sesión" className="nav-link" activeClassName="active-link">
          <Button2 text="Acceder"/>
          </NavLink>
        </div>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon">☰</span>
      </button>
    </nav>
    
  );
};

export default Navbar;