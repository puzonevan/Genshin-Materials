import React from 'react';
import { useState, useEffect } from 'react';
import './Main.css';
import { Profile } from './profile/Profile';
import { TalentsAscend } from './talents-ascend/TalentsAscend';
import { WeapArt } from './weapons-artifacts/WeapArt';
import { AbilitiesConst } from './abilities-const/AbilitiesConst';

export function Main(props) {

    const { character } = props;
    const characterInfo = require(`../../data/English/characters/${character}.json`)

    return(
        <main>
            <Profile characterInfo={characterInfo}/>
            <TalentsAscend />
            <WeapArt />
            <AbilitiesConst />
        </main>
    );
};