import React from 'react';
import './Main.css';
import { Profile } from './profile/Profile';
import { TalentsAscend } from './talents-ascend/TalentsAscend';
import { WeapArt } from './weapons-artifacts/WeapArt';
import { AbilitiesConst } from './abilities-const/AbilitiesConst';
import { getTalentInfo, getAscendInfo } from '../../util/character';

export function Main(props) {

    const { currentCharacter, characterInfo } = props;
    const talents = getTalentInfo(currentCharacter);
    const ascension = getAscendInfo(currentCharacter);

    return(
        <main>
            <Profile 
                currentCharacter={currentCharacter} characterInfo={characterInfo}
            />
            <TalentsAscend 
                talents={talents}
                ascension={ascension}
            />
            <WeapArt />
            <AbilitiesConst />
        </main>
    );
};