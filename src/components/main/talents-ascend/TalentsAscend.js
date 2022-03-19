import React from 'react';
import { useState, useEffect } from 'react';
import './TalentsAscend.css';
import { Display } from './display/Display';
import { Menu } from './menu/Menu';


export function TalentsAscend(props){

    const { talents, ascension } = props;
    const [talentLevel, setTalentLevel] = useState(2);
    const [ascendLevel, setAscendLevel] = useState(1);

    const changeTalentLevel = (level) => setTalentLevel(level);
    const changeAscendLevel = (level) => setAscendLevel(level);

    return (
        <section className="talents-ascend" id="talents-ascend">
            <Display name={"Talents"} materials={talents}/>
            <Menu name={"talent"} low={2} high={10}/>
            <Display name={"Ascension"} materials={ascension}/>
            <Menu name={"ascend"} low={1} high={6}/>
            <img src="" alt="img1" />
            <img src="" alt="img2" />
        </section>
    );
};