import React from 'react';
import './filosofia.css'; // Asegúrate de ajustar el nombre del archivo de estilos

const Loader = () => {
  return (
    <div className="loader-filo">
      <svg className="loader-filo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#000" strokeWidth="2" />
        <path
          d="M50 2
          a 48 48 0 0 1 0 96
          a 48 48 0 0 1 0 -96"
          fill="none"
          stroke="#000"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeDasharray="0 1 359 0"
        />
      </svg>
    </div>
  );
};

export default Loader;
