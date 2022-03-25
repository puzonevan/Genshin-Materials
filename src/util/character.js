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
    let character;
    if(name === "aether" || name === "lumine"){
        character = require(`../data/English/talents/traveleranemo.json`);
    }else{
        character = require(`../data/English/talents/${name}.json`);
    }
    return character[`combat${value}`]
}

export const getPassive = (name, value) => {
    let character;
    if(name === "aether" || name === "lumine"){
        character = require(`../data/English/talents/traveleranemo.json`);
    }else{
        character = require(`../data/English/talents/${name}.json`);
    }
    return character[`passive${value}`]
}

export const getConstellation = (name, value) => {
    let character;
    if(name === "aether" || name === "lumine"){
        character = require(`../data/English/constellations/traveleranemo.json`);
    }else{
        character = require(`../data/English/constellations/${name}.json`);
    }
    return character[`c${value}`]
}

export const getElement = (name) => {
    name = name.toLowerCase().replace(/\s/g, '');
    if(name === "aether" || name === "lumine") return "anemo";
    
    let character = require(`../data/English/characters/${name}.json`);

    return character['element'];
}