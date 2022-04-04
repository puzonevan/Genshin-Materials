import React from 'react';
import './Menu.css';

export function Menu(props){
    
    // Props 
    //  - name: either talent or ascend
    //  - low: lowest value of menu 
    //  - high: highest value of menu 
    //  - changeLevel: change the current level state 
    const { name, low, high, changeLevel } = props;

    // td list of options for creating menu
    const options = [];
    for(let i = low; i <= high; i++){
        options.push(<td onClick={() => changeLevel(i)} key={`${name}-${i}`}>{i}</td>);
    }

    return (
        <table className="menu">
            <tbody>
                <tr>
                    {options}
                </tr>
            </tbody>
        </table>
    )
}