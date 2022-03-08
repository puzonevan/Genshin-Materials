import React from 'react';
import './Description.css';

export function Description(props){
    return (
        <section className="description" id="description">
            <h2>Character Name</h2>
            <p>Character Description</p>
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
        </section>
    );
};