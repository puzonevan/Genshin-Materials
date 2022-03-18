import React from 'react';
import './Description.css';

export function Description(props){

    const { element, characterInfo } = props;
    const weapon = characterInfo["weapontype"];
    const region = characterInfo["region"]

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
                <div>
                    {region}
                </div>
            </div>
            <hr />
        </section>
    );
};