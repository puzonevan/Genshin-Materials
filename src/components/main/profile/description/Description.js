import React from 'react';
import './Description.css';
import mondstadt from './mondstadt-symbol.png';
import liyue from './liyue-symbol.png';
import inazume from './inazuma-symbol.png';
import sword from './Icon_Sword.png';
import bow from './Icon_Bow.png';
import catalyst from './Icon_Catalyst.png';
import claymore from './Icon_Claymore.png';
import polearm from './Icon_Polearm.png';


export function Description(props){

    const { element, characterInfo } = props;
    const weapon = characterInfo["weapontype"];
    const region = characterInfo["region"];

    const nationImage = (name) => {
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

    const weaponImage = (name) => {
        switch(name.toLowerCase()){
            case 'sword': 
                return sword;
            case 'bow': 
                return bow;
            case 'claymore': 
                return claymore;
            case 'catalyst': 
                return catalyst;
            case 'polearm': 
                return polearm;
            default: 
                return sword;
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
                <img src={element} alt="character element" width="52" height="52"/>
                <img src={weaponImage(weapon.toLowerCase())} alt="character weapon" width="64" height="64"/>
                <img src={nationImage(region.toLowerCase())} alt="character nation" width="64" height="64"/>
            </div>
            <hr />
        </section>
    );
};