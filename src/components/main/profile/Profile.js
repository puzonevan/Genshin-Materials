import React from 'react';
import './Profile.css';
import { Description } from './description/Description';

export function Profile(props) {

    const { character, characterInfo } = props;
    const images = require('../../../data/image/characters.json');
    const imageCharacter = images[character];
    

    return (
        <section className="profile" id="profile">
            {/* Main Image */}
            <div className="image-container" >
                <img src={imageCharacter['portrait']} alt="Character Bottom Half" width="500" height="1000"/>
            </div>
            {/*  Description */}
            <Description characterInfo={characterInfo}/>
        </section>
    );
};