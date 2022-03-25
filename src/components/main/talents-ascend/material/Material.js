import React from 'react';
import img from './material-test.png';
import './Material.css';
import { getMaterialImage, getMaterialAlt } from '../../../../util/images';


export function Material(props){

    const { name, count } = props;
    const image = getMaterialImage(name.toLowerCase().replace(/\s/g, '').replace(/'/g, ''));
    const alt = getMaterialAlt(name);

    return (
       
        <figure className="material-container">
            <img src={image} alt={alt} />
            <figcaption><span>x{count}</span></figcaption>
        </figure>
        
    );
};