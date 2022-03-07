import React from 'react';
import { Display } from './display/Display';
import { Info } from './info/Info';

export function WeapArt(props){
    return (
        <section>
            <Display />
            <Display />
            <Info />
        </section>
    );
};