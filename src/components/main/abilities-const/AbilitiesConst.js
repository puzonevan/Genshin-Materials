import React from 'react';
import { useState, useEffect } from 'react';
import { Display } from './display/Display';
import { Info } from './info/Info';
import { getCombat, getConstellation, getPassive } from '../../../util/character';

export function AbilitiesConst(props){

    const { currentCharacter } = props;

    let abilities = [
        getCombat(currentCharacter, 1), 
        getCombat(currentCharacter, 2), 
        getCombat(currentCharacter, 3), 
        getPassive(currentCharacter, 1),
        getPassive(currentCharacter, 2)
    ];

    let constellations = [
        getConstellation(currentCharacter, 1), 
        getConstellation(currentCharacter, 2), 
        getConstellation(currentCharacter, 3), 
        getConstellation(currentCharacter, 4), 
        getConstellation(currentCharacter, 5), 
        getConstellation(currentCharacter, 6), 
    ];

    const [ currentAbility, setCurrentAbility ] = useState(abilities[0]);

    useEffect(() => {
        console.log(currentAbility);
    })

    const changeCurrentAbility = (name) => setCurrentAbility(name);

    return (
        <section>
            <Display 
                abilities={abilities}
                changeCurrentAbility={changeCurrentAbility}
            />
            <Info 
                currentAbility={currentAbility}
            />
            <Display 
                abilities={constellations}
                changeCurrentAbility={changeCurrentAbility}
            />
        </section>
    );
};