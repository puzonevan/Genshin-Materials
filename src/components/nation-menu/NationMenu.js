import React from 'react';
import './NationMenu.css';

export function NationMenu(props){
    const { changeNation } = props;
    
    const handleNation = (nation) =>{
        changeNation(nation)
    }

    return (
        <nav className="nation-menu" id="nation-menu">
            <figure>
                <img onClick={() => changeNation('Mondstadt')}/>
                <figcaption onClick={() => changeNation('Mondstadt')}>Mondstadt</figcaption>
            </figure>
            <figure>
                <img onClick={() => changeNation('Liyue')}/>
                <figcaption onClick={() => changeNation('Liyue')}>Liyue</figcaption>
            </figure>
            <figure>
                <img onClick={() => changeNation('Inazuma')}/>
                <figcaption onClick={() => changeNation('Inazuma')}>Inazuma</figcaption>
            </figure>
        </nav>
    );
};