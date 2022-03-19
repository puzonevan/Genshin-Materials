import React from 'react';
import './Display.css';
import { Material } from '../material/Material';

export function Display(props) {

    const { name, materials } = props;
    const multiplier = name === "Talents" ? 3 : 1;

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

    const talentList = Object.keys(totals).map(name => <li key={`${name}-${totals[name]}`}><Material name={name} count={totals[name]}/></li>)

    return (
        <section className="materials">
            <h2>{name}</h2>
            <ul className="materials-list">
                {talentList}
            </ul>
        </section>
    )
}