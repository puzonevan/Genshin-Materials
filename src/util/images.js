const elements = require('../data/image/elements.json');
const characters = require('../data/image/characters.json');
const materials = require('../data/image/materials.json');

export const getElement = (element) => {
    if(element === "None") return "";
    return elements[element.toLowerCase()]["wikia"];
}

export const getCharacterImage = (name) => {
    return characters[name]["portrait"];
}

export const getMaterial = (name) => {
    return materials[name]["redirect"];
}