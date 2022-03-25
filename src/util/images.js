const elements = require('../data/image/elements.json');
const characters = require('../data/image/characters.json');
const materials = require('../data/image/materials.json');
const bosses = require('../data/image/bosses.json');

export const getElementImage = (element) => {
    if(element === "") return elements["anemo"]["wikia"];
    if(element === "None") return elements["anemo"]["wikia"];
    return elements[element.toLowerCase()]["wikia"];
}

export const getCharacterImage = (name) => {
    return characters[name]["cover1"];
}

export const getMaterialImage = (name) => {
    return materials[name.toLowerCase().replace(/\s/g, '').replace(/'/g, '')]["fandom"];
}

export const getBossImage = (category, name) => {
    return bosses[category][name];
}
