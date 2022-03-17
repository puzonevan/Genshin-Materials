import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

// Data changing happens here 
// Necessary data passed down to Header Main and Footer

export function App(props){
    const [nation, setNation] = useState('Liyue');
    const [characters, setCharacters] = useState(require('./data/index/characters.json')['categories'][nation]);
    
    useEffect(() => {
        setCharacters(require('./data/index/characters.json')['categories'][nation]);
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