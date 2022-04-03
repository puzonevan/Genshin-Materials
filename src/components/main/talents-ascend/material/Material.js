import React from 'react';
import './Material.css';
import { getMaterialImage, getMaterialAlt } from '../../../../util/images';
import { getMaterialLink } from '../../../../util/url';


export function Material(props){

    const { name, count } = props;
    const image = getMaterialImage(name.toLowerCase().replace(/\s/g, '').replace(/'/g, ''));
    const alt = getMaterialAlt(name);
    const link = getMaterialLink(name);

    return (
       
        <figure className="material-container">
            <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt={alt} /></a>
            <figcaption>x{count}</figcaption>
        </figure>
        
    );
};