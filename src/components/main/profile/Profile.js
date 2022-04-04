import React from 'react';
import './Profile.css';
import { Description } from './description/Description';
import { getElementImage, getCharacterImage } from '../../../util/images.js';

import mondstadtBackground from './mondstadt-main.png';
import liyueBackground from './liyue-main.png';
import inazumaBackground from './inazuma-main.png';

export function Profile(props) {
    
    // Props
    //  - nation: current nation 
    //  - currentCharacter: current character 
    //  - characterInfo: info of current character
    const { nation, currentCharacter, characterInfo } = props;
    
    // get cover image of current character
    const image = getCharacterImage(currentCharacter);
    // get element of current character
    const element = getElementImage(characterInfo["element"]);

    // set background based on current nation 
    let background = { backgroundImage: `url(${liyueBackground})`};
    switch(nation.toLowerCase()){
        case "mondstadt": 
            background = { backgroundImage: `url(${mondstadtBackground})`};
            break;
        case "liyue": 
            background = { backgroundImage: `url(${liyueBackground})`};
            break;
        case "inazuma": 
            background = { backgroundImage: `url(${inazumaBackground})`};
            break;
        default: 
            background = { backgroundImage: `url(${liyueBackground})`};
            break;
    }
    
    return (
        <section className="profile" id="profile" style={background}>
            {/* Cover Image */}
            <div className="image-container" >
                <img src={image} alt="Character Bottom Half"/>
            </div>
            {/*  Description */}
            <Description 
                characterInfo={characterInfo}
                element={element}
            />
        </section>
    );
};