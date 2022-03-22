import React from 'react';
import { useState, useEffect } from 'react';
import './TalentsAscend.css';
import { Display } from './display/Display';
import { Menu } from './menu/Menu';


export function TalentsAscend(props){

    const { talents, ascension } = props;
    const [talentLevel, setTalentLevel] = useState(10);
    const [ascendLevel, setAscendLevel] = useState(6);

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
        return totals;
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
        return totals;
    }

    useEffect(() => {
        console.log("Menu Change");
    });

    const changeTalentLevel = (level) => setTalentLevel(level);
    const changeAscendLevel = (level) => setAscendLevel(level);

    return (
        <section className="talents-ascend" id="talents-ascend">
            <img src="" alt="img1" />
            <img src="" alt="img2" />
            <div class="display-menu">
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