import React from 'react';
import './admission.css'
import Picture1 from '../../assets/banners/Banner\ 7.jpeg'

const Admission = () => {


    return(

        <div className='admission-container'>
            <div className='admission-banner'>
                <h1>
                    Nuestro proceso de admisión
                </h1>
            </div>

            <div className='withe_section1'>
                <div className='admissionProcess'>
                    <h2>Requisitos de Admisión:</h2>
                    <p>-Cursar noveno año.</p>
                    <p>-Promedio anual por materia igual o superior a 85 (7mo, 8vo, 9no).</p>
                    <p>-nota de conducta igual o superior a 90.</p>
                    <p>-No condición de repeticiencia arrastre o convocatoria.</p>
                    <p>-presentar en tiempo y forma el formulario de admisión.</p>
                    <p>-Aplicar a la PAA.</p>
                    
                </div>
                <div className='admissionPicture1'><img src={Picture1} alt="Descripción de la imagen" style={{ width: '50vh', height: 'auto' }}/></div>
            </div>

            
            
        </div>
    );
}

export default Admission;