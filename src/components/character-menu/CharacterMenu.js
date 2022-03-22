import React from 'react';
import './CharacterMenu.css';
import { getElementImage } from '../../util/images';
import { getElement } from '../../util/character';


export function CharacterMenu(props){
    const { characters, changeCurrentCharacter, changeCharacterInfo } = props;

    const handleCharacterChange = (name, event) =>{
        name = name.toLowerCase().replace(/\s/g, '');
        event.preventDefault();
        changeCurrentCharacter(name);
        changeCharacterInfo(require(`../../data/English/characters/${name}.json`))
    };

    const characterList = characters.map((character) => {
        return (
            
            <li 
                onClick={(e) => handleCharacterChange(character, e)}
                key={character}>
                <figure>
                    <img src={getElementImage(getElement(character))} width="32" height="32" alt="element"/>
                    <figcaption>{character}</figcaption>
                </figure>
            </li>
        );
    });
    
    return (
        <nav>
            <ul className="character-menu" id="character-menu">
                {characterList}
            </ul>
        </nav>
    );
};