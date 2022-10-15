//data we have from generation pokedex API call: uncapitalized name, dex # as entry_number, api url.
//need function that assigns, for each generation pokedex - 
//data we need to add from api: types, hm moves. eventually location and work out version exclusivity but that can be V2.
//build function(s) that:
//get types for pokemon
//assign sprite, name, removes pokemon_species array

// capitalise type function
/* 
function updateObject() {
    for (let i = 0; i < generation1Pokemon.length; i++) {
        let capitalisedType = (generation1Pokemon[i].types[0].type.name.charAt(0).toUpperCase()) + (generation1Pokemon[i].types[0].type.name.slice(1));
        generation1Pokemon[i].types[0].type.name = capitalisedType;
        console.log(capitalisedType)
        try {
        if (typeof generation1Pokemon[i].types[1].type.name !== undefined) {
            let capitalisedType2 = (generation1Pokemon[i].types[1].type.name.charAt(0).toUpperCase()) + (generation1Pokemon[i].types[0].type.name.slice(1));
            generation1Pokemon[i].types[1].type.name = capitalisedType2;
            console.log(capitalisedType2)
        }
        } catch(err) {
            // just to stop an error going to the console when no second type exists
        };
    };
};
*/

async function updatePokedexInfo() {
    for (let i = 0; i < rseDexGen3.length; i++) {
        let pokemonName = rseDexGen3[i].name
        let apiString = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
        let data = await fetch(apiString);
        let jsonData = await data.json();
        let natDexID = jsonData.id
        rseDexGen3[i].name = pokemonName;
        rseDexGen3[i].national_dex_id = natDexID;
        rseDexGen3[i].types = jsonData.types;
        rseDexGen3[i].sprite = `images/sprites/pokemon/versions/generation-iii/emerald/${natDexID}.png`
        delete rseDexGen3[i].pokemon_species
    };
    console.log(rseDexGen3)
};

//use this function once when setting up new generation to add in the HMs for that generation to each pokemon 
async function setHMSlots() {
    for (let i = 0; i < rseDexGen3.length; i++) {
        console.log(rseDexGen3[i])
        rseDexGen3[i].hms = [
            {
                'name': 'cut',
                'can_learn': false
            },
            {
                'name': 'fly',
                'can_learn': false
            },
            {
                'name': 'surf',
                'can_learn': false
            },
            {
                'name': 'strength',
                'can_learn': false
            },
            {
                'name': 'flash',
                'can_learn': false
            },
            {
                'name': 'rock smash',
                'can_learn': false
            },
            {
                'name': 'waterfall',
                'can_learn': false
            },
            {
                'name': 'dive',
                'can_learn': false
            }
        ];
    }
    console.log(rseDexGen3)
};

// use this function to complete hm data for a specific HM. Should set up HM array first with previous function.
async function hmData() {
    let data = await fetch('https://pokeapi.co/api/v2/move/flash/');
    let jsonData = await data.json();
    for (let i = 0; i < rbyDexGen1.length; i++) {
        let name = rbyDexGen1[i].name;
        for (let j = 0; j < jsonData.learned_by_pokemon.length; j++) {
            if (jsonData.learned_by_pokemon[j].name === name) {
                console.log(name)
                rbyDexGen1[i].hms[4].can_learn = true;
                break;
            } else {
                rbyDexGen1[i].hms[4].can_learn = false;
            }
        }
    }
    console.log(rbyDexGen1);
};

//done so far: data imported, hms assigned, hmData function ran for all hms and results checked against pokedb along with types
let rbyDexGen1 = [
    {
        "entry_number": 1,
        "name": "bulbasaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 1
    },
    {
        "entry_number": 2,
        "name": "ivysaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/2.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 2
    },
    {
        "entry_number": 3,
        "name": "venusaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/3.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 3
    },
    {
        "entry_number": 4,
        "name": "charmander",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/4.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 4
    },
    {
        "entry_number": 5,
        "name": "charmeleon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/5.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 5
    },
    {
        "entry_number": 6,
        "name": "charizard",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/6.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 6
    },
    {
        "entry_number": 7,
        "name": "squirtle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/7.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 7
    },
    {
        "entry_number": 8,
        "name": "wartortle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/8.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 8
    },
    {
        "entry_number": 9,
        "name": "blastoise",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/9.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 9
    },
    {
        "entry_number": 10,
        "name": "caterpie",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/10.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 10
    },
    {
        "entry_number": 11,
        "name": "metapod",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/11.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 11
    },
    {
        "entry_number": 12,
        "name": "butterfree",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/12.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 12
    },
    {
        "entry_number": 13,
        "name": "weedle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/13.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 13
    },
    {
        "entry_number": 14,
        "name": "kakuna",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/14.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 14
    },
    {
        "entry_number": 15,
        "name": "beedrill",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/15.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 15
    },
    {
        "entry_number": 16,
        "name": "pidgey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/16.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 16
    },
    {
        "entry_number": 17,
        "name": "pidgeotto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/17.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 17
    },
    {
        "entry_number": 18,
        "name": "pidgeot",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/18.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 18
    },
    {
        "entry_number": 19,
        "name": "rattata",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/19.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 19
    },
    {
        "entry_number": 20,
        "name": "raticate",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/20.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 20
    },
    {
        "entry_number": 21,
        "name": "spearow",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/21.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 21
    },
    {
        "entry_number": 22,
        "name": "fearow",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/22.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 22
    },
    {
        "entry_number": 23,
        "name": "ekans",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/23.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 23
    },
    {
        "entry_number": 24,
        "name": "arbok",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/24.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 24
    },
    {
        "entry_number": 25,
        "name": "pikachu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 25
    },
    {
        "entry_number": 26,
        "name": "raichu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/26.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 26
    },
    {
        "entry_number": 27,
        "name": "sandshrew",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/27.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 27
    },
    {
        "entry_number": 28,
        "name": "sandslash",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/28.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 28
    },
    {
        "entry_number": 29,
        "name": "nidoran-f",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/29.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 29
    },
    {
        "entry_number": 30,
        "name": "nidorina",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/30.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 30
    },
    {
        "entry_number": 31,
        "name": "nidoqueen",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/31.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 31
    },
    {
        "entry_number": 32,
        "name": "nidoran-m",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/32.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 32
    },
    {
        "entry_number": 33,
        "name": "nidorino",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/33.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 33
    },
    {
        "entry_number": 34,
        "name": "nidoking",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/34.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 34
    },
    {
        "entry_number": 35,
        "name": "clefairy",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/35.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 35
    },
    {
        "entry_number": 36,
        "name": "clefable",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/36.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 36
    },
    {
        "entry_number": 37,
        "name": "vulpix",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/37.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 37
    },
    {
        "entry_number": 38,
        "name": "ninetales",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/38.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 38
    },
    {
        "entry_number": 39,
        "name": "jigglypuff",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/39.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 39
    },
    {
        "entry_number": 40,
        "name": "wigglytuff",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/40.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 40
    },
    {
        "entry_number": 41,
        "name": "zubat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/41.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 41
    },
    {
        "entry_number": 42,
        "name": "golbat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/42.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 42
    },
    {
        "entry_number": 43,
        "name": "oddish",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/43.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 43
    },
    {
        "entry_number": 44,
        "name": "gloom",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/44.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 44
    },
    {
        "entry_number": 45,
        "name": "vileplume",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/45.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 45
    },
    {
        "entry_number": 46,
        "name": "paras",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/46.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 46
    },
    {
        "entry_number": 47,
        "name": "parasect",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/47.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 47
    },
    {
        "entry_number": 48,
        "name": "venonat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/48.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 48
    },
    {
        "entry_number": 49,
        "name": "venomoth",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/49.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 49
    },
    {
        "entry_number": 50,
        "name": "diglett",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/50.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 50
    },
    {
        "entry_number": 51,
        "name": "dugtrio",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/51.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 51
    },
    {
        "entry_number": 52,
        "name": "meowth",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/52.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 52
    },
    {
        "entry_number": 53,
        "name": "persian",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/53.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 53
    },
    {
        "entry_number": 54,
        "name": "psyduck",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/54.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 54
    },
    {
        "entry_number": 55,
        "name": "golduck",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/55.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 55
    },
    {
        "entry_number": 56,
        "name": "mankey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/56.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 56
    },
    {
        "entry_number": 57,
        "name": "primeape",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/57.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 57
    },
    {
        "entry_number": 58,
        "name": "growlithe",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/58.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 58
    },
    {
        "entry_number": 59,
        "name": "arcanine",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/59.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 59
    },
    {
        "entry_number": 60,
        "name": "poliwag",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/60.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 60
    },
    {
        "entry_number": 61,
        "name": "poliwhirl",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/61.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 61
    },
    {
        "entry_number": 62,
        "name": "poliwrath",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/62.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 62
    },
    {
        "entry_number": 63,
        "name": "abra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/63.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 63
    },
    {
        "entry_number": 64,
        "name": "kadabra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/64.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 64
    },
    {
        "entry_number": 65,
        "name": "alakazam",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/65.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 65
    },
    {
        "entry_number": 66,
        "name": "machop",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/66.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 66
    },
    {
        "entry_number": 67,
        "name": "machoke",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/67.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 67
    },
    {
        "entry_number": 68,
        "name": "machamp",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/68.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 68
    },
    {
        "entry_number": 69,
        "name": "bellsprout",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/69.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 69
    },
    {
        "entry_number": 70,
        "name": "weepinbell",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/70.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 70
    },
    {
        "entry_number": 71,
        "name": "victreebel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/71.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 71
    },
    {
        "entry_number": 72,
        "name": "tentacool",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/72.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 72
    },
    {
        "entry_number": 73,
        "name": "tentacruel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/73.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 73
    },
    {
        "entry_number": 74,
        "name": "geodude",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/74.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 74
    },
    {
        "entry_number": 75,
        "name": "graveler",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/75.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 75
    },
    {
        "entry_number": 76,
        "name": "golem",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/76.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 76
    },
    {
        "entry_number": 77,
        "name": "ponyta",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/77.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 77
    },
    {
        "entry_number": 78,
        "name": "rapidash",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/78.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 78
    },
    {
        "entry_number": 79,
        "name": "slowpoke",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/79.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 79
    },
    {
        "entry_number": 80,
        "name": "slowbro",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/80.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 80
    },
    {
        "entry_number": 81,
        "name": "magnemite",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/81.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 81
    },
    {
        "entry_number": 82,
        "name": "magneton",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/82.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 82
    },
    {
        "entry_number": 83,
        "name": "farfetchd",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/83.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 83
    },
    {
        "entry_number": 84,
        "name": "doduo",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/84.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 84
    },
    {
        "entry_number": 85,
        "name": "dodrio",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/85.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 85
    },
    {
        "entry_number": 86,
        "name": "seel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/86.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 86
    },
    {
        "entry_number": 87,
        "name": "dewgong",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/87.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 87
    },
    {
        "entry_number": 88,
        "name": "grimer",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/88.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 88
    },
    {
        "entry_number": 89,
        "name": "muk",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/89.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 89
    },
    {
        "entry_number": 90,
        "name": "shellder",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/90.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 90
    },
    {
        "entry_number": 91,
        "name": "cloyster",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/91.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 91
    },
    {
        "entry_number": 92,
        "name": "gastly",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/92.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 92
    },
    {
        "entry_number": 93,
        "name": "haunter",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/93.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 93
    },
    {
        "entry_number": 94,
        "name": "gengar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/94.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 94
    },
    {
        "entry_number": 95,
        "name": "onix",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/95.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 95
    },
    {
        "entry_number": 96,
        "name": "drowzee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/96.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 96
    },
    {
        "entry_number": 97,
        "name": "hypno",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/97.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 97
    },
    {
        "entry_number": 98,
        "name": "krabby",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/98.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 98
    },
    {
        "entry_number": 99,
        "name": "kingler",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/99.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 99
    },
    {
        "entry_number": 100,
        "name": "voltorb",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/100.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 100
    },
    {
        "entry_number": 101,
        "name": "electrode",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/101.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 101
    },
    {
        "entry_number": 102,
        "name": "exeggcute",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/102.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 102
    },
    {
        "entry_number": 103,
        "name": "exeggutor",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/103.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 103
    },
    {
        "entry_number": 104,
        "name": "cubone",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/104.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 104
    },
    {
        "entry_number": 105,
        "name": "marowak",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/105.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 105
    },
    {
        "entry_number": 106,
        "name": "hitmonlee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/106.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 106
    },
    {
        "entry_number": 107,
        "name": "hitmonchan",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/107.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 107
    },
    {
        "entry_number": 108,
        "name": "lickitung",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/108.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 108
    },
    {
        "entry_number": 109,
        "name": "koffing",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/109.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 109
    },
    {
        "entry_number": 110,
        "name": "weezing",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/110.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 110
    },
    {
        "entry_number": 111,
        "name": "rhyhorn",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/111.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 111
    },
    {
        "entry_number": 112,
        "name": "rhydon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/112.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 112
    },
    {
        "entry_number": 113,
        "name": "chansey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/113.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 113
    },
    {
        "entry_number": 114,
        "name": "tangela",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/114.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 114
    },
    {
        "entry_number": 115,
        "name": "kangaskhan",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/115.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 115
    },
    {
        "entry_number": 116,
        "name": "horsea",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/116.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 116
    },
    {
        "entry_number": 117,
        "name": "seadra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/117.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 117
    },
    {
        "entry_number": 118,
        "name": "goldeen",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/118.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 118
    },
    {
        "entry_number": 119,
        "name": "seaking",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/119.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 119
    },
    {
        "entry_number": 120,
        "name": "staryu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/120.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 120
    },
    {
        "entry_number": 121,
        "name": "starmie",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/121.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 121
    },
    {
        "entry_number": 122,
        "name": "mr-mime",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/122.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 122
    },
    {
        "entry_number": 123,
        "name": "scyther",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/123.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 123
    },
    {
        "entry_number": 124,
        "name": "jynx",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/124.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 124
    },
    {
        "entry_number": 125,
        "name": "electabuzz",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/125.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 125
    },
    {
        "entry_number": 126,
        "name": "magmar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/126.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 126
    },
    {
        "entry_number": 127,
        "name": "pinsir",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/127.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 127
    },
    {
        "entry_number": 128,
        "name": "tauros",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/128.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 128
    },
    {
        "entry_number": 129,
        "name": "magikarp",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/129.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 129
    },
    {
        "entry_number": 130,
        "name": "gyarados",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/130.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 130
    },
    {
        "entry_number": 131,
        "name": "lapras",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/131.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 131
    },
    {
        "entry_number": 132,
        "name": "ditto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/132.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 132
    },
    {
        "entry_number": 133,
        "name": "eevee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/133.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 133
    },
    {
        "entry_number": 134,
        "name": "vaporeon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/134.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 134
    },
    {
        "entry_number": 135,
        "name": "jolteon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/135.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 135
    },
    {
        "entry_number": 136,
        "name": "flareon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/136.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 136
    },
    {
        "entry_number": 137,
        "name": "porygon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/137.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 137
    },
    {
        "entry_number": 138,
        "name": "omanyte",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/138.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 138
    },
    {
        "entry_number": 139,
        "name": "omastar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/139.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 139
    },
    {
        "entry_number": 140,
        "name": "kabuto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/140.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 140
    },
    {
        "entry_number": 141,
        "name": "kabutops",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/141.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 141
    },
    {
        "entry_number": 142,
        "name": "aerodactyl",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/142.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 142
    },
    {
        "entry_number": 143,
        "name": "snorlax",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/143.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 143
    },
    {
        "entry_number": 144,
        "name": "articuno",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/144.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 144
    },
    {
        "entry_number": 145,
        "name": "zapdos",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/145.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 145
    },
    {
        "entry_number": 146,
        "name": "moltres",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/146.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 146
    },
    {
        "entry_number": 147,
        "name": "dratini",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/147.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 147
    },
    {
        "entry_number": 148,
        "name": "dragonair",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/148.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 148
    },
    {
        "entry_number": 149,
        "name": "dragonite",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/149.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ],
        "national_dex_id": 149
    },
    {
        "entry_number": 150,
        "name": "mewtwo",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/150.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 150
    },
    {
        "entry_number": 151,
        "name": "mew",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/151.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": true
            },
            {
                "name": "fly",
                "can_learn": true
            },
            {
                "name": "surf",
                "can_learn": true
            },
            {
                "name": "strength",
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ],
        "national_dex_id": 151
    }
];
//done so far: data imported, hm slots assigned
let gscDexGen2 = [
    {
        "entry_number": 1,
        "name": "chikorita",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/152.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 152
    },
    {
        "entry_number": 2,
        "name": "bayleef",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/153.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 153
    },
    {
        "entry_number": 3,
        "name": "meganium",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/154.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 154
    },
    {
        "entry_number": 4,
        "name": "cyndaquil",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/155.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 155
    },
    {
        "entry_number": 5,
        "name": "quilava",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/156.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 156
    },
    {
        "entry_number": 6,
        "name": "typhlosion",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/157.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 157
    },
    {
        "entry_number": 7,
        "name": "totodile",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/158.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 158
    },
    {
        "entry_number": 8,
        "name": "croconaw",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/159.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 159
    },
    {
        "entry_number": 9,
        "name": "feraligatr",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/160.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 160
    },
    {
        "entry_number": 10,
        "name": "pidgey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/16.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 16
    },
    {
        "entry_number": 11,
        "name": "pidgeotto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/17.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 17
    },
    {
        "entry_number": 12,
        "name": "pidgeot",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/18.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 18
    },
    {
        "entry_number": 13,
        "name": "spearow",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/21.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 21
    },
    {
        "entry_number": 14,
        "name": "fearow",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/22.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 22
    },
    {
        "entry_number": 15,
        "name": "hoothoot",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/163.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 163
    },
    {
        "entry_number": 16,
        "name": "noctowl",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/164.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 164
    },
    {
        "entry_number": 17,
        "name": "rattata",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/19.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 19
    },
    {
        "entry_number": 18,
        "name": "raticate",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/20.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 20
    },
    {
        "entry_number": 19,
        "name": "sentret",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/161.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 161
    },
    {
        "entry_number": 20,
        "name": "furret",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/162.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 162
    },
    {
        "entry_number": 21,
        "name": "pichu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/172.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 172
    },
    {
        "entry_number": 22,
        "name": "pikachu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/25.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 25
    },
    {
        "entry_number": 23,
        "name": "raichu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/26.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 26
    },
    {
        "entry_number": 24,
        "name": "caterpie",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/10.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 10
    },
    {
        "entry_number": 25,
        "name": "metapod",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/11.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 11
    },
    {
        "entry_number": 26,
        "name": "butterfree",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/12.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 12
    },
    {
        "entry_number": 27,
        "name": "weedle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/13.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 13
    },
    {
        "entry_number": 28,
        "name": "kakuna",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/14.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 14
    },
    {
        "entry_number": 29,
        "name": "beedrill",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/15.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 15
    },
    {
        "entry_number": 30,
        "name": "ledyba",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/165.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 165
    },
    {
        "entry_number": 31,
        "name": "ledian",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/166.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 166
    },
    {
        "entry_number": 32,
        "name": "spinarak",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/167.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 167
    },
    {
        "entry_number": 33,
        "name": "ariados",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/168.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 168
    },
    {
        "entry_number": 34,
        "name": "geodude",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/74.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 74
    },
    {
        "entry_number": 35,
        "name": "graveler",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/75.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 75
    },
    {
        "entry_number": 36,
        "name": "golem",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/76.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 76
    },
    {
        "entry_number": 37,
        "name": "zubat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/41.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 41
    },
    {
        "entry_number": 38,
        "name": "golbat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/42.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 42
    },
    {
        "entry_number": 39,
        "name": "crobat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/169.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 169
    },
    {
        "entry_number": 40,
        "name": "cleffa",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/173.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 173
    },
    {
        "entry_number": 41,
        "name": "clefairy",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/35.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 35
    },
    {
        "entry_number": 42,
        "name": "clefable",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/36.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 36
    },
    {
        "entry_number": 43,
        "name": "igglybuff",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/174.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 174
    },
    {
        "entry_number": 44,
        "name": "jigglypuff",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/39.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 39
    },
    {
        "entry_number": 45,
        "name": "wigglytuff",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/40.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 40
    },
    {
        "entry_number": 46,
        "name": "togepi",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/175.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 175
    },
    {
        "entry_number": 47,
        "name": "togetic",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/176.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 176
    },
    {
        "entry_number": 48,
        "name": "sandshrew",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/27.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 27
    },
    {
        "entry_number": 49,
        "name": "sandslash",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/28.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 28
    },
    {
        "entry_number": 50,
        "name": "ekans",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/23.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 23
    },
    {
        "entry_number": 51,
        "name": "arbok",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/24.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 24
    },
    {
        "entry_number": 52,
        "name": "dunsparce",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/206.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 206
    },
    {
        "entry_number": 53,
        "name": "mareep",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/179.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 179
    },
    {
        "entry_number": 54,
        "name": "flaaffy",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/180.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 180
    },
    {
        "entry_number": 55,
        "name": "ampharos",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/181.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 181
    },
    {
        "entry_number": 56,
        "name": "wooper",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/194.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 194
    },
    {
        "entry_number": 57,
        "name": "quagsire",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/195.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 195
    },
    {
        "entry_number": 58,
        "name": "gastly",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/92.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 92
    },
    {
        "entry_number": 59,
        "name": "haunter",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/93.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 93
    },
    {
        "entry_number": 60,
        "name": "gengar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/94.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 94
    },
    {
        "entry_number": 61,
        "name": "unown",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/201.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 201
    },
    {
        "entry_number": 62,
        "name": "onix",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/95.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 95
    },
    {
        "entry_number": 63,
        "name": "steelix",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/208.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 208
    },
    {
        "entry_number": 64,
        "name": "bellsprout",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/69.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 69
    },
    {
        "entry_number": 65,
        "name": "weepinbell",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/70.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 70
    },
    {
        "entry_number": 66,
        "name": "victreebel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/71.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 71
    },
    {
        "entry_number": 67,
        "name": "hoppip",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/187.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 187
    },
    {
        "entry_number": 68,
        "name": "skiploom",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/188.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 188
    },
    {
        "entry_number": 69,
        "name": "jumpluff",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/189.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 189
    },
    {
        "entry_number": 70,
        "name": "paras",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/46.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 46
    },
    {
        "entry_number": 71,
        "name": "parasect",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/47.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 47
    },
    {
        "entry_number": 72,
        "name": "poliwag",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/60.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 60
    },
    {
        "entry_number": 73,
        "name": "poliwhirl",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/61.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 61
    },
    {
        "entry_number": 74,
        "name": "poliwrath",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/62.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 62
    },
    {
        "entry_number": 75,
        "name": "politoed",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/186.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 186
    },
    {
        "entry_number": 76,
        "name": "magikarp",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/129.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 129
    },
    {
        "entry_number": 77,
        "name": "gyarados",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/130.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 130
    },
    {
        "entry_number": 78,
        "name": "goldeen",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/118.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 118
    },
    {
        "entry_number": 79,
        "name": "seaking",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/119.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 119
    },
    {
        "entry_number": 80,
        "name": "slowpoke",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/79.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 79
    },
    {
        "entry_number": 81,
        "name": "slowbro",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/80.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 80
    },
    {
        "entry_number": 82,
        "name": "slowking",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/199.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 199
    },
    {
        "entry_number": 83,
        "name": "oddish",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/43.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 43
    },
    {
        "entry_number": 84,
        "name": "gloom",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/44.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 44
    },
    {
        "entry_number": 85,
        "name": "vileplume",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/45.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 45
    },
    {
        "entry_number": 86,
        "name": "bellossom",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/182.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 182
    },
    {
        "entry_number": 87,
        "name": "drowzee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/96.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 96
    },
    {
        "entry_number": 88,
        "name": "hypno",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/97.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 97
    },
    {
        "entry_number": 89,
        "name": "abra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/63.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 63
    },
    {
        "entry_number": 90,
        "name": "kadabra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/64.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 64
    },
    {
        "entry_number": 91,
        "name": "alakazam",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/65.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 65
    },
    {
        "entry_number": 92,
        "name": "ditto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 132
    },
    {
        "entry_number": 93,
        "name": "pineco",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/204.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 204
    },
    {
        "entry_number": 94,
        "name": "forretress",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/205.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 205
    },
    {
        "entry_number": 95,
        "name": "nidoran-f",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/29.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 29
    },
    {
        "entry_number": 96,
        "name": "nidorina",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/30.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 30
    },
    {
        "entry_number": 97,
        "name": "nidoqueen",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/31.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 31
    },
    {
        "entry_number": 98,
        "name": "nidoran-m",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/32.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 32
    },
    {
        "entry_number": 99,
        "name": "nidorino",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/33.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 33
    },
    {
        "entry_number": 100,
        "name": "nidoking",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/34.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 34
    },
    {
        "entry_number": 101,
        "name": "yanma",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/193.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 193
    },
    {
        "entry_number": 102,
        "name": "sunkern",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/191.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 191
    },
    {
        "entry_number": 103,
        "name": "sunflora",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/192.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 192
    },
    {
        "entry_number": 104,
        "name": "exeggcute",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/102.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 102
    },
    {
        "entry_number": 105,
        "name": "exeggutor",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/103.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 103
    },
    {
        "entry_number": 106,
        "name": "sudowoodo",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/185.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 185
    },
    {
        "entry_number": 107,
        "name": "wobbuffet",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/202.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 202
    },
    {
        "entry_number": 108,
        "name": "venonat",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/48.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 48
    },
    {
        "entry_number": 109,
        "name": "venomoth",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/49.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 49
    },
    {
        "entry_number": 110,
        "name": "scyther",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/123.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 123
    },
    {
        "entry_number": 111,
        "name": "scizor",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/212.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 212
    },
    {
        "entry_number": 112,
        "name": "pinsir",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/127.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 127
    },
    {
        "entry_number": 113,
        "name": "heracross",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/214.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 214
    },
    {
        "entry_number": 114,
        "name": "koffing",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/109.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 109
    },
    {
        "entry_number": 115,
        "name": "weezing",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/110.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 110
    },
    {
        "entry_number": 116,
        "name": "grimer",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/88.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 88
    },
    {
        "entry_number": 117,
        "name": "muk",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/89.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 89
    },
    {
        "entry_number": 118,
        "name": "magnemite",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/81.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 81
    },
    {
        "entry_number": 119,
        "name": "magneton",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/82.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 82
    },
    {
        "entry_number": 120,
        "name": "voltorb",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/100.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 100
    },
    {
        "entry_number": 121,
        "name": "electrode",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/101.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 101
    },
    {
        "entry_number": 122,
        "name": "aipom",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/190.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 190
    },
    {
        "entry_number": 123,
        "name": "snubbull",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/209.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 209
    },
    {
        "entry_number": 124,
        "name": "granbull",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/210.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 210
    },
    {
        "entry_number": 125,
        "name": "vulpix",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/37.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 37
    },
    {
        "entry_number": 126,
        "name": "ninetales",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/38.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 38
    },
    {
        "entry_number": 127,
        "name": "growlithe",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/58.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 58
    },
    {
        "entry_number": 128,
        "name": "arcanine",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/59.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 59
    },
    {
        "entry_number": 129,
        "name": "stantler",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/234.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 234
    },
    {
        "entry_number": 130,
        "name": "marill",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/183.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 183
    },
    {
        "entry_number": 131,
        "name": "azumarill",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/184.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 184
    },
    {
        "entry_number": 132,
        "name": "diglett",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/50.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 50
    },
    {
        "entry_number": 133,
        "name": "dugtrio",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/51.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 51
    },
    {
        "entry_number": 134,
        "name": "mankey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/56.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 56
    },
    {
        "entry_number": 135,
        "name": "primeape",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/57.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 57
    },
    {
        "entry_number": 136,
        "name": "meowth",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/52.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 52
    },
    {
        "entry_number": 137,
        "name": "persian",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/53.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 53
    },
    {
        "entry_number": 138,
        "name": "psyduck",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/54.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 54
    },
    {
        "entry_number": 139,
        "name": "golduck",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/55.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 55
    },
    {
        "entry_number": 140,
        "name": "machop",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/66.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 66
    },
    {
        "entry_number": 141,
        "name": "machoke",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/67.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 67
    },
    {
        "entry_number": 142,
        "name": "machamp",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/68.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 68
    },
    {
        "entry_number": 143,
        "name": "tyrogue",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/236.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 236
    },
    {
        "entry_number": 144,
        "name": "hitmonlee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/106.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 106
    },
    {
        "entry_number": 145,
        "name": "hitmonchan",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/107.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 107
    },
    {
        "entry_number": 146,
        "name": "hitmontop",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/237.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 237
    },
    {
        "entry_number": 147,
        "name": "girafarig",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/203.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 203
    },
    {
        "entry_number": 148,
        "name": "tauros",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/128.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 128
    },
    {
        "entry_number": 149,
        "name": "miltank",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/241.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 241
    },
    {
        "entry_number": 150,
        "name": "magby",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/240.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 240
    },
    {
        "entry_number": 151,
        "name": "magmar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/126.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 126
    },
    {
        "entry_number": 152,
        "name": "smoochum",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/238.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 238
    },
    {
        "entry_number": 153,
        "name": "jynx",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/124.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 124
    },
    {
        "entry_number": 154,
        "name": "elekid",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/239.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 239
    },
    {
        "entry_number": 155,
        "name": "electabuzz",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/125.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 125
    },
    {
        "entry_number": 156,
        "name": "mr-mime",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/122.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 122
    },
    {
        "entry_number": 157,
        "name": "smeargle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/235.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 235
    },
    {
        "entry_number": 158,
        "name": "farfetchd",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/83.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 83
    },
    {
        "entry_number": 159,
        "name": "natu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/177.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 177
    },
    {
        "entry_number": 160,
        "name": "xatu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/178.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 178
    },
    {
        "entry_number": 161,
        "name": "qwilfish",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/211.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 211
    },
    {
        "entry_number": 162,
        "name": "tentacool",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/72.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 72
    },
    {
        "entry_number": 163,
        "name": "tentacruel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/73.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 73
    },
    {
        "entry_number": 164,
        "name": "krabby",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/98.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 98
    },
    {
        "entry_number": 165,
        "name": "kingler",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/99.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 99
    },
    {
        "entry_number": 166,
        "name": "shuckle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/213.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 213
    },
    {
        "entry_number": 167,
        "name": "staryu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/120.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 120
    },
    {
        "entry_number": 168,
        "name": "starmie",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/121.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 121
    },
    {
        "entry_number": 169,
        "name": "shellder",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/90.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 90
    },
    {
        "entry_number": 170,
        "name": "cloyster",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/91.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 91
    },
    {
        "entry_number": 171,
        "name": "corsola",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/222.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 222
    },
    {
        "entry_number": 172,
        "name": "remoraid",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/223.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 223
    },
    {
        "entry_number": 173,
        "name": "octillery",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/224.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 224
    },
    {
        "entry_number": 174,
        "name": "chinchou",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/170.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 170
    },
    {
        "entry_number": 175,
        "name": "lanturn",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/171.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 171
    },
    {
        "entry_number": 176,
        "name": "seel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/86.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 86
    },
    {
        "entry_number": 177,
        "name": "dewgong",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/87.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 87
    },
    {
        "entry_number": 178,
        "name": "lickitung",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/108.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 108
    },
    {
        "entry_number": 179,
        "name": "tangela",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/114.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 114
    },
    {
        "entry_number": 180,
        "name": "eevee",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/133.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 133
    },
    {
        "entry_number": 181,
        "name": "vaporeon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/134.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 134
    },
    {
        "entry_number": 182,
        "name": "jolteon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/135.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 135
    },
    {
        "entry_number": 183,
        "name": "flareon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/136.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 136
    },
    {
        "entry_number": 184,
        "name": "espeon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/196.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 196
    },
    {
        "entry_number": 185,
        "name": "umbreon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/197.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 197
    },
    {
        "entry_number": 186,
        "name": "horsea",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/116.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 116
    },
    {
        "entry_number": 187,
        "name": "seadra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/117.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 117
    },
    {
        "entry_number": 188,
        "name": "kingdra",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/230.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 230
    },
    {
        "entry_number": 189,
        "name": "gligar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/207.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 207
    },
    {
        "entry_number": 190,
        "name": "delibird",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/225.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 225
    },
    {
        "entry_number": 191,
        "name": "swinub",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/220.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 220
    },
    {
        "entry_number": 192,
        "name": "piloswine",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/221.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 221
    },
    {
        "entry_number": 193,
        "name": "teddiursa",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/216.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 216
    },
    {
        "entry_number": 194,
        "name": "ursaring",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/217.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 217
    },
    {
        "entry_number": 195,
        "name": "phanpy",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/231.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 231
    },
    {
        "entry_number": 196,
        "name": "donphan",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/232.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 232
    },
    {
        "entry_number": 197,
        "name": "mantine",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/226.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 226
    },
    {
        "entry_number": 198,
        "name": "skarmory",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/227.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 227
    },
    {
        "entry_number": 199,
        "name": "doduo",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/84.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 84
    },
    {
        "entry_number": 200,
        "name": "dodrio",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/85.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 85
    },
    {
        "entry_number": 201,
        "name": "ponyta",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/77.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 77
    },
    {
        "entry_number": 202,
        "name": "rapidash",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/78.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 78
    },
    {
        "entry_number": 203,
        "name": "cubone",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/104.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 104
    },
    {
        "entry_number": 204,
        "name": "marowak",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/105.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 105
    },
    {
        "entry_number": 205,
        "name": "kangaskhan",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/115.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 115
    },
    {
        "entry_number": 206,
        "name": "rhyhorn",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/111.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 111
    },
    {
        "entry_number": 207,
        "name": "rhydon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/112.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 112
    },
    {
        "entry_number": 208,
        "name": "murkrow",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/198.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 198
    },
    {
        "entry_number": 209,
        "name": "houndour",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/228.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 228
    },
    {
        "entry_number": 210,
        "name": "houndoom",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/229.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 229
    },
    {
        "entry_number": 211,
        "name": "slugma",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/218.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 218
    },
    {
        "entry_number": 212,
        "name": "magcargo",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/219.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 219
    },
    {
        "entry_number": 213,
        "name": "sneasel",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/215.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 215
    },
    {
        "entry_number": 214,
        "name": "misdreavus",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/200.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 200
    },
    {
        "entry_number": 215,
        "name": "porygon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/137.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 137
    },
    {
        "entry_number": 216,
        "name": "porygon2",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/233.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 233
    },
    {
        "entry_number": 217,
        "name": "chansey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/113.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 113
    },
    {
        "entry_number": 218,
        "name": "blissey",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/242.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 242
    },
    {
        "entry_number": 219,
        "name": "lapras",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/131.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 131
    },
    {
        "entry_number": 220,
        "name": "omanyte",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/138.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 138
    },
    {
        "entry_number": 221,
        "name": "omastar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/139.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 139
    },
    {
        "entry_number": 222,
        "name": "kabuto",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/140.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 140
    },
    {
        "entry_number": 223,
        "name": "kabutops",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/141.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 141
    },
    {
        "entry_number": 224,
        "name": "aerodactyl",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/142.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 142
    },
    {
        "entry_number": 225,
        "name": "snorlax",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/143.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 143
    },
    {
        "entry_number": 226,
        "name": "bulbasaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 1
    },
    {
        "entry_number": 227,
        "name": "ivysaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/2.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 2
    },
    {
        "entry_number": 228,
        "name": "venusaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/3.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 3
    },
    {
        "entry_number": 229,
        "name": "charmander",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/4.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 4
    },
    {
        "entry_number": 230,
        "name": "charmeleon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/5.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 5
    },
    {
        "entry_number": 231,
        "name": "charizard",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/6.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 6
    },
    {
        "entry_number": 232,
        "name": "squirtle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/7.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 7
    },
    {
        "entry_number": 233,
        "name": "wartortle",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/8.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 8
    },
    {
        "entry_number": 234,
        "name": "blastoise",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/9.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 9
    },
    {
        "entry_number": 235,
        "name": "articuno",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/144.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 144
    },
    {
        "entry_number": 236,
        "name": "zapdos",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/145.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 145
    },
    {
        "entry_number": 237,
        "name": "moltres",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/146.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 146
    },
    {
        "entry_number": 238,
        "name": "raikou",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/243.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 243
    },
    {
        "entry_number": 239,
        "name": "entei",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/244.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 244
    },
    {
        "entry_number": 240,
        "name": "suicune",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/245.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 245
    },
    {
        "entry_number": 241,
        "name": "dratini",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/147.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 147
    },
    {
        "entry_number": 242,
        "name": "dragonair",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/148.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 148
    },
    {
        "entry_number": 243,
        "name": "dragonite",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/149.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 149
    },
    {
        "entry_number": 244,
        "name": "larvitar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/246.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 246
    },
    {
        "entry_number": 245,
        "name": "pupitar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/247.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 247
    },
    {
        "entry_number": 246,
        "name": "tyranitar",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/248.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 248
    },
    {
        "entry_number": 247,
        "name": "lugia",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/249.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 249
    },
    {
        "entry_number": 248,
        "name": "ho-oh",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/250.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 250
    },
    {
        "entry_number": 249,
        "name": "mewtwo",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/150.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 150
    },
    {
        "entry_number": 250,
        "name": "mew",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/151.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 151
    },
    {
        "entry_number": 251,
        "name": "celebi",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-ii/crystal/transparent/251.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "whirlpool",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            }
        ],
        "national_dex_id": 251
    }
];
//done so far: data imported, hm slots assigned
let rseDexGen3 = [
    {
        "entry_number": 1,
        "name": "treecko",
        "national_dex_id": 252,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/252.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 2,
        "name": "grovyle",
        "national_dex_id": 253,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/253.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 3,
        "name": "sceptile",
        "national_dex_id": 254,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/254.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 4,
        "name": "torchic",
        "national_dex_id": 255,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/255.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 5,
        "name": "combusken",
        "national_dex_id": 256,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/256.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 6,
        "name": "blaziken",
        "national_dex_id": 257,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/257.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 7,
        "name": "mudkip",
        "national_dex_id": 258,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/258.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 8,
        "name": "marshtomp",
        "national_dex_id": 259,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/259.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 9,
        "name": "swampert",
        "national_dex_id": 260,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/260.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 10,
        "name": "poochyena",
        "national_dex_id": 261,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/261.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 11,
        "name": "mightyena",
        "national_dex_id": 262,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/262.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 12,
        "name": "zigzagoon",
        "national_dex_id": 263,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/263.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 13,
        "name": "linoone",
        "national_dex_id": 264,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/264.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 14,
        "name": "wurmple",
        "national_dex_id": 265,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/265.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 15,
        "name": "silcoon",
        "national_dex_id": 266,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/266.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 16,
        "name": "beautifly",
        "national_dex_id": 267,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/267.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 17,
        "name": "cascoon",
        "national_dex_id": 268,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/268.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 18,
        "name": "dustox",
        "national_dex_id": 269,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/269.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 19,
        "name": "lotad",
        "national_dex_id": 270,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/270.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 20,
        "name": "lombre",
        "national_dex_id": 271,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/271.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 21,
        "name": "ludicolo",
        "national_dex_id": 272,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/272.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 22,
        "name": "seedot",
        "national_dex_id": 273,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/273.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 23,
        "name": "nuzleaf",
        "national_dex_id": 274,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/274.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 24,
        "name": "shiftry",
        "national_dex_id": 275,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/275.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 25,
        "name": "taillow",
        "national_dex_id": 276,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/276.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 26,
        "name": "swellow",
        "national_dex_id": 277,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/277.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 27,
        "name": "wingull",
        "national_dex_id": 278,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/278.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 28,
        "name": "pelipper",
        "national_dex_id": 279,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/279.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 29,
        "name": "ralts",
        "national_dex_id": 280,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/280.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 30,
        "name": "kirlia",
        "national_dex_id": 281,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/281.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 31,
        "name": "gardevoir",
        "national_dex_id": 282,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/282.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 32,
        "name": "surskit",
        "national_dex_id": 283,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/283.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 33,
        "name": "masquerain",
        "national_dex_id": 284,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/284.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 34,
        "name": "shroomish",
        "national_dex_id": 285,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/285.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 35,
        "name": "breloom",
        "national_dex_id": 286,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/286.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 36,
        "name": "slakoth",
        "national_dex_id": 287,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/287.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 37,
        "name": "vigoroth",
        "national_dex_id": 288,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/288.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 38,
        "name": "slaking",
        "national_dex_id": 289,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/289.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 39,
        "name": "abra",
        "national_dex_id": 63,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/63.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 40,
        "name": "kadabra",
        "national_dex_id": 64,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/64.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 41,
        "name": "alakazam",
        "national_dex_id": 65,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/65.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 42,
        "name": "nincada",
        "national_dex_id": 290,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/290.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 43,
        "name": "ninjask",
        "national_dex_id": 291,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/291.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 44,
        "name": "shedinja",
        "national_dex_id": 292,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/292.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 45,
        "name": "whismur",
        "national_dex_id": 293,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/293.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 46,
        "name": "loudred",
        "national_dex_id": 294,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/294.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 47,
        "name": "exploud",
        "national_dex_id": 295,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/295.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 48,
        "name": "makuhita",
        "national_dex_id": 296,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/296.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 49,
        "name": "hariyama",
        "national_dex_id": 297,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/297.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 50,
        "name": "goldeen",
        "national_dex_id": 118,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/118.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 51,
        "name": "seaking",
        "national_dex_id": 119,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/119.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 52,
        "name": "magikarp",
        "national_dex_id": 129,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/129.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 53,
        "name": "gyarados",
        "national_dex_id": 130,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/130.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 54,
        "name": "azurill",
        "national_dex_id": 298,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/298.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 55,
        "name": "marill",
        "national_dex_id": 183,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/183.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 56,
        "name": "azumarill",
        "national_dex_id": 184,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/184.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 57,
        "name": "geodude",
        "national_dex_id": 74,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/74.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 58,
        "name": "graveler",
        "national_dex_id": 75,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/75.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 59,
        "name": "golem",
        "national_dex_id": 76,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/76.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 60,
        "name": "nosepass",
        "national_dex_id": 299,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/299.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 61,
        "name": "skitty",
        "national_dex_id": 300,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/300.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 62,
        "name": "delcatty",
        "national_dex_id": 301,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/301.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 63,
        "name": "zubat",
        "national_dex_id": 41,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/41.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 64,
        "name": "golbat",
        "national_dex_id": 42,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/42.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 65,
        "name": "crobat",
        "national_dex_id": 169,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/169.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 66,
        "name": "tentacool",
        "national_dex_id": 72,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/72.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 67,
        "name": "tentacruel",
        "national_dex_id": 73,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/73.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 68,
        "name": "sableye",
        "national_dex_id": 302,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/302.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 69,
        "name": "mawile",
        "national_dex_id": 303,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/303.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 70,
        "name": "aron",
        "national_dex_id": 304,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/304.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 71,
        "name": "lairon",
        "national_dex_id": 305,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/305.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 72,
        "name": "aggron",
        "national_dex_id": 306,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/306.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 73,
        "name": "machop",
        "national_dex_id": 66,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/66.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 74,
        "name": "machoke",
        "national_dex_id": 67,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/67.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 75,
        "name": "machamp",
        "national_dex_id": 68,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/68.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 76,
        "name": "meditite",
        "national_dex_id": 307,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/307.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 77,
        "name": "medicham",
        "national_dex_id": 308,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/308.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 78,
        "name": "electrike",
        "national_dex_id": 309,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/309.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 79,
        "name": "manectric",
        "national_dex_id": 310,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/310.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 80,
        "name": "plusle",
        "national_dex_id": 311,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/311.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 81,
        "name": "minun",
        "national_dex_id": 312,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/312.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 82,
        "name": "magnemite",
        "national_dex_id": 81,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/81.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 83,
        "name": "magneton",
        "national_dex_id": 82,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/82.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 84,
        "name": "voltorb",
        "national_dex_id": 100,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/100.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 85,
        "name": "electrode",
        "national_dex_id": 101,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/101.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 86,
        "name": "volbeat",
        "national_dex_id": 313,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/313.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 87,
        "name": "illumise",
        "national_dex_id": 314,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/314.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 88,
        "name": "oddish",
        "national_dex_id": 43,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/43.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 89,
        "name": "gloom",
        "national_dex_id": 44,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/44.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 90,
        "name": "vileplume",
        "national_dex_id": 45,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/45.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 91,
        "name": "bellossom",
        "national_dex_id": 182,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/182.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 92,
        "name": "doduo",
        "national_dex_id": 84,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/84.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 93,
        "name": "dodrio",
        "national_dex_id": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/85.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 94,
        "name": "roselia",
        "national_dex_id": 315,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/315.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 95,
        "name": "gulpin",
        "national_dex_id": 316,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/316.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 96,
        "name": "swalot",
        "national_dex_id": 317,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/317.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 97,
        "name": "carvanha",
        "national_dex_id": 318,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/318.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 98,
        "name": "sharpedo",
        "national_dex_id": 319,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/319.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 99,
        "name": "wailmer",
        "national_dex_id": 320,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/320.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 100,
        "name": "wailord",
        "national_dex_id": 321,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/321.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 101,
        "name": "numel",
        "national_dex_id": 322,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/322.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 102,
        "name": "camerupt",
        "national_dex_id": 323,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/323.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 103,
        "name": "slugma",
        "national_dex_id": 218,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/218.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 104,
        "name": "magcargo",
        "national_dex_id": 219,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/219.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 105,
        "name": "torkoal",
        "national_dex_id": 324,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/324.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 106,
        "name": "grimer",
        "national_dex_id": 88,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/88.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 107,
        "name": "muk",
        "national_dex_id": 89,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/89.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 108,
        "name": "koffing",
        "national_dex_id": 109,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/109.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 109,
        "name": "weezing",
        "national_dex_id": 110,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/110.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 110,
        "name": "spoink",
        "national_dex_id": 325,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/325.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 111,
        "name": "grumpig",
        "national_dex_id": 326,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/326.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 112,
        "name": "sandshrew",
        "national_dex_id": 27,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/27.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 113,
        "name": "sandslash",
        "national_dex_id": 28,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/28.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 114,
        "name": "spinda",
        "national_dex_id": 327,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/327.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 115,
        "name": "skarmory",
        "national_dex_id": 227,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/227.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 116,
        "name": "trapinch",
        "national_dex_id": 328,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/328.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 117,
        "name": "vibrava",
        "national_dex_id": 329,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/329.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 118,
        "name": "flygon",
        "national_dex_id": 330,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/330.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 119,
        "name": "cacnea",
        "national_dex_id": 331,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/331.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 120,
        "name": "cacturne",
        "national_dex_id": 332,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/332.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 121,
        "name": "swablu",
        "national_dex_id": 333,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/333.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 122,
        "name": "altaria",
        "national_dex_id": 334,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/334.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 123,
        "name": "zangoose",
        "national_dex_id": 335,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/335.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 124,
        "name": "seviper",
        "national_dex_id": 336,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/336.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 125,
        "name": "lunatone",
        "national_dex_id": 337,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/337.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 126,
        "name": "solrock",
        "national_dex_id": 338,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/338.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 127,
        "name": "barboach",
        "national_dex_id": 339,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/339.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 128,
        "name": "whiscash",
        "national_dex_id": 340,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/340.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 129,
        "name": "corphish",
        "national_dex_id": 341,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/341.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 130,
        "name": "crawdaunt",
        "national_dex_id": 342,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/342.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 131,
        "name": "baltoy",
        "national_dex_id": 343,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/343.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 132,
        "name": "claydol",
        "national_dex_id": 344,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/344.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 133,
        "name": "lileep",
        "national_dex_id": 345,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/345.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 134,
        "name": "cradily",
        "national_dex_id": 346,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/346.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 135,
        "name": "anorith",
        "national_dex_id": 347,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/347.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 136,
        "name": "armaldo",
        "national_dex_id": 348,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/348.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 137,
        "name": "igglybuff",
        "national_dex_id": 174,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/174.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 138,
        "name": "jigglypuff",
        "national_dex_id": 39,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/39.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 139,
        "name": "wigglytuff",
        "national_dex_id": 40,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/40.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 140,
        "name": "feebas",
        "national_dex_id": 349,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/349.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 141,
        "name": "milotic",
        "national_dex_id": 350,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/350.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 142,
        "name": "castform",
        "national_dex_id": 351,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/351.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 143,
        "name": "staryu",
        "national_dex_id": 120,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/120.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 144,
        "name": "starmie",
        "national_dex_id": 121,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/121.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 145,
        "name": "kecleon",
        "national_dex_id": 352,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/352.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 146,
        "name": "shuppet",
        "national_dex_id": 353,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/353.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 147,
        "name": "banette",
        "national_dex_id": 354,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/354.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 148,
        "name": "duskull",
        "national_dex_id": 355,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/355.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 149,
        "name": "dusclops",
        "national_dex_id": 356,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/356.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 150,
        "name": "tropius",
        "national_dex_id": 357,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/357.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 151,
        "name": "chimecho",
        "national_dex_id": 358,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/358.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 152,
        "name": "absol",
        "national_dex_id": 359,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dark",
                    "url": "https://pokeapi.co/api/v2/type/17/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/359.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 153,
        "name": "vulpix",
        "national_dex_id": 37,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/37.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 154,
        "name": "ninetales",
        "national_dex_id": 38,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/38.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 155,
        "name": "pichu",
        "national_dex_id": 172,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/172.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 156,
        "name": "pikachu",
        "national_dex_id": 25,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/25.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 157,
        "name": "raichu",
        "national_dex_id": 26,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/26.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 158,
        "name": "psyduck",
        "national_dex_id": 54,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/54.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 159,
        "name": "golduck",
        "national_dex_id": 55,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/55.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 160,
        "name": "wynaut",
        "national_dex_id": 360,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/360.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 161,
        "name": "wobbuffet",
        "national_dex_id": 202,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/202.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 162,
        "name": "natu",
        "national_dex_id": 177,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/177.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 163,
        "name": "xatu",
        "national_dex_id": 178,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/178.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 164,
        "name": "girafarig",
        "national_dex_id": 203,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/203.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 165,
        "name": "phanpy",
        "national_dex_id": 231,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/231.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 166,
        "name": "donphan",
        "national_dex_id": 232,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/232.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 167,
        "name": "pinsir",
        "national_dex_id": 127,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/127.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 168,
        "name": "heracross",
        "national_dex_id": 214,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/214.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 169,
        "name": "rhyhorn",
        "national_dex_id": 111,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/111.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 170,
        "name": "rhydon",
        "national_dex_id": 112,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/112.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 171,
        "name": "snorunt",
        "national_dex_id": 361,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/361.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 172,
        "name": "glalie",
        "national_dex_id": 362,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/362.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 173,
        "name": "spheal",
        "national_dex_id": 363,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/363.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 174,
        "name": "sealeo",
        "national_dex_id": 364,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/364.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 175,
        "name": "walrein",
        "national_dex_id": 365,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/365.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 176,
        "name": "clamperl",
        "national_dex_id": 366,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/366.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 177,
        "name": "huntail",
        "national_dex_id": 367,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/367.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 178,
        "name": "gorebyss",
        "national_dex_id": 368,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/368.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 179,
        "name": "relicanth",
        "national_dex_id": 369,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/369.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 180,
        "name": "corsola",
        "national_dex_id": 222,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/222.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 181,
        "name": "chinchou",
        "national_dex_id": 170,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/170.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 182,
        "name": "lanturn",
        "national_dex_id": 171,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/171.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 183,
        "name": "luvdisc",
        "national_dex_id": 370,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/370.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 184,
        "name": "horsea",
        "national_dex_id": 116,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/116.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 185,
        "name": "seadra",
        "national_dex_id": 117,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/117.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 186,
        "name": "kingdra",
        "national_dex_id": 230,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/230.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 187,
        "name": "bagon",
        "national_dex_id": 371,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/371.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 188,
        "name": "shelgon",
        "national_dex_id": 372,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/372.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 189,
        "name": "salamence",
        "national_dex_id": 373,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/373.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 190,
        "name": "beldum",
        "national_dex_id": 374,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/374.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 191,
        "name": "metang",
        "national_dex_id": 375,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/375.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 192,
        "name": "metagross",
        "national_dex_id": 376,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/376.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 193,
        "name": "regirock",
        "national_dex_id": 377,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/377.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 194,
        "name": "regice",
        "national_dex_id": 378,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/378.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 195,
        "name": "registeel",
        "national_dex_id": 379,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/379.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 196,
        "name": "latias",
        "national_dex_id": 380,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/380.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 197,
        "name": "latios",
        "national_dex_id": 381,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/381.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 198,
        "name": "kyogre",
        "national_dex_id": 382,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/382.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 199,
        "name": "groudon",
        "national_dex_id": 383,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/383.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 200,
        "name": "rayquaza",
        "national_dex_id": 384,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/384.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 201,
        "name": "jirachi",
        "national_dex_id": 385,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/385.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    },
    {
        "entry_number": 202,
        "name": "deoxys-normal",
        "national_dex_id": 386,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/versions/generation-iii/emerald/386.png",
        "hms": [
            {
                "name": "cut",
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
                "can_learn": false
            },
            {
                "name": "strength",
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
            },
            {
                "name": "rock smash",
                "can_learn": false
            },
            {
                "name": "waterfall",
                "can_learn": false
            },
            {
                "name": "dive",
                "can_learn": false
            }
        ]
    }
]

let frlgDexGen3 =  ""

let dpDexGen4 = ""

let ptDexGen4 = ""

let bwDexGen5 = ""

let bw2DexGen5 = ""


//function to get new pokedex from PokeAPI with no extra data

async function getNewPokedex() {
    let call = await fetch('https://pokeapi.co/api/v2/pokedex/4');
    let data = await call.json();
    console.log(data);
};