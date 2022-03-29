import React from 'react';
import './Header.css';
import { NationMenu } from '../nation-menu/NationMenu';
import { CharacterMenu } from '../character-menu/CharacterMenu';

export function Header(props) {
    const { characterIndex, characters, changeCharacters, 
            changeNation, changeCurrentCharacter, changeCharacterInfo } = props;

    return (
        <header>
            <h1>Genshin Materials</h1>
            <NationMenu 
                characterIndex={characterIndex}
                changeNation={changeNation}
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