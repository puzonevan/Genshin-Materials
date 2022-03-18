import React from 'react';
import './CharacterMenu.css';

export function CharacterMenu(props){
    const { characters, changeCurrentCharacter, changeCharacterInfo } = props;

    const handleCharacterChange = (name, event) =>{
        event.preventDefault();
        changeCurrentCharacter(name);
        changeCharacterInfo(require(`../../data/English/characters/${name}.json`))
    };

    const characterList = characters.map((character) => {
        return <li 
            onClick={(e) => handleCharacterChange(character.toLowerCase().replace(/\s/g, ''), e)}
            key={`${character.toLowerCase().replace(/\s/g, '')}`}>
                {character}
        </li>;
    });
    
    return (
        <nav>
            <ul className="character-menu" id="character-menu">
                {characterList}
            </ul>
        </nav>
    );
};