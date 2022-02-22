import React from 'react';
import './Header.css'
import { NationMenu } from '../nation-menu/NationMenu';
import { CharacterMenu } from '../character-menu/CharacterMenu';

export function Header(props) {
    

    return (
        <header>
            <h1>Genshin Pages</h1>
            <NationMenu />
            <CharacterMenu />
        </header>
    );
};