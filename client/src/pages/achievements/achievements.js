// Achievements.js

import React from "react";

const Achievements = () => {
    return (
        <div className="achievements-page-container">
            <div className="achievements-banner">
                <h1>Logros y Reconocimientos</h1>
                <p>Descubre nuestras destacadas contribuciones y logros.</p>
            </div>

            <div className="achievements-content">
                <div className="achievement">
                    <h2>Primer Lugar en la Competencia Nacional de Ciencias</h2>
                    <p>¡Celebramos nuestro éxito al obtener el primer lugar en la competencia nacional de ciencias!</p>
                </div>

                <div className="achievement">
                    <h2>Reconocimiento por Innovación Educativa</h2>
                    <p>Hemos sido reconocidos por nuestra destacada contribución a la innovación educativa en el país.</p>
                </div>

                {/* Agrega más logros según sea necesario */}
            </div>
        </div>
    );
}

export default Achievements;
