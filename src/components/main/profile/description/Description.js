import React from 'react';
import './Description.css';

export function Description(props){

    const { characterInfo } = props;

    const element = characterInfo["element"];
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
                <div>
                    {element}
                </div>
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