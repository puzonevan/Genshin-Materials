import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

// Data changing happens here 
// Necessary data passed down to Header Main and Footer

export function App(props){
    const [nation, setNation] = useState('liyue');
    const [character, setCharacter] = useState('aether');

    const changeCharacter = (character) => setCharacter(character);

    return (
        <>
            <Header character={character} changeCharacter={changeCharacter}/>
            <Main />
            <Footer />
        </>
    );
};