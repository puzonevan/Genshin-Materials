import React from 'react';
import { Profile } from './profile/Profile';
import { TalentsAscend } from './talents-ascend/TalentsAscend';
import { WeapArt } from './weapons-artifacts/WeapArt';
import { AbilitiesConst } from './abilities-const/AbilitiesConst';

export function Main(props) {

    return(
        <main>
            <Profile />
            <TalentsAscend />
            <WeapArt />
            <AbilitiesConst />
        </main>
    );
};