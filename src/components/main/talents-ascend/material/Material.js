import React from 'react';
import img from './material-test.png';
import './Material.css';
import { getMaterialImage } from '../../../../util/images';

export function Material(props){

    const { name, count } = props;
    const image = getMaterialImage(name.toLowerCase().replace(/\s/g, '').replace(/'/g, ''));

    return (
       
        <figure className="material-container">
            <img src={image} alt="material" />
            <figcaption><span>x{count}</span></figcaption>
        </figure>
        
    );
};