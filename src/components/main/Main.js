import React from 'react';
import './Main.css';
import { Profile } from './profile/Profile';
import { TalentsAscend } from './talents-ascend/TalentsAscend';
import { WeapArt } from './weapons-artifacts/WeapArt';
import { AbilitiesConst } from './abilities-const/AbilitiesConst';

export function Main(props) {

    const { currentCharacter, characterInfo } = props;

    return(
        <main>
            <Profile 
                currentCharacter={currentCharacter} characterInfo={characterInfo}
            />
            <TalentsAscend />
            <WeapArt />
            <AbilitiesConst />
        </main>
    );
};