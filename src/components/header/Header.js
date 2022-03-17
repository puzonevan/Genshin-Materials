import React from 'react';
import './Header.css';
import { NationMenu } from '../nation-menu/NationMenu';
import { CharacterMenu } from '../character-menu/CharacterMenu';

export function Header(props) {
    const { character, changeCharacter } = props;

    return (
        <header>
            <h1>{character}</h1>
            <NationMenu />
            <CharacterMenu changeCharacter={changeCharacter}/>
        </header>
    );
};