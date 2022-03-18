import React from 'react';
import './Display.css';
import { Material } from '../material/Material';

export function Display(props) {

    const { talents } = props;

    return (
        <section className="materials">
            <h2>Talents</h2>
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