import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; 
import LogoSvg from '../../assets/logos/Logo.svg'; 
import Button2 from '../buttons/button2/Button2'; 

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeMenu = () => {
    setIsNavExpanded(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <nav className={`navbar ${showNavbar ? '' : 'hide-navbar'}`}>
      <div className="logo-container">
        <NavLink to="/" exact onClick={closeMenu}>
          <img src={LogoSvg} alt="CCAL Logo" className="logo" />
        </NavLink>
      </div>

      <button className="menu-toggle" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        ☰
      </button>

      <div className={`nav-links-container ${isNavExpanded ? "expanded" : ""}`}>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/conócenos" className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              Conócenos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/logros" className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              Logros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admisión" className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              Admisión
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contáctanos" className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              Contáctanos
            </NavLink>
          </li>
          {/*
          <li className="nav-item">
            <NavLink to="/iniciar-sesión" className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              <Button2 text="Acceder" />
            </NavLink>
          </li>
          */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
  