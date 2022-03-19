import React from 'react';
import './Menu.css';

export function Menu(props){
    
    const { name, low, high } = props;
    const options = [];
    for(let i = low; i <= high; i++){
        options.push(<td key={`${name}-${i}`}>{i}</td>);
    }

    return (
        <table>
            <tbody>
                <tr>
                    {options}
                </tr>
            </tbody>
        </table>
    )
}