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

    useEffect(() => {
        const characters = [];
        characterIndex['categories'][nation].forEach(name => {
            characters.push(characterIndex['namemap'][name]);
        });
        setCharacters(characters);
        console.log(characters);
    }, [nation]);

    const changeNation = (nation) => setNation(nation);

    return (
        <>
            <Header characters={characters} changeNation={changeNation}/>
            <Main />
            <Footer />
        </>
    );
};