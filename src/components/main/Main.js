import React from 'react';
import './Main.css';
import { Profile } from './profile/Profile';
import { TalentsAscend } from './talents-ascend/TalentsAscend';
import { AbilitiesConst } from './abilities-const/AbilitiesConst';
import { getTalentCosts, getAscendCosts } from '../../util/character';

export function Main(props) {

    const { nation, currentCharacter, characterInfo } = props;
    const talents = getTalentCosts(currentCharacter);
    const ascension = getAscendCosts(currentCharacter);

    return(
        <main>
            <Profile 
                nation={nation}
                currentCharacter={currentCharacter} 
                characterInfo={characterInfo}
            />
            <TalentsAscend 
                nation={nation}
                talents={talents}
                ascension={ascension}
            />
            <AbilitiesConst 
                currentCharacter={currentCharacter}
            />
        </main>
    );
};