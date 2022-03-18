import React from 'react';
import './Profile.css';
import { Description } from './description/Description';
import { getElement } from '../../../util/images.js';

export function Profile(props) {
    
    const { currentCharacter, characterInfo } = props;
    const images = require('../../../data/image/characters.json');
    const image = images[currentCharacter]["portrait"];
    const element = getElement(characterInfo["element"]);
    console.log(element)

    

    return (
        <section className="profile" id="profile">
            {/* Main Image */}
            <div className="image-container" >
                <img src={image} alt="Character Bottom Half" width="500" height="1000"/>
            </div>
            {/*  Description */}
            <Description 
                characterInfo={characterInfo}
                element={element}
            />
        </section>
    );
};