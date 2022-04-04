import React from 'react';
import './CharacterMenu.css';
import { getElementImage } from '../../util/images';
import { getElement } from '../../util/character';


export function CharacterMenu(props){


    // Props
    //  - characters: current list of characters 
    //  - changeCurrentCharacter: changes current character displayed 
    //  - changeCharacterInfo: changes info if current character changed
    const { characters, changeCurrentCharacter, changeCharacterInfo } = props;

    // li elements based on list of characters
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
    
    /**
     * handleCharacterChange - changes current character and info state
     * @param {*} name name of character
     * @param {*} event event 
     */
    const handleCharacterChange = (name, event) =>{
        // make sure name is all lowercase with no spaces between
        name = name.toLowerCase().replace(/\s/g, '');
        event.preventDefault();
        // state changes: current character and info 
        changeCurrentCharacter(name);
        changeCharacterInfo(require(`../../data/English/characters/${name}.json`));
    };

    
    
    return (
        <nav>
            <ul className="character-menu" id="character-menu">
                {characterList}
            </ul>
        </nav>
    );
};