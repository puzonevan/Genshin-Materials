import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

// Data changing happens here 
// Necessary data passed down to Header Main and Footer

export function App(props){

    const characterIndex = require('./data/index/characters.json');

    const [nation, setNation] = useState('Liyue');
    const [characters, setCharacters] = useState(['Aether', 'Lumine']);
    const [currentCharacter, setCurrentCharacter] = useState('aether');

    const[characterInfo, setCharacterInfo] = useState(require(`./data/English/characters/${currentCharacter}.json`))

    useEffect(() => {
        console.log(`Nation: ${nation}`);
        console.log(currentCharacter);
        console.log(characterInfo);
        console.log(characters);
    })

    const changeNation = (nation) => setNation(nation);
    const changeCharacters = (characterList) => setCharacters(characterList);
    const changeCurrentCharacter = (character) => setCurrentCharacter(character);
    const changeCharacterInfo = (info) => setCharacterInfo(info);


    return (
        <>
            <Header 
                characterIndex={characterIndex}
                characters={characters} 
                changeCharacters={changeCharacters}
                changeNation={changeNation}
                changeCurrentCharacter={changeCurrentCharacter}
                changeCharacterInfo={changeCharacterInfo}
            />
            <Main character={currentCharacter}/>
            <Footer />
        </>
    );
};