import React from 'react';
import './CharacterMenu.css';

export function CharacterMenu(props){

    const { changeCharacter } = props;

    const handleChange = (e) =>{
        console.log(e.target.innerHTML);
        changeCharacter(e.target.innerHTML);
    }

    return (
        <nav>
            <ul className="character-menu" id="character-menu">
                <li onClick={handleChange}>xiangling</li>
                <li>lumine</li>
                <li>Character 3</li>
                <li>Character 4</li>
            </ul>
        </nav>
    );
};