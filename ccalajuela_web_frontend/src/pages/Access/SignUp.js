import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css'; 
import GoogleLogo from '../assets/Google__G__logo.svg';
import Logo from '../assets/Logo.svg'

const SignUp = () => {

    useEffect(() => {
        document.title = "CCAL - Registrarse";
      }, []);

    // Estados para manejar los datos del usuario
    const [userData, setUserData] = useState({
        name: '',
        lastnames: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Maneja el cambio en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el envío de datos
    };

    return (
        <div className="container-registro">
            <form className="formulario-registro" onSubmit={handleSubmit}>
                {/* Disposición de doble columna para Nombre y Apellidos */}

                <div className='logo-ccal'>
                    <img src={Logo} alt="Logo CCAL"/>
                </div>
                <div className="contenedor-doble-columna">
                    <div className="columna">
                        <div className="columna-flexible">
                            <label className="etiqueta">Nombre</label>
                            <div className="contenedor-input">
                                <input
                                    type="text"
                                    className="campo-input"
                                    placeholder="Ingresa tu nombre"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="columna">
                        <div className="columna-flexible">
                            <label className="etiqueta">Apellidos</label>
                            <div className="contenedor-input">
                                <input
                                    type="text"
                                    className="campo-input"
                                    placeholder="Ingresa tus apellidos"
                                    name="lastnames"
                                    value={userData.lastnames}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Campo para el Correo Electrónico */}
                <div className="columna-flexible">
                    <label className="etiqueta">Correo electrónico</label>
                    <div className="contenedor-input">
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

                {/* Campo para la Contraseña */}
                <div className="contenedor-doble-columna">
                    <div className="columna-flexible">
                        <label className="etiqueta">Contraseña</label>
                        <div className="contenedor-input">
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

                    {/* Campo para Confirmar la Contraseña */}
                    <div className="columna-flexible">
                        <label className="etiqueta">Confirma tu contraseña</label>
                        <div className="contenedor-input">
                            <input
                                type="password"
                                className="campo-input"
                                placeholder="Confirma tu contraseña"
                                name="confirmPassword"
                                value={userData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                {/* Checkbox para los Términos y Condiciones */}
                <div className="fila-flexible">
                    <div className="contenedor-checkbox">
                        <input type="checkbox" className="checkbox" />
                        <NavLink to="/términos-condiciones" className="texto-enlace"> 
                        Acepto los términos y condiciones.
                        </NavLink>
                    </div>
                </div>

                {/* Botón de envío */}
                <button className="boton-enviar">Registrarse</button>

                {/* Opciones de registro con redes sociales */}
                <p className="p line">O registrate con:</p>
                <div className="contenedor-boton-social">
                    <button className="boton-social google">
                        <img src={GoogleLogo} alt="Google Logo"/>
                    </button>
                </div>

                {/* Enlace para iniciar sesión si ya se tiene cuenta */}
                <p className="p">
                    ¿Ya tienes una cuenta?   
                    <NavLink to="/iniciar-sesión" className="texto-enlace"> 
                        ¡Inicie sesión!
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
