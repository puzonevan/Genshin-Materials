import React from 'react';
import { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

// Data changing happens here 
// Necessary data passed down to Header Main and Footer

export function App(props){

    const [characters, setCharacters] = useState(['Aether', 'Lumine']);
    const [currentCharacter, setCurrentCharacter] = useState('aether');
    const[characterInfo, setCharacterInfo] = useState(require(`./data/English/characters/${currentCharacter}.json`))

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