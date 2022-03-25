export const sortMaterials = (materials) => {
    let nMaterials = {};

    while(Object.keys(materials).length > 0){
        console.log(materials);
        let smallestKey = findSmallestCount(materials);
        nMaterials[smallestKey] = materials[smallestKey];
        delete materials[smallestKey];
    }

    return nMaterials;
}

function findSmallestCount(materials){
    let currentSmallest = Infinity;
    let currentSmallKey = "";
    for(const [key, value] of Object.entries(materials)){
        if(value < currentSmallest){
            currentSmallest = value;
            currentSmallKey = key;
        }
    }
    return currentSmallKey;
}

// let test = {
//     "Mora": 420000,
//     "Vajrada Amethyst Sliver": 1,
//     "Noctilucous Jade": 168,
//     "Treasure Hoarder Insignia": 18,
//     "Vajrada Amethyst Fragment": 9,
//     "Lightning Prism": 46,
//     "Silver Raven Insignia": 30,
//     "Vajrada Amethyst Chunk": 9,
//     "Golden Raven Insignia": 36,
//     "Vajrada Amethyst Gemstone": 6
// };

// console.log(findSmallestCount({ 'mora': 5, 'fruit': 8 }));
// console.log(sortMaterials(test));