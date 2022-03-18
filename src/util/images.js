const elements = require('../data/image/elements.json');

export const getElement = (element) => {
    
    if(element == "None") return "";
    return elements[element.toLowerCase()]["wikia"];
}
