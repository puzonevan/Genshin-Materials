import React from 'react';
import { Display } from './display/Display';
import { Info } from './info/Info';

export function AbilitiesConst(props){
    return (
        <section>
            <Display />
            <Info />
            <Display />
        </section>
    );
};