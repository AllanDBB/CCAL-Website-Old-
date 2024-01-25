// MiCard.js
import React from 'react';
import './Pablo.css'; // Asegúrate de tener la ruta correcta al archivo CSS
import pfp from './pictures/Pablo.jpg'

const MiCard = () => {
  return (
    <div className="card">
      <div className="border"></div>
      <div className="bottom-text">Profesor</div>
      <div className="content">
        <div className="logo">
          <div className="logo1">
          <img src={pfp} alt="Logo1" className="logo1-img" />  
            
          </div>
          <div className="logo2">Pablo Blanco vargas</div>
          <div className="trail"></div>
        </div>
        <div className="logo-bottom-text">Muy buena y apasionada persona por enseñar física</div>
      </div>
    </div>
  );
};

export default MiCard;
