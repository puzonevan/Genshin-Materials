const talentsList = [
    "Insignia", 
    "Mask", 
    "Scroll", 
    "Arrowhead", 
    "Slime", 
    "Nectar",
    "Spectral",
    "Handguard"
]

const bookList = [
    "Teachings of", 
    "Guide to", 
    "Philosophies of"
]

const gemsList = [
    "Sliver", 
    "Fragment",
    "Chunk", 
    "Gemstone"
]



export const sortTalentMaterials = (materials) => {
    
    // Filter books
    const books = {
        ...filterByName(materials, bookList[0]), 
        ...filterByName(materials, bookList[1]),
        ...filterByName(materials, bookList[2])
    };
    // Remove books from materials
    Object.keys(books).forEach(book => {
        delete materials[book];
    });

    // Filter talents
    let talents = {};
    talentsList.forEach(talent => {
        let filter = filterByName(materials, talent);
        if(Object.keys(filter).length > 0){
            talents = filter;
        }
    }); 
    // Remove talents from materials
    Object.keys(talents).forEach(talent => {
        delete materials[talent];
    });

    return {
        ...sortByNumber(materials), 
        ...sortByNumber(books), 
        ...sortByNumber(talents)
    }
}

export const sortAscendMaterials = (materials) => {
    // Filter gems
    const gems = {
        ...filterByName(materials, gemsList[0]), 
        ...filterByName(materials, gemsList[1]),
        ...filterByName(materials, gemsList[2]),
        ...filterByName(materials, gemsList[3])
    }
    // Remove books from materials
    Object.keys(gems).forEach(gem => {
        delete materials[gem];
    });

    // Filter talents
    let talents = {};
    talentsList.forEach(talent => {
        let filter = filterByName(materials, talent);
        if(Object.keys(filter).length > 0){
            talents = filter;
        }
    }); 
    // Remove talents from materials
    Object.keys(talents).forEach(talent => {
        delete materials[talent];
    });

    return {
        ...sortByNumber(materials),
        ...sortByNumber(gems), 
        ...sortByNumber(talents)
    }
}

function filterByName(materials, name){
    let nFilter = {};

    for(const [key, value] of Object.entries(materials)){
        if(key.includes(name)){
            nFilter[key] = value;
        }
    }

    return nFilter;
}

function sortByNumber(materials){
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

let testTalent = {
    "Mora": 4957500,
    "Teachings of Gold": 9,
    "Treasure Hoarder Insignia": 18,
    "Guide to Gold": 63,
    "Silver Raven Insignia": 66,
    "Philosophies of Gold": 114,
    "Golden Raven Insignia": 93,
    "Dvalin's Sigh": 18,
    "Crown of Insight": 3
};

let testAscend = {
    "Mora": 420000,
    "Vajrada Amethyst Sliver": 1,
    "Noctilucous Jade": 168,
    "Treasure Hoarder Insignia": 18,
    "Vajrada Amethyst Fragment": 9,
    "Lightning Prism": 46,
    "Silver Raven Insignia": 30,
    "Vajrada Amethyst Chunk": 9,
    "Golden Raven Insignia": 36,
    "Vajrada Amethyst Gemstone": 6
};

// console.log(findSmallestCount({ 'mora': 5, 'fruit': 8 }));
// console.log(sortMaterials(test));
// console.log(filterByName(test, "Sliver"));
// console.log(filterByName(test, "Insignia"));
// console.log(sortTalentMaterials(testTalent));
// console.log(sortAscendMaterials(testAscend));