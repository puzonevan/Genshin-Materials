import React from 'react';
import './Display.css';
import { Material } from '../material/Material';

export function Display(props) {

    const { name, materials } = props;

    const createMaterial = (name, count) => {
        return (
            <li key={`${name}-${count}`}>
                <Material name={name} count={count}/>
            </li>
        );
    };
    
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