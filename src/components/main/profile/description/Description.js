import React from 'react';
import './Description.css';

export function Description(props){

    const { characterInfo } = props;

    return (
        <section className="description" id="description">
            <h2>{characterInfo["name"]}</h2>
            <h3>{characterInfo["title"]}</h3>
            <p>{characterInfo["description"]}</p>
            <hr />
            <div>
                {/* Icons */}
                <div>
                    Element
                </div>
                <div>
                    Weapon
                </div>
                <div>
                    Nation
                </div>
            </div>
            <hr />
        </section>
    );
};