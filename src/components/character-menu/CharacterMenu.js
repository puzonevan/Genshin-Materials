import React from 'react';
import './CharacterMenu.css';

export function CharacterMenu(props){
    const { characters } = props;
    const characterList = characters.map((character, i) => <li key={`character-${i}`}>{character}</li>);
    
    return (
        <nav>
            <ul className="character-menu" id="character-menu">
                {characterList}
            </ul>
        </nav>
    );
};