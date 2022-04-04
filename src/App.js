import React from 'react';
import { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

export function App(props){

    // State: list of characters for menu
    const [characters, setCharacters] = useState(['Aether', 'Lumine']);
    // State: current character displayed
    const [currentCharacter, setCurrentCharacter] = useState('aether');
    // State: current characters information
    const [characterInfo, setCharacterInfo] = useState(require(`./data/English/characters/${currentCharacter}.json`))

    // State Setters
    const changeCharacters = (characterList) => setCharacters(characterList);
    const changeCurrentCharacter = (character) => setCurrentCharacter(character);
    const changeCharacterInfo = (info) => setCharacterInfo(info);

    return (
        <>
            <Header 
                characters={characters} 
                changeCharacters={changeCharacters}
                changeCurrentCharacter={changeCurrentCharacter}
                changeCharacterInfo={changeCharacterInfo}
            />
            <Main 
                nation={characterInfo["region"]}
                currentCharacter={currentCharacter}
                characterInfo={characterInfo}
            />
        </>
    );
};