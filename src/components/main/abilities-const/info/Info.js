import React from 'react';

export function Info(props){

    const { currentAbility } = props;

    return (
        <section>
            <h3>{currentAbility["name"]}</h3>
            <hr />
            <p>{currentAbility["info"] || currentAbility["effect"]}</p>
            <video>
                Soon to be video
            </video>
        </section>
    );
}