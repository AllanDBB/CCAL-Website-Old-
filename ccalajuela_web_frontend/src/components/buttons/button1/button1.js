import React from 'react';
import './button1.css'; 

const button1 = () => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Learn More</span>
    </button>
  );
};

export default button1;
