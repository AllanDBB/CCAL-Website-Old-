import React from 'react';
import './history.css';  // Asegúrate de que la ruta del archivo CSS sea correcta
import picture from './1200px-Earth_Western_Hemisphere_transparent_background.png'

const Loader = () => {
  return (
    <div className="loader-history">
      <div className="loader-history-before"></div>
      <div className="loader-history-after">
        <img src={picture} alt="Imagen Rotativa" />
      </div>
    </div>
  );
};

export default Loader;
