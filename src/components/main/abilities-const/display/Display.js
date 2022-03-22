import React from 'react';

export function Display(props){

    const { abilities, changeCurrentAbility } = props;

    const createAbility = (ability) => {
        return (
            <figure key={ability["name"]} onClick={() => changeCurrentAbility(ability)}>
                <img src="" alt=""/>
                <figcaption>{ability["name"]}</figcaption>
            </figure>
        );
    };

    return (
        <div>
            <h2 hidden>Abilities</h2>
            {abilities.map(ability => createAbility(ability))}
        </div>
    )
}