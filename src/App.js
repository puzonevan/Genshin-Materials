import React from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';


export function App(props){

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};