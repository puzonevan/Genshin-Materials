import React from 'react';
import './Display.css';
import { Material } from '../material/Material';

export function Display(props) {

    // Props 
    //  - name: character name
    //  - materials: materials of character
    const { name, materials } = props;

    /**
     * createMaterial create li element of materials name and count
     * @param {*} name name of material
     * @param {*} count number of material
     * @returns li element
     */
    const createMaterial = (name, count) => {
        return (
            <li key={`${name}-${count}`}>
                <Material name={name} count={count}/>
            </li>
        );
    };
    
    // maps materials to a list of li elements 
    const materialsList = Object.keys(materials).map(name => createMaterial(name, materials[name]));

    return (
        <section className="materials">
            <h2><span>{name}</span></h2>
            <ul className="materials-list">
                {materialsList}
            </ul>
        </section>
    )
}