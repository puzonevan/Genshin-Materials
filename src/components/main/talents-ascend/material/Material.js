import React from 'react';
import './Material.css';
import { getMaterialImage, getMaterialAlt } from '../../../../util/images';
import { getMaterialLink } from '../../../../util/url';


export function Material(props){

    // Props 
    //  - name: material name
    //  - count: count of material
    const { name, count } = props;

    // get image source 
    const image = getMaterialImage(name.toLowerCase().replace(/\s/g, '').replace(/'/g, ''));
    // get image alternate
    const alt = getMaterialAlt(name);
    // get image link
    const link = getMaterialLink(name);

    return (
       
        <figure className="material-container">
            <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt={alt} /></a>
            <figcaption>x{count}</figcaption>
        </figure>
        
    );
};