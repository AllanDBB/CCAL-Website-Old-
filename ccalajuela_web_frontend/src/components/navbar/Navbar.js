import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que la ruta al archivo CSS sea correcta
import LogoSvg from '../Logo.svg'; // Asegúrate de que la ruta al logo sea correcta
import Button2 from '../buttons/Button2'; // Asegúrate de que la ruta al botón sea correcta

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/">
          <img src={LogoSvg} alt="CCAL Logo" className="logo" />
        </NavLink>
      </div>

      <div className="nav-links-container">
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
          <li className="nav-item">
            <NavLink to="/iniciar-sesión" className="nav-link" activeClassName="active-link">
              <Button2 text="Acceder"/>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
