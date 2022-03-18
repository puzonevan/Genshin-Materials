import React from 'react';
import './NationMenu.css';

export function NationMenu(props){
    
    const { characterIndex, changeCharacters, changeNation } = props;

    const handleChangeNation = (e, nation) => {
        e.preventDefault();
        changeNation(nation);
        const newCharacters = characterIndex["categories"][nation].map(character => characterIndex["namemap"][character]);
        changeCharacters(newCharacters);
    }

    return (
        <nav className="nation-menu" id="nation-menu">
            <figure>
                <img onClick={(e) => handleChangeNation(e, 'Mondstadt')}/>
                <figcaption onClick={(e) => handleChangeNation(e, 'Mondstadt')}>Mondstadt</figcaption>
            </figure>
            <figure>
                <img onClick={(e) => handleChangeNation(e, 'Liyue')}/>
                <figcaption onClick={(e) => handleChangeNation(e, 'Liyue')}>Liyue</figcaption>
            </figure>
            <figure>
                <img onClick={(e) => handleChangeNation(e, 'Inazuma')}/>
                <figcaption onClick={(e) => handleChangeNation(e, 'Inazuma')}>Inazuma</figcaption>
            </figure>
        </nav>
    );
};