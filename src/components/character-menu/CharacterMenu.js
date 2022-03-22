import React from 'react';
import './CharacterMenu.css';
import { getElementImage } from '../../util/images';
import { getElement } from '../../util/character';


export function CharacterMenu(props){
    const { characters, changeCurrentCharacter, changeCharacterInfo } = props;

    const handleCharacterChange = (name, event) =>{
        event.preventDefault();
        changeCurrentCharacter(name);
        changeCharacterInfo(require(`../../data/English/characters/${name}.json`))
    };
    

    const characterList = characters.map((character) => {
        return (
            
            <li 
                onClick={(e) => handleCharacterChange(character.toLowerCase().replace(/\s/g, ''), e)}
                key={`${character.toLowerCase().replace(/\s/g, '')}`}>
                <figure>
                    <img src={getElementImage(getElement(character.toLowerCase().replace(/\s/g, '')))} width="64" height="64"/>
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