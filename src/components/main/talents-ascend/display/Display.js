import React from 'react';
import './Display.css';
import { Material } from '../material/Material';

export function Display(props) {

    const { level, name, materials } = props;
    const multiplier = name === "Talents" ? 3 : 1;

    const createMaterial = (name, count) => {
        return (
            <li key={`${name}-${count}`}>
                <Material name={name} count={count}/>
            </li>
        );
    };

    const totals = {};
    for(let key in materials){
        materials[key].forEach(item => {
            let { name, count } = item;
            if(Object.keys(totals).includes(name)){
                totals[name] = totals[name] + (count * multiplier);
            }
            else{
                totals[name] = count * multiplier;
            }
        });
    };
    let sortedKeys = Object.keys(totals).sort();

    const talentList = sortedKeys.map(name => createMaterial(name, totals[name]));

    return (
        <section className="materials">
            <h2>{name}</h2>
            <ul className="materials-list">
                {talentList}
            </ul>
        </section>
    )
}