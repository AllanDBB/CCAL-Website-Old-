import React from 'react';
import './team.css'; // Asegúrate de tener la ruta correcta al archivo CSS

const Loader = () => {
  return (
    <div className="loader">
      <div className="element" style={{ '--i': '1' }}></div>
      <div className="element" style={{ '--i': '2' }}></div>
      <div className="element" style={{ '--i': '3' }}></div>
      {/* Añade más elementos según sea necesario */}
    </div>
  );
};

export default Loader;
