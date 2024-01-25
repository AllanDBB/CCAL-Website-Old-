import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que la ruta al archivo CSS sea correcta
import LogoSvg from '../Logo.svg'; // Asegúrate de que la ruta al logo sea correcta
import Button2 from '../buttons/Button2'; // Asegúrate de que la ruta al botón sea correcta

const Navbar = () => {
  // Estado para manejar la visibilidad del menú en pantallas pequeñas
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Función para cerrar el menú cuando se selecciona un enlace
  const closeMenu = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/" exact onClick={closeMenu}>
          <img src={LogoSvg} alt="CCAL Logo" className="logo" />
        </NavLink>
      </div>

      {/* Botón del menú hamburguesa, visible solo en pantallas pequeñas */}
      <button className="menu-toggle" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        ☰
      </button>

      {/* Contenedor de enlaces, que alterna su visibilidad */}
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
            <NavLink to="/admision" className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              Admisión
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contáctanos" className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              Contáctanos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/iniciar-sesión" className="nav-link" activeClassName="active-link" onClick={closeMenu}>
              <Button2 text="Acceder" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
  