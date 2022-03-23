import React from 'react';
import './Description.css';
import mondstadt from './mondstadt-symbol.png';
import liyue from './liyue-symbol.png';
import inazume from './inazuma-symbol.png';

export function Description(props){

    const { element, characterInfo } = props;
    const weapon = characterInfo["weapontype"];
    const region = characterInfo["region"];

    const nationImage = (name) => {
        console.log(name);
        switch(name){
            case 'mondstadt': 
                return mondstadt;
            case 'liyue': 
                return liyue;
            case 'inazuma': 
                return inazume;
            default: 
                return mondstadt;
        }
    }

    return (
        <section className="description" id="description">
            <h2>{characterInfo["name"]}</h2>
            <h3>{characterInfo["title"]}</h3>
            <p>{characterInfo["description"]}</p>
            <hr />
            <div>
                {/* Icons */}
                <img src={element} alt="character element" width="32" height="32"/>
                <div>
                    {weapon}
                </div>
                <img src={nationImage(region.toLowerCase())} alt="character nation"/>
            </div>
            <hr />
        </section>
    );
};