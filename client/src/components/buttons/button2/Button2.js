import React from 'react';
import './Button2.css';

const Button2 = ({text}) => {
  return (
    <button className="btn2">
        <span className="spn2">{text}</span>
    </button>
  );
}

export default Button2;
