const materials = require('../data/url/materials.json');


export const getMaterialLink = (name) => {
    return materials[name.toLowerCase().replace(/\s/g, '').replace(/'/g, '')]["fandom"];
}