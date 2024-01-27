import React from 'react';
import './button.css'

const button = () => {


    return(

        <button class="learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
        </button>
    );
}

export default button;