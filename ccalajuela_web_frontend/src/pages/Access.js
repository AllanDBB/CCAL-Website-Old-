import React, { useState } from 'react';
import './Access.css';

const Access = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isRegisterView, setIsRegisterView] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegisterView) {
      // Llamar a la API para registrar al usuario con los datos en userData
    } else {
      // Llamar a la API para iniciar sesión con los datos en userData
    }
  };

  const toggleView = () => {
    setIsRegisterView(!isRegisterView);
  };

  return (
    <div className="access-container">
      <h2>{isRegisterView ? 'Registro' : 'Inicio de Sesión'}</h2>
      <div className="access-menu">
        <button onClick={toggleView}>
          {isRegisterView ? 'Ir a Inicio de Sesión' : 'Ir a Registro'}
        </button>
      </div>
      <form onSubmit={handleSubmit} className="access-form">
        {isRegisterView && (
          <div className="input-container">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingresa tu nombre de usuario"
              value={userData.username}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="input-container">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="access-button">
          {isRegisterView ? 'Registrarse' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
};

export default Access;
