import React from 'react';
import './Profile.css';
import { Description } from './description/Description';
import { getElementImage, getCharacterImage } from '../../../util/images.js';

export function Profile(props) {
    
    const { currentCharacter, characterInfo } = props;
    const image = getCharacterImage(currentCharacter);
    const element = getElementImage(characterInfo["element"]);

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