import React from 'react';
import './Display.css';
import { Material } from '../material/Material';

export function Display(props) {

    const { level, name, materials } = props;
    let sortedList = Object.keys(materials).sort();

    const createMaterial = (name, count) => {
        return (
            <li key={`${name}-${count}`}>
                <Material name={name} count={count}/>
            </li>
        );
    };
    
    const materialsList = sortedList.map(name => createMaterial(name, materials[name]));

    return (
        <section className="materials">
            <h2>{name}</h2>
            <ul className="materials-list">
                {materialsList}
            </ul>
        </section>
    )
}