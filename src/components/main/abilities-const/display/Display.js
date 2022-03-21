import React from 'react';

export function Display(props){

    const { abilities, changeCurrentAbility } = props;

    const createAbility = (name) => {
        return (
            <figure key={name}>
                <img src="" alt=""/>
                <figcaption>{name}</figcaption>
            </figure>
        );
    };

    return (
        <div>
            <h2 hidden>Abilities</h2>
            {abilities.map(ability => createAbility(ability["name"]))}
        </div>
    )
}