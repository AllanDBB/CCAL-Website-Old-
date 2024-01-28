import React from 'react';
import './button1.css'

const button = () => {


    return(

        <button class="learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Aplica ahora</span>
        </button>
    );
}

export default button;