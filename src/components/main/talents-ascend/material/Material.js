import React from 'react';
import img from './material-test.png';
import './Material.css';

export function Material(props){

    return (
        <figure class="material-container">
            <img src={img} alt="material" />
            <figcaption>Slime Condensate <span>x64</span></figcaption>
        </figure>
    );
};