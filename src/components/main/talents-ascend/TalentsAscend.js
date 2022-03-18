import React from 'react';
import './TalentsAscend.css';
import { Display } from './display/Display';
import { Menu } from './menu/Menu';


export function TalentsAscend(props){

    const { talents } = props;

    return (
        <section className="talents-ascend" id="talents-ascend">
            <Display name={"Talents"} talents={talents}/>
            <Menu />
            <Display name={"Ascension"}/>
            <Menu />
            <img src="" alt="img1" />
            <img src="" alt="img2" />
        </section>
    );
};