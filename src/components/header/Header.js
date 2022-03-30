import React from 'react';
import './Header.css';
import { NationMenu } from '../nation-menu/NationMenu';
import { CharacterMenu } from '../character-menu/CharacterMenu';

export function Header(props) {

    const characterIndex = require('../../data/index/characters.json');

    const { characters, changeCharacters, changeCurrentCharacter, changeCharacterInfo } = props;

    return (
        <header>
            <h1>Genshin Materials</h1>
            <NationMenu 
                characterIndex={characterIndex}
                changeCharacters={changeCharacters}
            />
            <CharacterMenu 
                characters={characters} 
                changeCurrentCharacter={changeCurrentCharacter}
                changeCharacterInfo={changeCharacterInfo}
            />
        </header>
    );
};