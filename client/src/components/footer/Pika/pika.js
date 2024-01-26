import React, { useState } from 'react';
import './pika.css'; // Asegúrate de tener la ruta correcta al archivo CSS

const Loader = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`loader-pika ${isHovered ? 'show' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="loader-before"></div>
      <div className="loader-after"></div>
    </div>
  );
};

export default Loader;
