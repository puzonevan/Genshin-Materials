import React from 'react';
import './CharacterMenu.css';

export function CharacterMenu(props){
    const { characters, changeCurrentCharacter } = props;

    const handleCharacterChange = (name) =>{
        changeCurrentCharacter(name);
    };

    const characterList = characters.map((character) => {
        return <li 
            onClick={() => handleCharacterChange(character.toLowerCase().replace(/\s/g, ''))}
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