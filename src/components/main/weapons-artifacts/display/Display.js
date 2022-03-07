import React from 'react';
import { Item } from '../item/Item';

export function Display(props){
    return (
        <div>
            <h2>Weapons</h2>
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}