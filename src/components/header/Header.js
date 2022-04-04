import React from 'react';
import './Header.css';
import { NationMenu } from '../nation-menu/NationMenu';
import { CharacterMenu } from '../character-menu/CharacterMenu';

export function Header(props) {

    // Props
    //  - characters: list of characters
    //  - changeCharacters: change list of characters 
    //  - changeCurrentCharacter: change current character
    //  - changeCharacterInfo: change current character info
    const { characters, changeCharacters, changeCurrentCharacter, changeCharacterInfo } = props;

    // Index of characters
    const characterIndex = require('../../data/index/characters.json');



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