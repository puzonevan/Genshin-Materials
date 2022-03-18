export const getCharacterInfo = (name) => {
    return require(`../data/English/characters/${name}.json`);
}

export const getAscendInfo = (name) =>{
    const character = require(`../data/English/characters/${name}.json`);
    return character["costs"];
}

export const getTalentInfo = (name) => {
    const character = require(`../data/English/talents/${name}.json`);
    return character["costs"];
}

