import React from 'react';
import './admission.css';
import Picture1 from '../../assets/banners/Banner 7.jpeg';
import Button from './buttons/button1';

const Admission = () => {
    return (
        <div className='admission-container'>
            <div className='admission-banner'>
                <h1>Nuestro proceso de admisión</h1>
                <p>Nuestra información para ser parte de nuestra familia</p>
            </div>

            <div className='white-section1'>
                <div className='admissionProcess'>
                    <h2>Requisitos de Admisión:</h2>
                    <p>- Cursar noveno año.</p>
                    <p>- Promedio anual por materia igual o superior a 85 (7mo, 8vo, 9no).</p>
                    <p>- Nota de conducta igual o superior a 90.</p>
                    <p>- No condición de repeticiencia arrastre o convocatoria.</p>
                    <p>- Presentar en tiempo y forma el formulario de admisión.</p>
                    <p>- Aplicar a la PAA.</p>
                </div>
                <div className='admissionPicture1'>
                    <img src={Picture1} alt="Descripción de la imagen" style={{ width: '50vh', height: 'auto' }}/>
                </div>
                <div className='admission-button-container'>
                    <Button />
                </div>
            </div>

            <div className='white-section2'>
                <div className='column1'>
                    <h2>Fechas del proceso 2024-2025</h2>
                    <h3>Inicio proceso admisión:</h3>
                    <p>29 de Julio del 2024 | Se empieza a comunicar sobre el proceso</p>
                    <h3>Fecha de aplicación de la PAA</h3>
                    <p>4 de Octubre del 2024 | Se estará realizado la prueba PAA</p>
                </div>
                <div className='column2'>
                    <h2>Documentos importantes</h2>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1OFwVVde8MKE7NIIcFwDOrkF-I3J4Q_Y5/view" target='_blank'  rel="noopener noreferrer" download>Instrucción proceso admisión</a></li>
                        <li><a href="https://drive.google.com/file/d/1M49vowcRjEG8sMvUcA0wT9FTsQnd9ar-/view" target='_blank'  rel="noopener noreferrer" download>Solicitud de admisión</a></li>
                        <li><a href="https://drive.google.com/file/d/1GHOGoMPbmyegpGFqKWUKdlT-ip9nEyKR/view" target='_blank'  rel="noopener noreferrer" download>Folleto de práctica</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Admission;