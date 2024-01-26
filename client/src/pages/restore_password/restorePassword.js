import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logos/Logo.svg'

const RestorePassword = () => {

  useEffect(() => {
    document.title = "CCAL - Restaurar";
  }, []);

  const [userData, setUserData] = useState({
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el cambio de contraseña
  };

  return (
    <div className="container-olvido-contrasena">
      <form className="formulario-olvido-contrasena" onSubmit={handleSubmit}>

        <div className='logo-ccal'>
            <img src={Logo} alt="Logo CCAL"/>
        </div>
        <div className="columna-flexible">
          <label className="etiqueta">Nueva contraseña</label>
          <div className="contenedor-input">
            <input
              type="password"
              className="campo-input"
              placeholder="Ingresa tu nueva contraseña"
              name="newPassword"
              value={userData.newPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="columna-flexible">
          <label className="etiqueta">Confirmar nueva contraseña</label>
          <div className="contenedor-input">
            <input
              type="password"
              className="campo-input"
              placeholder="Confirma tu nueva contraseña"
              name="confirmNewPassword"
              value={userData.confirmNewPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="boton-enviar">Cambiar contraseña</button>

      </form>
    </div>
  );
};

export default RestorePassword;
