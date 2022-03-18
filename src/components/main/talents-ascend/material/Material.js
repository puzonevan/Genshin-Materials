import React from 'react';
import img from './material-test.png';
import './Material.css';

export function Material(props){

    const { name, count } = props;

    return (
        <figure className="material-container">
            <img src={img} alt="material" />
            <figcaption>{name} <span>x{count}</span></figcaption>
        </figure>
    );
};