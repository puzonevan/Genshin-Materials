import React from 'react';
import './Display.css';
import { Material } from '../material/Material';

export function Display(props) {

    const { name, talents } = props;

    const totals = {};
    for(let key in talents){
        talents[key].forEach(item => {
            if(Object.keys(totals).includes(item["name"])){
                totals[item["name"]] = totals[item["name"]] + (item["count"] * 3);
            }
            else{
                totals[item["name"]] = item["count"] * 3;
            }
        });
    }

    return (
        <section className="materials">
            <h2>{name}</h2>
            <div className="materials-list">
                <Material />
                <Material />
                <Material />
                <Material />
                <Material />
                <Material />
                <Material />
                <Material />
                <Material />
            </div>
        </section>
    )
}