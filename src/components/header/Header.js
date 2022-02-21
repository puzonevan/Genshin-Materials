import React, {useState} from 'react';
import { CharacterMenu } from '../character-menu/CharacterMenu';
import { NationMenu } from '../nation-menu/NationMenu';

export function Header(props) {
    return (
        <header>
            <h1>Genshin Pages</h1>
            <NationMenu />
            <CharacterMenu />
        </header>
    );
}