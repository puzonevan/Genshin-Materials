import React from 'react';
import './NationMenu.css';
import mondstadt from './mondstadt-symbol.png';
import liyue from './liyue-symbol.png';
import inazuma from './inazuma-symbol.png';

export function NationMenu(props){


    // Props
    //  - characterIndex: json object of characters and categories
    //  - changeCharacters: change list of characters
    const { characterIndex, changeCharacters } = props;

    /**
     * handleChangeNation - get characters from nation and change the state
     * @param {*} e event 
     * @param {*} nation name of nation clicked on 
     */
    const handleChangeNation = (e, nation) => {
        e.preventDefault();
        // Acquire the new set of characters from the appropriate nation
        const newCharacters = characterIndex["categories"][nation].map(character => characterIndex["namemap"][character]);
        changeCharacters(newCharacters);
    }

    return (
        <nav className="nation-menu" id="nation-menu">
            <figure>
                <img onClick={(e) => handleChangeNation(e, 'Mondstadt')} src={mondstadt} alt="Mondstadt logo"/>
                <figcaption onClick={(e) => handleChangeNation(e, 'Mondstadt')}>Mondstadt</figcaption>
            </figure>
            <figure>
                <img onClick={(e) => handleChangeNation(e, 'Liyue')} src={liyue} alt="Liyue logo"/>
                <figcaption onClick={(e) => handleChangeNation(e, 'Liyue')}>Liyue</figcaption>
            </figure>
            <figure>
                <img onClick={(e) => handleChangeNation(e, 'Inazuma')} src={inazuma} alt="Inazuma logo"/>
                <figcaption onClick={(e) => handleChangeNation(e, 'Inazuma')}>Inazuma</figcaption>
            </figure>
        </nav>
    );
};