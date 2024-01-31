import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './signUp.css'; 
import axios from 'axios';
import Logo from '../../assets/logos/Logo.svg'
import { GoogleLogin } from '@react-oauth/google';
// import Google from '../../components/google/sign-up';

const SignUp = () => {

    const [termsChecked, setTermsChecked] = useState(false);

    const handleTermsCheckboxChange = (e) =>{
        setTermsChecked(e.target.checked);
    }

    useEffect(() => {
        document.title = "CCAL - Registrarse";
      }, []);

    const [userData, setUserData] = useState({
        username: '',
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
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!termsChecked) {
            alert('Debes aceptar los términos y condiciones.');
            return;
          }

        try{
            const response = await axios.post('http://localhost:3001/register',{

                username: userData.username,
                lastnames: userData.lastnames,
                email: userData.email,
                password: userData.password,
                confirmPassword: userData.confirmPassword

            });

            console.log(response.data);

        } catch (error){

            console.log('Hubo un error al registrar al usuario', error.response.data)
        }
    };
    const handleGoogleSubmit = async (token) => {

        if (!termsChecked) {
            alert('Debes aceptar los términos y condiciones.');
            return;
          }
        console.log("Before try");
        try{
            console.log("Inside try");
            const response = await axios.post('http://localhost:3001/registerGoogle',{

                tokenGoogle: token

            });

            console.log(response.data);

        } catch (error){

            console.log('Hubo un error al registrar al usuario', error.response.data)
        }
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
                                    name="username"
                                    value={userData.username}
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
                        <input 
                        type="checkbox" 
                        className="checkbox" 
                        checked={termsChecked}
                        onChange={handleTermsCheckboxChange}
                        />
                        <NavLink to="/términos-condiciones" className="texto-enlace"> 
                        Acepto los términos y condiciones.
                        </NavLink>
                    </div>
                </div>

                {/* Botón de envío */}
                <button className="boton-enviar">Registrarse</button>

                {/* Opciones de registro con redes sociales */}
                <p className="p line">O registrate con:</p>

            <div className='contenedor-boton-social'>
               <GoogleLogin className='boton-social google'
                   onSuccess={credentialResponse => {
                        handleGoogleSubmit(credentialResponse.credential);
                        console.log('Datos: ',credentialResponse.credential);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />                
            </div>
                {/* 
                    <div className="contenedor-boton-social">
                        <button className="boton-social google">
                            <img src={GoogleLogo} alt="Google Logo"/>
                        </button>
                    </div>
                */}

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
