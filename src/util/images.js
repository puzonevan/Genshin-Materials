const elements = require('../data/image/elements.json');
const characters = require('../data/image/characters.json');
const materials = require('../data/image/materials.json');

export const getElementImage = (element) => {
    if(element === "") return "";
    if(element === "None") return "";
    return elements[element.toLowerCase()]["wikia"];
}

export const getCharacterImage = (name) => {
    return characters[name]["portrait"];
}

export const getMaterialImage = (name) => {
    return materials[name.toLowerCase().replace(/\s/g, '').replace(/'/g, '')]["fandom"];
}
