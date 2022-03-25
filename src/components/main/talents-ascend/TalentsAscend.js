import React from 'react';
import { useState, useEffect } from 'react';
import './TalentsAscend.css';
import { Display } from './display/Display';
import { Menu } from './menu/Menu';
import { getBossImage } from '../../../util/images';
import { sortAscendMaterials, sortTalentMaterials } from '../../../util/materials';

import mondstadtBackground from './mondstadt-materials.png';
import liyueBackground from './liyue-materials.png';
import inazumaBackground from './inazuma-materials.png';

export function TalentsAscend(props){

    const { nation, talents, ascension } = props;
    const [talentLevel, setTalentLevel] = useState(10);
    const [ascendLevel, setAscendLevel] = useState(6);

    const normalBoss = getBossImage("normal", "primogeovishap");
    const weeklyBoss = getBossImage("weekly", "dvalin");

    let background = { backgroundImage: `url(${liyueBackground})`};

    switch(nation.toLowerCase()){
        case "mondstadt": 
            background = { backgroundImage: `url(${mondstadtBackground})`};
            break;
        case "liyue": 
            background = { backgroundImage: `url(${liyueBackground})`};
            break;
        case "inazuma": 
            background = { backgroundImage: `url(${inazumaBackground})`};
            break;
        default: 
            background = { backgroundImage: `url(${liyueBackground})`};
            break;
    }

    const getTalentMaterials = () => {
        if(Object.keys(talents).length === 0) return {};
        const totals = {};
        for(let i = 0; i < talentLevel - 1; i++){
            let level = Object.keys(talents)[i]
            const itemSet = talents[level];

            itemSet.forEach(item => {
                let { name, count } = item;
                if(Object.keys(totals).includes(name)){
                    totals[name] = totals[name] + (count * 3);
                }
                else{
                    totals[name] = count * 3;
                }
            });
        }
        return sortTalentMaterials(totals);
    }

    const getAscensionMaterials = () => {
        if(Object.keys(ascension).length === 0) return {};
        const totals = {};
        for(let i = 0; i < ascendLevel; i++){
            let level = Object.keys(ascension)[i]
            const itemSet = ascension[level];

            itemSet.forEach(item => {
                let { name, count } = item;
                if(Object.keys(totals).includes(name)){
                    totals[name] = totals[name] + count;
                }
                else{
                    totals[name] = count;
                }
            });
        }
        return sortAscendMaterials(totals);
    }

    useEffect(() => {
        console.log("Menu Change");
    });

    const changeTalentLevel = (level) => setTalentLevel(level);
    const changeAscendLevel = (level) => setAscendLevel(level);

    return (
        <section className="talents-ascend" id="talents-ascend" style={background}>
            <img id="normal-boss" src="" alt="normal boss" />
            <img id="weekly-boss" src="" alt="weekly boss" width="800" height="600"/>
            <div className="display-menu">
                <Display 
                    name={"Talents"} 
                    materials={getTalentMaterials()}
                />
                <Menu 
                    name={"talent"} 
                    low={2} high={10}
                    changeLevel={changeTalentLevel}
                />

                <Display 
                    name={"Ascension"} 
                    materials={getAscensionMaterials()}
                />
                <Menu 
                    name={"ascend"} 
                    low={1} high={6}
                    changeLevel={changeAscendLevel}
                />
            </div>
        </section>
    );
};