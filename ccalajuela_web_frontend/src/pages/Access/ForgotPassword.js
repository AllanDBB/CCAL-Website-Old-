import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './ForgotPassword.css';
import Logo from '../assets/Logo.svg';

const ForgotPassword = () => {

  useEffect(() => {
    document.title = "CCAL - Olvide mi contraseña";
  }, []);

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la solicitud de recuperación de contraseña
  };

  return (
    <div className="container-olvido-contrasena">
      <form className="formulario-olvido-contrasena" onSubmit={handleSubmit}>
        <div className="logo-ccal">
          <img src={Logo} alt="Logo CCAL"/>
        </div>

        <div className="columna-flexible">
          <label className="etiqueta">Correo electrónico</label>
          <div className="contenedor-input">
            <input
              type="email"
              className="campo-input"
              placeholder="Ingresa tu correo electrónico"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="boton-enviar">Enviar confirmación de recuperación</button>

        <p className="p">
          ¿Recordaste tu contraseña?   
          <NavLink to="/iniciar-sesión" className="texto-enlace"> 
             Iniciar sesión
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
