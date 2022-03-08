import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
// Data changing happens here 
// Necessary data passed down to Header Main and Footer

export function App(props){

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};