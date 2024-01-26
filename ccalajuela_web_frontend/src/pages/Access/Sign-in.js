
// Importación de librerias.
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Sign-in.css'; 
import GoogleLogo from '../assets/Google__G__logo.svg';
import Logo from '../assets/Logo.svg';

const Access = () => {

  useEffect(() => {
    document.title = "CCAL - Iniciar sesión";
  }, []);

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Lógica para manejar el envío de datos
  // };

  return (
    <div className="container-inicio-sesion">
      <form className="formulario-inicio-sesion">

        <div class="logo-ccal2">
          <img src={Logo} alt="Logo CCAL"/>
        </div>
        <div className="columna-flexible">
          <label className="etiqueta">Correo electrónico</label>
          <div className="contenedor-input">
            {/* Icono SVG para Email */}
            {/* Incluye aquí el SVG correspondiente */}
            <input
              type="email"
              className="campo-input"
              placeholder="Ingresa tu correo electrónico"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="columna-flexible">
          <label className="etiqueta">Contraseña</label>
          <div className="contenedor-input">
            {/* Icono SVG para Password */}
            {/* Incluye aquí el SVG correspondiente */}
            <input
              type="password"
              className="campo-input"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="fila-flexible">
          <div className="contenedor-checkbox">
            <input type="checkbox" className="checkbox" />
            <label className="etiqueta">Recordarme</label>
          </div>
          <NavLink to="/olvidé-mi-contraseña">
          <span className="texto-enlace">¿Olvidó su contraseña?</span>
          </NavLink>
        </div>

        <button className="boton-enviar">Iniciar sesión</button>

        <p className="p line">O inicia sesión con:</p>

        <div className="contenedor-boton-social">
          <button className="boton-social google">
            <img src={GoogleLogo} alt="Google_Logo"/>
          </button>
        </div>

        <p className="p">
          ¿Todavía no tienes una cuenta?   
          <NavLink to="/registrarse" className="texto-enlace"> 
             ¡Regístrese!
          </NavLink>
        </p>

      </form>
    </div>
  );
};

export default Access;
