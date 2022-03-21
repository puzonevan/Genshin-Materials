export const getCharacterInfo = (name) => {
    return require(`../data/English/characters/${name}.json`);
}

export const getAscendCosts = (name) =>{
    const character = require(`../data/English/characters/${name}.json`);
    return character["costs"];
}

export const getTalentCosts = (name) => {
    if(name === "aether" || name === "lumine") return [];
    const character = require(`../data/English/talents/${name}.json`);
    return character["costs"];
}

export const getCombat = (name, value) => {
    const character = require(`../data/English/talents/${name}.json`);
    return character[`combat${value}`]
}

export const getPassive = (name, value) => {
    const character = require(`../data/English/talents/${name}.json`);
    return character[`passive${value}`]
}

export const getConstellation = (name, value) => {
    const character = require(`../data/English/constellations/${name}.json`);
    return character[`constellation${value}`]
}