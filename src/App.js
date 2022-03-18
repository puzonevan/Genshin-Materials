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
    const [characters, setCharacters] = useState([]);
    const [currentCharacter, setCurrentCharacter] = useState('aether');

    useEffect(() => {
        const characters = [];
        characterIndex['categories'][nation].forEach(name => {
            characters.push(characterIndex['namemap'][name]);
        });
        setCharacters(characters);
        console.log(characters);
    }, [nation]);

    useEffect(() => {
        console.log(currentCharacter);
    }, [currentCharacter]);


    const changeNation = (nation) => setNation(nation);
    const changeCurrentCharacter = (character) => setCurrentCharacter(character);

    return (
        <>
            <Header 
                characters={characters} 
                changeNation={changeNation}
                changeCurrentCharacter={changeCurrentCharacter}
            />
            <Main character={currentCharacter}/>
            <Footer />
        </>
    );
};