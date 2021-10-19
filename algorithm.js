/////////////////////////////////////////////////
// Algorithm
// By:
// Date:
/////////////////////////////////////////////////

import { print_desc } from "./module.js";
import { print_ln } from "./module.js";


var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

print_desc("show monster's name");
console.log(monster.name);

print_desc("show how to access 2nd type")
console.log(monster.types[1]);

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

print_desc("console log names of pokemon with ids > 99");
for(var i=0; i<pokemon.length; i++) {
    if(pokemon[i].id > 99) {
        console.log(pokemon[i].name);
    }
}

print_desc("console log pokemon whos ID divisible by 3");

for(var i=0; i<pokemon.length; i++) {

    if (pokemon[i].id % 3 == 0) {
        console.log(pokemon[i]);
    }

}

print_desc("console log pokemon whom have more than one type");


for(var i=0; i<pokemon.length; i++) {

    if (pokemon[i].types.length > 1) {
        console.log(pokemon[i]);
    }

}

print_desc("console log names of the pokémon whose only type is 'poison'");

for(var i=0; i<pokemon.length; i++) {

    if (pokemon[i].types == "poison") {
        console.log(pokemon[i]);
    }

}

print_desc("console log  first type of all the pokémon whose second type is 'flying'");

for(var i=0; i<pokemon.length; i++) {

    if (pokemon[i].types[1] == "flying") {
        console.log(pokemon[i].name + "'s 1st type is: " + pokemon[i].types[0]);
    }

}

function reverseString (str) {

    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    return newString; 

}

print_desc("console.log the reverse of the names of the pokémon whose only type is 'poison'");

for(var i=0; i<pokemon.length; i++) {

    if (pokemon[i].types == "poison") {
        
        console.log(reverseString(pokemon[i].name));    

    }

}