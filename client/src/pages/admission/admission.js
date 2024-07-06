import React, {useEffect} from 'react';
import './admission.css';
import Picture1 from '../../assets/plus/informative_banner.webp';
import Picture2 from '../../assets/banners/banner_12.webp';

const Admission = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return (
        <div className='admission-container' id='top'>
            <div className='admission-banner'>
                <h1>NUESTRO PROCESO DE ADMISIÓN</h1>
                <p>Nuestra información para ser parte de nuestra familia</p>
            </div>

            <div className='white-section1'>
                <div className='admissionPicture2'>
                    <img src={Picture2} alt="Descripción de la imagen" style={{ width: 'auto', height: 'auto' }}/>
                </div>
            </div>

            <div className='white-section2'>
                <div className='column1'>
                    <h2>¡Proceso de admisión 2024-2025!</h2>
                    <h3>Actualmente el proceso de admisión se encuentra abierto, inscripción:</h3>
                    <p>Si deseas ser parte de la generación 2025, completa los datos en el formulario inicial para que el próximo 29 de julio recibas en tu correo el formulario de inscripción. (Solo llenar una vez)
</p> <a href="https://forms.gle/Zrh3eLMRBNeabJ3S9">Clic para redireccionar</a>
                    <h3>Fecha de aplicación de la PAA</h3>
                    <p>4 de Octubre del 2024 | Se estará realizado la prueba PAA</p>
                </div>
                <div className='column2'>
                    <h2>Documentos importantes</h2>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1OFwVVde8MKE7NIIcFwDOrkF-I3J4Q_Y5/view" target='_blank'  rel="noopener noreferrer" download>Instrucción proceso admisión</a></li>
                        <li><a href="https://drive.google.com/file/d/1M49vowcRjEG8sMvUcA0wT9FTsQnd9ar-/view" target='_blank'  rel="noopener noreferrer" download>Solicitud de admisión</a></li>
                    </ul>
                    <h2> Folletos de práctica: </h2>
                        <ul>
                        <li><a href="https://drive.google.com/file/d/1GHOGoMPbmyegpGFqKWUKdlT-ip9nEyKR/view" target='_blank'  rel="noopener noreferrer" download>Folleto de práctica (2023-2024)</a></li>
                        <li><a href="https://drive.google.com/file/d/1Z8egtyUjuu9srFSNVfWHlZH_GfPCznTY/view" target='_blank' rel="noopener noreferrer" download>Folleto de práctica (2024-2025)</a></li>
                        </ul>

                </div>
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
                    <img src={Picture1} alt="Descripción de la imagen" style={{ width: '70vh', height: 'auto' }}/>
                </div>

            </div>


        </div>
    );
}

export default Admission;