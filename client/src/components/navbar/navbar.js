import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './navbar.css';
import LogoSvg from '../../assets/logos/Logo.svg';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/conócenos", label: "Conócenos" },
    { to: "/logros", label: "Logros" },
    { to: "/admisión", label: "Admisión" },
    { to: "/contáctanos", label: "Contáctanos" }
  ];

  return (
    <nav className={classNames('navbar', { 'hide-navbar': !showNavbar })}>
      <div className="logo-container">
        <NavLink to="/" onClick={() => setIsNavExpanded(false)}>
          <img src={LogoSvg} alt="Logo" className="logo" />
        </NavLink>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        ☰
      </button>

      <div className={classNames('nav-links-container', { 'expanded': isNavExpanded })}>
        <ul className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="nav-item">
              <NavLink
                to={to}
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setIsNavExpanded(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
