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

// function used to update basic object pulled from PokeAPI - saving for reuse if other generations added

function updateObject() {
    for (let i = 0; i < generation1Pokemon.length; i++) {
        let pokemonID = i + 1;
        generation1Pokemon[i].id = pokemonID;
        generation1Pokemon[i].image = `images/sprites/pokemon/versions/generation-i/red-blue/transparent/${pokemonID}.png`;
        let capitalisedName = (generation1Pokemon[i].name.charAt(0).toUpperCase()) + (generation1Pokemon[i].name.slice(1));
        generation1Pokemon[i].name = capitalisedName;
    };
}

*/

async function getAPIData() {
    for (let i = 0; i < rbyDexGen1.length; i++) {
        let genName = rbyDexGen1[i].pokemon_species.name
        let entry = rbyDexGen1[i].entry_number;
        let apiString = `https://pokeapi.co/api/v2/pokemon/${genName}/`
        let data = await fetch(apiString);
        let jsonData = await data.json();
        rbyDexGen1[i].name = genName;
        rbyDexGen1[i].types = jsonData.types;
        rbyDexGen1[i].sprite = `images/sprites/pokemon/versions/generation-i/red-blue/transparent/${entry}.png`
        console.log(genName)
        console.log(entry)
        delete rbyDexGen1[i].pokemon_species
    };
    console.log(rbyDexGen1)
};


//use this function once when setting up new generation to add in the HMs for that generation to each pokemon 
async function setHMSlots() {
    for (let i = 0; i < rbyDexGen1.length; i++) {
        console.log(rbyDexGen1[i])
        rbyDexGen1[i].hms = [
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
            }
        ];
    }
    console.log(rbyDexGen1)
};

// use this function to complete hm data for a specific HM. Should set up HM array first with previous function.
async function hmData() {
    let data = await fetch('https://pokeapi.co/api/v2/move/flash/');
    let jsonData = await data.json();
    console.log(jsonData)
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
                "can_learn": true
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        "entry_number": 35,
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
        ]
    },
    {
        "entry_number": 36,
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
        ]
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
        ]
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
        ]
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
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
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
        ]
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
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
        ]
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
        ]
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
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
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
        ]
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
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            }
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": true
            }
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": true
            },
            {
                "name": "flash",
                "can_learn": false
            }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
                "can_learn": false
            }
        ]
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
        ]
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
        ]
    }
];

let rbyHMsGen1 = [];

let gscDexGen2 = [
    {
        "entry_number": 1,
        "pokemon_species": {
            "name": "chikorita",
            "url": "https://pokeapi.co/api/v2/pokemon-species/152/"
        }
    },
    {
        "entry_number": 2,
        "pokemon_species": {
            "name": "bayleef",
            "url": "https://pokeapi.co/api/v2/pokemon-species/153/"
        }
    },
    {
        "entry_number": 3,
        "pokemon_species": {
            "name": "meganium",
            "url": "https://pokeapi.co/api/v2/pokemon-species/154/"
        }
    },
    {
        "entry_number": 4,
        "pokemon_species": {
            "name": "cyndaquil",
            "url": "https://pokeapi.co/api/v2/pokemon-species/155/"
        }
    },
    {
        "entry_number": 5,
        "pokemon_species": {
            "name": "quilava",
            "url": "https://pokeapi.co/api/v2/pokemon-species/156/"
        }
    },
    {
        "entry_number": 6,
        "pokemon_species": {
            "name": "typhlosion",
            "url": "https://pokeapi.co/api/v2/pokemon-species/157/"
        }
    },
    {
        "entry_number": 7,
        "pokemon_species": {
            "name": "totodile",
            "url": "https://pokeapi.co/api/v2/pokemon-species/158/"
        }
    },
    {
        "entry_number": 8,
        "pokemon_species": {
            "name": "croconaw",
            "url": "https://pokeapi.co/api/v2/pokemon-species/159/"
        }
    },
    {
        "entry_number": 9,
        "pokemon_species": {
            "name": "feraligatr",
            "url": "https://pokeapi.co/api/v2/pokemon-species/160/"
        }
    },
    {
        "entry_number": 10,
        "pokemon_species": {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon-species/16/"
        }
    },
    {
        "entry_number": 11,
        "pokemon_species": {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon-species/17/"
        }
    },
    {
        "entry_number": 12,
        "pokemon_species": {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon-species/18/"
        }
    },
    {
        "entry_number": 13,
        "pokemon_species": {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon-species/21/"
        }
    },
    {
        "entry_number": 14,
        "pokemon_species": {
            "name": "fearow",
            "url": "https://pokeapi.co/api/v2/pokemon-species/22/"
        }
    },
    {
        "entry_number": 15,
        "pokemon_species": {
            "name": "hoothoot",
            "url": "https://pokeapi.co/api/v2/pokemon-species/163/"
        }
    },
    {
        "entry_number": 16,
        "pokemon_species": {
            "name": "noctowl",
            "url": "https://pokeapi.co/api/v2/pokemon-species/164/"
        }
    },
    {
        "entry_number": 17,
        "pokemon_species": {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon-species/19/"
        }
    },
    {
        "entry_number": 18,
        "pokemon_species": {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon-species/20/"
        }
    },
    {
        "entry_number": 19,
        "pokemon_species": {
            "name": "sentret",
            "url": "https://pokeapi.co/api/v2/pokemon-species/161/"
        }
    },
    {
        "entry_number": 20,
        "pokemon_species": {
            "name": "furret",
            "url": "https://pokeapi.co/api/v2/pokemon-species/162/"
        }
    },
    {
        "entry_number": 21,
        "pokemon_species": {
            "name": "pichu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/172/"
        }
    },
    {
        "entry_number": 22,
        "pokemon_species": {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/25/"
        }
    },
    {
        "entry_number": 23,
        "pokemon_species": {
            "name": "raichu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/26/"
        }
    },
    {
        "entry_number": 24,
        "pokemon_species": {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon-species/10/"
        }
    },
    {
        "entry_number": 25,
        "pokemon_species": {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon-species/11/"
        }
    },
    {
        "entry_number": 26,
        "pokemon_species": {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon-species/12/"
        }
    },
    {
        "entry_number": 27,
        "pokemon_species": {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon-species/13/"
        }
    },
    {
        "entry_number": 28,
        "pokemon_species": {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon-species/14/"
        }
    },
    {
        "entry_number": 29,
        "pokemon_species": {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon-species/15/"
        }
    },
    {
        "entry_number": 30,
        "pokemon_species": {
            "name": "ledyba",
            "url": "https://pokeapi.co/api/v2/pokemon-species/165/"
        }
    },
    {
        "entry_number": 31,
        "pokemon_species": {
            "name": "ledian",
            "url": "https://pokeapi.co/api/v2/pokemon-species/166/"
        }
    },
    {
        "entry_number": 32,
        "pokemon_species": {
            "name": "spinarak",
            "url": "https://pokeapi.co/api/v2/pokemon-species/167/"
        }
    },
    {
        "entry_number": 33,
        "pokemon_species": {
            "name": "ariados",
            "url": "https://pokeapi.co/api/v2/pokemon-species/168/"
        }
    },
    {
        "entry_number": 34,
        "pokemon_species": {
            "name": "geodude",
            "url": "https://pokeapi.co/api/v2/pokemon-species/74/"
        }
    },
    {
        "entry_number": 35,
        "pokemon_species": {
            "name": "graveler",
            "url": "https://pokeapi.co/api/v2/pokemon-species/75/"
        }
    },
    {
        "entry_number": 36,
        "pokemon_species": {
            "name": "golem",
            "url": "https://pokeapi.co/api/v2/pokemon-species/76/"
        }
    },
    {
        "entry_number": 37,
        "pokemon_species": {
            "name": "zubat",
            "url": "https://pokeapi.co/api/v2/pokemon-species/41/"
        }
    },
    {
        "entry_number": 38,
        "pokemon_species": {
            "name": "golbat",
            "url": "https://pokeapi.co/api/v2/pokemon-species/42/"
        }
    },
    {
        "entry_number": 39,
        "pokemon_species": {
            "name": "crobat",
            "url": "https://pokeapi.co/api/v2/pokemon-species/169/"
        }
    },
    {
        "entry_number": 40,
        "pokemon_species": {
            "name": "cleffa",
            "url": "https://pokeapi.co/api/v2/pokemon-species/173/"
        }
    },
    {
        "entry_number": 41,
        "pokemon_species": {
            "name": "clefairy",
            "url": "https://pokeapi.co/api/v2/pokemon-species/35/"
        }
    },
    {
        "entry_number": 42,
        "pokemon_species": {
            "name": "clefable",
            "url": "https://pokeapi.co/api/v2/pokemon-species/36/"
        }
    },
    {
        "entry_number": 43,
        "pokemon_species": {
            "name": "igglybuff",
            "url": "https://pokeapi.co/api/v2/pokemon-species/174/"
        }
    },
    {
        "entry_number": 44,
        "pokemon_species": {
            "name": "jigglypuff",
            "url": "https://pokeapi.co/api/v2/pokemon-species/39/"
        }
    },
    {
        "entry_number": 45,
        "pokemon_species": {
            "name": "wigglytuff",
            "url": "https://pokeapi.co/api/v2/pokemon-species/40/"
        }
    },
    {
        "entry_number": 46,
        "pokemon_species": {
            "name": "togepi",
            "url": "https://pokeapi.co/api/v2/pokemon-species/175/"
        }
    },
    {
        "entry_number": 47,
        "pokemon_species": {
            "name": "togetic",
            "url": "https://pokeapi.co/api/v2/pokemon-species/176/"
        }
    },
    {
        "entry_number": 48,
        "pokemon_species": {
            "name": "sandshrew",
            "url": "https://pokeapi.co/api/v2/pokemon-species/27/"
        }
    },
    {
        "entry_number": 49,
        "pokemon_species": {
            "name": "sandslash",
            "url": "https://pokeapi.co/api/v2/pokemon-species/28/"
        }
    },
    {
        "entry_number": 50,
        "pokemon_species": {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon-species/23/"
        }
    },
    {
        "entry_number": 51,
        "pokemon_species": {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon-species/24/"
        }
    },
    {
        "entry_number": 52,
        "pokemon_species": {
            "name": "dunsparce",
            "url": "https://pokeapi.co/api/v2/pokemon-species/206/"
        }
    },
    {
        "entry_number": 53,
        "pokemon_species": {
            "name": "mareep",
            "url": "https://pokeapi.co/api/v2/pokemon-species/179/"
        }
    },
    {
        "entry_number": 54,
        "pokemon_species": {
            "name": "flaaffy",
            "url": "https://pokeapi.co/api/v2/pokemon-species/180/"
        }
    },
    {
        "entry_number": 55,
        "pokemon_species": {
            "name": "ampharos",
            "url": "https://pokeapi.co/api/v2/pokemon-species/181/"
        }
    },
    {
        "entry_number": 56,
        "pokemon_species": {
            "name": "wooper",
            "url": "https://pokeapi.co/api/v2/pokemon-species/194/"
        }
    },
    {
        "entry_number": 57,
        "pokemon_species": {
            "name": "quagsire",
            "url": "https://pokeapi.co/api/v2/pokemon-species/195/"
        }
    },
    {
        "entry_number": 58,
        "pokemon_species": {
            "name": "gastly",
            "url": "https://pokeapi.co/api/v2/pokemon-species/92/"
        }
    },
    {
        "entry_number": 59,
        "pokemon_species": {
            "name": "haunter",
            "url": "https://pokeapi.co/api/v2/pokemon-species/93/"
        }
    },
    {
        "entry_number": 60,
        "pokemon_species": {
            "name": "gengar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/94/"
        }
    },
    {
        "entry_number": 61,
        "pokemon_species": {
            "name": "unown",
            "url": "https://pokeapi.co/api/v2/pokemon-species/201/"
        }
    },
    {
        "entry_number": 62,
        "pokemon_species": {
            "name": "onix",
            "url": "https://pokeapi.co/api/v2/pokemon-species/95/"
        }
    },
    {
        "entry_number": 63,
        "pokemon_species": {
            "name": "steelix",
            "url": "https://pokeapi.co/api/v2/pokemon-species/208/"
        }
    },
    {
        "entry_number": 64,
        "pokemon_species": {
            "name": "bellsprout",
            "url": "https://pokeapi.co/api/v2/pokemon-species/69/"
        }
    },
    {
        "entry_number": 65,
        "pokemon_species": {
            "name": "weepinbell",
            "url": "https://pokeapi.co/api/v2/pokemon-species/70/"
        }
    },
    {
        "entry_number": 66,
        "pokemon_species": {
            "name": "victreebel",
            "url": "https://pokeapi.co/api/v2/pokemon-species/71/"
        }
    },
    {
        "entry_number": 67,
        "pokemon_species": {
            "name": "hoppip",
            "url": "https://pokeapi.co/api/v2/pokemon-species/187/"
        }
    },
    {
        "entry_number": 68,
        "pokemon_species": {
            "name": "skiploom",
            "url": "https://pokeapi.co/api/v2/pokemon-species/188/"
        }
    },
    {
        "entry_number": 69,
        "pokemon_species": {
            "name": "jumpluff",
            "url": "https://pokeapi.co/api/v2/pokemon-species/189/"
        }
    },
    {
        "entry_number": 70,
        "pokemon_species": {
            "name": "paras",
            "url": "https://pokeapi.co/api/v2/pokemon-species/46/"
        }
    },
    {
        "entry_number": 71,
        "pokemon_species": {
            "name": "parasect",
            "url": "https://pokeapi.co/api/v2/pokemon-species/47/"
        }
    },
    {
        "entry_number": 72,
        "pokemon_species": {
            "name": "poliwag",
            "url": "https://pokeapi.co/api/v2/pokemon-species/60/"
        }
    },
    {
        "entry_number": 73,
        "pokemon_species": {
            "name": "poliwhirl",
            "url": "https://pokeapi.co/api/v2/pokemon-species/61/"
        }
    },
    {
        "entry_number": 74,
        "pokemon_species": {
            "name": "poliwrath",
            "url": "https://pokeapi.co/api/v2/pokemon-species/62/"
        }
    },
    {
        "entry_number": 75,
        "pokemon_species": {
            "name": "politoed",
            "url": "https://pokeapi.co/api/v2/pokemon-species/186/"
        }
    },
    {
        "entry_number": 76,
        "pokemon_species": {
            "name": "magikarp",
            "url": "https://pokeapi.co/api/v2/pokemon-species/129/"
        }
    },
    {
        "entry_number": 77,
        "pokemon_species": {
            "name": "gyarados",
            "url": "https://pokeapi.co/api/v2/pokemon-species/130/"
        }
    },
    {
        "entry_number": 78,
        "pokemon_species": {
            "name": "goldeen",
            "url": "https://pokeapi.co/api/v2/pokemon-species/118/"
        }
    },
    {
        "entry_number": 79,
        "pokemon_species": {
            "name": "seaking",
            "url": "https://pokeapi.co/api/v2/pokemon-species/119/"
        }
    },
    {
        "entry_number": 80,
        "pokemon_species": {
            "name": "slowpoke",
            "url": "https://pokeapi.co/api/v2/pokemon-species/79/"
        }
    },
    {
        "entry_number": 81,
        "pokemon_species": {
            "name": "slowbro",
            "url": "https://pokeapi.co/api/v2/pokemon-species/80/"
        }
    },
    {
        "entry_number": 82,
        "pokemon_species": {
            "name": "slowking",
            "url": "https://pokeapi.co/api/v2/pokemon-species/199/"
        }
    },
    {
        "entry_number": 83,
        "pokemon_species": {
            "name": "oddish",
            "url": "https://pokeapi.co/api/v2/pokemon-species/43/"
        }
    },
    {
        "entry_number": 84,
        "pokemon_species": {
            "name": "gloom",
            "url": "https://pokeapi.co/api/v2/pokemon-species/44/"
        }
    },
    {
        "entry_number": 85,
        "pokemon_species": {
            "name": "vileplume",
            "url": "https://pokeapi.co/api/v2/pokemon-species/45/"
        }
    },
    {
        "entry_number": 86,
        "pokemon_species": {
            "name": "bellossom",
            "url": "https://pokeapi.co/api/v2/pokemon-species/182/"
        }
    },
    {
        "entry_number": 87,
        "pokemon_species": {
            "name": "drowzee",
            "url": "https://pokeapi.co/api/v2/pokemon-species/96/"
        }
    },
    {
        "entry_number": 88,
        "pokemon_species": {
            "name": "hypno",
            "url": "https://pokeapi.co/api/v2/pokemon-species/97/"
        }
    },
    {
        "entry_number": 89,
        "pokemon_species": {
            "name": "abra",
            "url": "https://pokeapi.co/api/v2/pokemon-species/63/"
        }
    },
    {
        "entry_number": 90,
        "pokemon_species": {
            "name": "kadabra",
            "url": "https://pokeapi.co/api/v2/pokemon-species/64/"
        }
    },
    {
        "entry_number": 91,
        "pokemon_species": {
            "name": "alakazam",
            "url": "https://pokeapi.co/api/v2/pokemon-species/65/"
        }
    },
    {
        "entry_number": 92,
        "pokemon_species": {
            "name": "ditto",
            "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
        }
    },
    {
        "entry_number": 93,
        "pokemon_species": {
            "name": "pineco",
            "url": "https://pokeapi.co/api/v2/pokemon-species/204/"
        }
    },
    {
        "entry_number": 94,
        "pokemon_species": {
            "name": "forretress",
            "url": "https://pokeapi.co/api/v2/pokemon-species/205/"
        }
    },
    {
        "entry_number": 95,
        "pokemon_species": {
            "name": "nidoran-f",
            "url": "https://pokeapi.co/api/v2/pokemon-species/29/"
        }
    },
    {
        "entry_number": 96,
        "pokemon_species": {
            "name": "nidorina",
            "url": "https://pokeapi.co/api/v2/pokemon-species/30/"
        }
    },
    {
        "entry_number": 97,
        "pokemon_species": {
            "name": "nidoqueen",
            "url": "https://pokeapi.co/api/v2/pokemon-species/31/"
        }
    },
    {
        "entry_number": 98,
        "pokemon_species": {
            "name": "nidoran-m",
            "url": "https://pokeapi.co/api/v2/pokemon-species/32/"
        }
    },
    {
        "entry_number": 99,
        "pokemon_species": {
            "name": "nidorino",
            "url": "https://pokeapi.co/api/v2/pokemon-species/33/"
        }
    },
    {
        "entry_number": 100,
        "pokemon_species": {
            "name": "nidoking",
            "url": "https://pokeapi.co/api/v2/pokemon-species/34/"
        }
    },
    {
        "entry_number": 101,
        "pokemon_species": {
            "name": "yanma",
            "url": "https://pokeapi.co/api/v2/pokemon-species/193/"
        }
    },
    {
        "entry_number": 102,
        "pokemon_species": {
            "name": "sunkern",
            "url": "https://pokeapi.co/api/v2/pokemon-species/191/"
        }
    },
    {
        "entry_number": 103,
        "pokemon_species": {
            "name": "sunflora",
            "url": "https://pokeapi.co/api/v2/pokemon-species/192/"
        }
    },
    {
        "entry_number": 104,
        "pokemon_species": {
            "name": "exeggcute",
            "url": "https://pokeapi.co/api/v2/pokemon-species/102/"
        }
    },
    {
        "entry_number": 105,
        "pokemon_species": {
            "name": "exeggutor",
            "url": "https://pokeapi.co/api/v2/pokemon-species/103/"
        }
    },
    {
        "entry_number": 106,
        "pokemon_species": {
            "name": "sudowoodo",
            "url": "https://pokeapi.co/api/v2/pokemon-species/185/"
        }
    },
    {
        "entry_number": 107,
        "pokemon_species": {
            "name": "wobbuffet",
            "url": "https://pokeapi.co/api/v2/pokemon-species/202/"
        }
    },
    {
        "entry_number": 108,
        "pokemon_species": {
            "name": "venonat",
            "url": "https://pokeapi.co/api/v2/pokemon-species/48/"
        }
    },
    {
        "entry_number": 109,
        "pokemon_species": {
            "name": "venomoth",
            "url": "https://pokeapi.co/api/v2/pokemon-species/49/"
        }
    },
    {
        "entry_number": 110,
        "pokemon_species": {
            "name": "scyther",
            "url": "https://pokeapi.co/api/v2/pokemon-species/123/"
        }
    },
    {
        "entry_number": 111,
        "pokemon_species": {
            "name": "scizor",
            "url": "https://pokeapi.co/api/v2/pokemon-species/212/"
        }
    },
    {
        "entry_number": 112,
        "pokemon_species": {
            "name": "pinsir",
            "url": "https://pokeapi.co/api/v2/pokemon-species/127/"
        }
    },
    {
        "entry_number": 113,
        "pokemon_species": {
            "name": "heracross",
            "url": "https://pokeapi.co/api/v2/pokemon-species/214/"
        }
    },
    {
        "entry_number": 114,
        "pokemon_species": {
            "name": "koffing",
            "url": "https://pokeapi.co/api/v2/pokemon-species/109/"
        }
    },
    {
        "entry_number": 115,
        "pokemon_species": {
            "name": "weezing",
            "url": "https://pokeapi.co/api/v2/pokemon-species/110/"
        }
    },
    {
        "entry_number": 116,
        "pokemon_species": {
            "name": "grimer",
            "url": "https://pokeapi.co/api/v2/pokemon-species/88/"
        }
    },
    {
        "entry_number": 117,
        "pokemon_species": {
            "name": "muk",
            "url": "https://pokeapi.co/api/v2/pokemon-species/89/"
        }
    },
    {
        "entry_number": 118,
        "pokemon_species": {
            "name": "magnemite",
            "url": "https://pokeapi.co/api/v2/pokemon-species/81/"
        }
    },
    {
        "entry_number": 119,
        "pokemon_species": {
            "name": "magneton",
            "url": "https://pokeapi.co/api/v2/pokemon-species/82/"
        }
    },
    {
        "entry_number": 120,
        "pokemon_species": {
            "name": "voltorb",
            "url": "https://pokeapi.co/api/v2/pokemon-species/100/"
        }
    },
    {
        "entry_number": 121,
        "pokemon_species": {
            "name": "electrode",
            "url": "https://pokeapi.co/api/v2/pokemon-species/101/"
        }
    },
    {
        "entry_number": 122,
        "pokemon_species": {
            "name": "aipom",
            "url": "https://pokeapi.co/api/v2/pokemon-species/190/"
        }
    },
    {
        "entry_number": 123,
        "pokemon_species": {
            "name": "snubbull",
            "url": "https://pokeapi.co/api/v2/pokemon-species/209/"
        }
    },
    {
        "entry_number": 124,
        "pokemon_species": {
            "name": "granbull",
            "url": "https://pokeapi.co/api/v2/pokemon-species/210/"
        }
    },
    {
        "entry_number": 125,
        "pokemon_species": {
            "name": "vulpix",
            "url": "https://pokeapi.co/api/v2/pokemon-species/37/"
        }
    },
    {
        "entry_number": 126,
        "pokemon_species": {
            "name": "ninetales",
            "url": "https://pokeapi.co/api/v2/pokemon-species/38/"
        }
    },
    {
        "entry_number": 127,
        "pokemon_species": {
            "name": "growlithe",
            "url": "https://pokeapi.co/api/v2/pokemon-species/58/"
        }
    },
    {
        "entry_number": 128,
        "pokemon_species": {
            "name": "arcanine",
            "url": "https://pokeapi.co/api/v2/pokemon-species/59/"
        }
    },
    {
        "entry_number": 129,
        "pokemon_species": {
            "name": "stantler",
            "url": "https://pokeapi.co/api/v2/pokemon-species/234/"
        }
    },
    {
        "entry_number": 130,
        "pokemon_species": {
            "name": "marill",
            "url": "https://pokeapi.co/api/v2/pokemon-species/183/"
        }
    },
    {
        "entry_number": 131,
        "pokemon_species": {
            "name": "azumarill",
            "url": "https://pokeapi.co/api/v2/pokemon-species/184/"
        }
    },
    {
        "entry_number": 132,
        "pokemon_species": {
            "name": "diglett",
            "url": "https://pokeapi.co/api/v2/pokemon-species/50/"
        }
    },
    {
        "entry_number": 133,
        "pokemon_species": {
            "name": "dugtrio",
            "url": "https://pokeapi.co/api/v2/pokemon-species/51/"
        }
    },
    {
        "entry_number": 134,
        "pokemon_species": {
            "name": "mankey",
            "url": "https://pokeapi.co/api/v2/pokemon-species/56/"
        }
    },
    {
        "entry_number": 135,
        "pokemon_species": {
            "name": "primeape",
            "url": "https://pokeapi.co/api/v2/pokemon-species/57/"
        }
    },
    {
        "entry_number": 136,
        "pokemon_species": {
            "name": "meowth",
            "url": "https://pokeapi.co/api/v2/pokemon-species/52/"
        }
    },
    {
        "entry_number": 137,
        "pokemon_species": {
            "name": "persian",
            "url": "https://pokeapi.co/api/v2/pokemon-species/53/"
        }
    },
    {
        "entry_number": 138,
        "pokemon_species": {
            "name": "psyduck",
            "url": "https://pokeapi.co/api/v2/pokemon-species/54/"
        }
    },
    {
        "entry_number": 139,
        "pokemon_species": {
            "name": "golduck",
            "url": "https://pokeapi.co/api/v2/pokemon-species/55/"
        }
    },
    {
        "entry_number": 140,
        "pokemon_species": {
            "name": "machop",
            "url": "https://pokeapi.co/api/v2/pokemon-species/66/"
        }
    },
    {
        "entry_number": 141,
        "pokemon_species": {
            "name": "machoke",
            "url": "https://pokeapi.co/api/v2/pokemon-species/67/"
        }
    },
    {
        "entry_number": 142,
        "pokemon_species": {
            "name": "machamp",
            "url": "https://pokeapi.co/api/v2/pokemon-species/68/"
        }
    },
    {
        "entry_number": 143,
        "pokemon_species": {
            "name": "tyrogue",
            "url": "https://pokeapi.co/api/v2/pokemon-species/236/"
        }
    },
    {
        "entry_number": 144,
        "pokemon_species": {
            "name": "hitmonlee",
            "url": "https://pokeapi.co/api/v2/pokemon-species/106/"
        }
    },
    {
        "entry_number": 145,
        "pokemon_species": {
            "name": "hitmonchan",
            "url": "https://pokeapi.co/api/v2/pokemon-species/107/"
        }
    },
    {
        "entry_number": 146,
        "pokemon_species": {
            "name": "hitmontop",
            "url": "https://pokeapi.co/api/v2/pokemon-species/237/"
        }
    },
    {
        "entry_number": 147,
        "pokemon_species": {
            "name": "girafarig",
            "url": "https://pokeapi.co/api/v2/pokemon-species/203/"
        }
    },
    {
        "entry_number": 148,
        "pokemon_species": {
            "name": "tauros",
            "url": "https://pokeapi.co/api/v2/pokemon-species/128/"
        }
    },
    {
        "entry_number": 149,
        "pokemon_species": {
            "name": "miltank",
            "url": "https://pokeapi.co/api/v2/pokemon-species/241/"
        }
    },
    {
        "entry_number": 150,
        "pokemon_species": {
            "name": "magby",
            "url": "https://pokeapi.co/api/v2/pokemon-species/240/"
        }
    },
    {
        "entry_number": 151,
        "pokemon_species": {
            "name": "magmar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/126/"
        }
    },
    {
        "entry_number": 152,
        "pokemon_species": {
            "name": "smoochum",
            "url": "https://pokeapi.co/api/v2/pokemon-species/238/"
        }
    },
    {
        "entry_number": 153,
        "pokemon_species": {
            "name": "jynx",
            "url": "https://pokeapi.co/api/v2/pokemon-species/124/"
        }
    },
    {
        "entry_number": 154,
        "pokemon_species": {
            "name": "elekid",
            "url": "https://pokeapi.co/api/v2/pokemon-species/239/"
        }
    },
    {
        "entry_number": 155,
        "pokemon_species": {
            "name": "electabuzz",
            "url": "https://pokeapi.co/api/v2/pokemon-species/125/"
        }
    },
    {
        "entry_number": 156,
        "pokemon_species": {
            "name": "mr-mime",
            "url": "https://pokeapi.co/api/v2/pokemon-species/122/"
        }
    },
    {
        "entry_number": 157,
        "pokemon_species": {
            "name": "smeargle",
            "url": "https://pokeapi.co/api/v2/pokemon-species/235/"
        }
    },
    {
        "entry_number": 158,
        "pokemon_species": {
            "name": "farfetchd",
            "url": "https://pokeapi.co/api/v2/pokemon-species/83/"
        }
    },
    {
        "entry_number": 159,
        "pokemon_species": {
            "name": "natu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/177/"
        }
    },
    {
        "entry_number": 160,
        "pokemon_species": {
            "name": "xatu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/178/"
        }
    },
    {
        "entry_number": 161,
        "pokemon_species": {
            "name": "qwilfish",
            "url": "https://pokeapi.co/api/v2/pokemon-species/211/"
        }
    },
    {
        "entry_number": 162,
        "pokemon_species": {
            "name": "tentacool",
            "url": "https://pokeapi.co/api/v2/pokemon-species/72/"
        }
    },
    {
        "entry_number": 163,
        "pokemon_species": {
            "name": "tentacruel",
            "url": "https://pokeapi.co/api/v2/pokemon-species/73/"
        }
    },
    {
        "entry_number": 164,
        "pokemon_species": {
            "name": "krabby",
            "url": "https://pokeapi.co/api/v2/pokemon-species/98/"
        }
    },
    {
        "entry_number": 165,
        "pokemon_species": {
            "name": "kingler",
            "url": "https://pokeapi.co/api/v2/pokemon-species/99/"
        }
    },
    {
        "entry_number": 166,
        "pokemon_species": {
            "name": "shuckle",
            "url": "https://pokeapi.co/api/v2/pokemon-species/213/"
        }
    },
    {
        "entry_number": 167,
        "pokemon_species": {
            "name": "staryu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/120/"
        }
    },
    {
        "entry_number": 168,
        "pokemon_species": {
            "name": "starmie",
            "url": "https://pokeapi.co/api/v2/pokemon-species/121/"
        }
    },
    {
        "entry_number": 169,
        "pokemon_species": {
            "name": "shellder",
            "url": "https://pokeapi.co/api/v2/pokemon-species/90/"
        }
    },
    {
        "entry_number": 170,
        "pokemon_species": {
            "name": "cloyster",
            "url": "https://pokeapi.co/api/v2/pokemon-species/91/"
        }
    },
    {
        "entry_number": 171,
        "pokemon_species": {
            "name": "corsola",
            "url": "https://pokeapi.co/api/v2/pokemon-species/222/"
        }
    },
    {
        "entry_number": 172,
        "pokemon_species": {
            "name": "remoraid",
            "url": "https://pokeapi.co/api/v2/pokemon-species/223/"
        }
    },
    {
        "entry_number": 173,
        "pokemon_species": {
            "name": "octillery",
            "url": "https://pokeapi.co/api/v2/pokemon-species/224/"
        }
    },
    {
        "entry_number": 174,
        "pokemon_species": {
            "name": "chinchou",
            "url": "https://pokeapi.co/api/v2/pokemon-species/170/"
        }
    },
    {
        "entry_number": 175,
        "pokemon_species": {
            "name": "lanturn",
            "url": "https://pokeapi.co/api/v2/pokemon-species/171/"
        }
    },
    {
        "entry_number": 176,
        "pokemon_species": {
            "name": "seel",
            "url": "https://pokeapi.co/api/v2/pokemon-species/86/"
        }
    },
    {
        "entry_number": 177,
        "pokemon_species": {
            "name": "dewgong",
            "url": "https://pokeapi.co/api/v2/pokemon-species/87/"
        }
    },
    {
        "entry_number": 178,
        "pokemon_species": {
            "name": "lickitung",
            "url": "https://pokeapi.co/api/v2/pokemon-species/108/"
        }
    },
    {
        "entry_number": 179,
        "pokemon_species": {
            "name": "tangela",
            "url": "https://pokeapi.co/api/v2/pokemon-species/114/"
        }
    },
    {
        "entry_number": 180,
        "pokemon_species": {
            "name": "eevee",
            "url": "https://pokeapi.co/api/v2/pokemon-species/133/"
        }
    },
    {
        "entry_number": 181,
        "pokemon_species": {
            "name": "vaporeon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/134/"
        }
    },
    {
        "entry_number": 182,
        "pokemon_species": {
            "name": "jolteon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/135/"
        }
    },
    {
        "entry_number": 183,
        "pokemon_species": {
            "name": "flareon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/136/"
        }
    },
    {
        "entry_number": 184,
        "pokemon_species": {
            "name": "espeon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/196/"
        }
    },
    {
        "entry_number": 185,
        "pokemon_species": {
            "name": "umbreon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/197/"
        }
    },
    {
        "entry_number": 186,
        "pokemon_species": {
            "name": "horsea",
            "url": "https://pokeapi.co/api/v2/pokemon-species/116/"
        }
    },
    {
        "entry_number": 187,
        "pokemon_species": {
            "name": "seadra",
            "url": "https://pokeapi.co/api/v2/pokemon-species/117/"
        }
    },
    {
        "entry_number": 188,
        "pokemon_species": {
            "name": "kingdra",
            "url": "https://pokeapi.co/api/v2/pokemon-species/230/"
        }
    },
    {
        "entry_number": 189,
        "pokemon_species": {
            "name": "gligar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/207/"
        }
    },
    {
        "entry_number": 190,
        "pokemon_species": {
            "name": "delibird",
            "url": "https://pokeapi.co/api/v2/pokemon-species/225/"
        }
    },
    {
        "entry_number": 191,
        "pokemon_species": {
            "name": "swinub",
            "url": "https://pokeapi.co/api/v2/pokemon-species/220/"
        }
    },
    {
        "entry_number": 192,
        "pokemon_species": {
            "name": "piloswine",
            "url": "https://pokeapi.co/api/v2/pokemon-species/221/"
        }
    },
    {
        "entry_number": 193,
        "pokemon_species": {
            "name": "teddiursa",
            "url": "https://pokeapi.co/api/v2/pokemon-species/216/"
        }
    },
    {
        "entry_number": 194,
        "pokemon_species": {
            "name": "ursaring",
            "url": "https://pokeapi.co/api/v2/pokemon-species/217/"
        }
    },
    {
        "entry_number": 195,
        "pokemon_species": {
            "name": "phanpy",
            "url": "https://pokeapi.co/api/v2/pokemon-species/231/"
        }
    },
    {
        "entry_number": 196,
        "pokemon_species": {
            "name": "donphan",
            "url": "https://pokeapi.co/api/v2/pokemon-species/232/"
        }
    },
    {
        "entry_number": 197,
        "pokemon_species": {
            "name": "mantine",
            "url": "https://pokeapi.co/api/v2/pokemon-species/226/"
        }
    },
    {
        "entry_number": 198,
        "pokemon_species": {
            "name": "skarmory",
            "url": "https://pokeapi.co/api/v2/pokemon-species/227/"
        }
    },
    {
        "entry_number": 199,
        "pokemon_species": {
            "name": "doduo",
            "url": "https://pokeapi.co/api/v2/pokemon-species/84/"
        }
    },
    {
        "entry_number": 200,
        "pokemon_species": {
            "name": "dodrio",
            "url": "https://pokeapi.co/api/v2/pokemon-species/85/"
        }
    },
    {
        "entry_number": 201,
        "pokemon_species": {
            "name": "ponyta",
            "url": "https://pokeapi.co/api/v2/pokemon-species/77/"
        }
    },
    {
        "entry_number": 202,
        "pokemon_species": {
            "name": "rapidash",
            "url": "https://pokeapi.co/api/v2/pokemon-species/78/"
        }
    },
    {
        "entry_number": 203,
        "pokemon_species": {
            "name": "cubone",
            "url": "https://pokeapi.co/api/v2/pokemon-species/104/"
        }
    },
    {
        "entry_number": 204,
        "pokemon_species": {
            "name": "marowak",
            "url": "https://pokeapi.co/api/v2/pokemon-species/105/"
        }
    },
    {
        "entry_number": 205,
        "pokemon_species": {
            "name": "kangaskhan",
            "url": "https://pokeapi.co/api/v2/pokemon-species/115/"
        }
    },
    {
        "entry_number": 206,
        "pokemon_species": {
            "name": "rhyhorn",
            "url": "https://pokeapi.co/api/v2/pokemon-species/111/"
        }
    },
    {
        "entry_number": 207,
        "pokemon_species": {
            "name": "rhydon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/112/"
        }
    },
    {
        "entry_number": 208,
        "pokemon_species": {
            "name": "murkrow",
            "url": "https://pokeapi.co/api/v2/pokemon-species/198/"
        }
    },
    {
        "entry_number": 209,
        "pokemon_species": {
            "name": "houndour",
            "url": "https://pokeapi.co/api/v2/pokemon-species/228/"
        }
    },
    {
        "entry_number": 210,
        "pokemon_species": {
            "name": "houndoom",
            "url": "https://pokeapi.co/api/v2/pokemon-species/229/"
        }
    },
    {
        "entry_number": 211,
        "pokemon_species": {
            "name": "slugma",
            "url": "https://pokeapi.co/api/v2/pokemon-species/218/"
        }
    },
    {
        "entry_number": 212,
        "pokemon_species": {
            "name": "magcargo",
            "url": "https://pokeapi.co/api/v2/pokemon-species/219/"
        }
    },
    {
        "entry_number": 213,
        "pokemon_species": {
            "name": "sneasel",
            "url": "https://pokeapi.co/api/v2/pokemon-species/215/"
        }
    },
    {
        "entry_number": 214,
        "pokemon_species": {
            "name": "misdreavus",
            "url": "https://pokeapi.co/api/v2/pokemon-species/200/"
        }
    },
    {
        "entry_number": 215,
        "pokemon_species": {
            "name": "porygon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/137/"
        }
    },
    {
        "entry_number": 216,
        "pokemon_species": {
            "name": "porygon2",
            "url": "https://pokeapi.co/api/v2/pokemon-species/233/"
        }
    },
    {
        "entry_number": 217,
        "pokemon_species": {
            "name": "chansey",
            "url": "https://pokeapi.co/api/v2/pokemon-species/113/"
        }
    },
    {
        "entry_number": 218,
        "pokemon_species": {
            "name": "blissey",
            "url": "https://pokeapi.co/api/v2/pokemon-species/242/"
        }
    },
    {
        "entry_number": 219,
        "pokemon_species": {
            "name": "lapras",
            "url": "https://pokeapi.co/api/v2/pokemon-species/131/"
        }
    },
    {
        "entry_number": 220,
        "pokemon_species": {
            "name": "omanyte",
            "url": "https://pokeapi.co/api/v2/pokemon-species/138/"
        }
    },
    {
        "entry_number": 221,
        "pokemon_species": {
            "name": "omastar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/139/"
        }
    },
    {
        "entry_number": 222,
        "pokemon_species": {
            "name": "kabuto",
            "url": "https://pokeapi.co/api/v2/pokemon-species/140/"
        }
    },
    {
        "entry_number": 223,
        "pokemon_species": {
            "name": "kabutops",
            "url": "https://pokeapi.co/api/v2/pokemon-species/141/"
        }
    },
    {
        "entry_number": 224,
        "pokemon_species": {
            "name": "aerodactyl",
            "url": "https://pokeapi.co/api/v2/pokemon-species/142/"
        }
    },
    {
        "entry_number": 225,
        "pokemon_species": {
            "name": "snorlax",
            "url": "https://pokeapi.co/api/v2/pokemon-species/143/"
        }
    },
    {
        "entry_number": 226,
        "pokemon_species": {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
        }
    },
    {
        "entry_number": 227,
        "pokemon_species": {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
        }
    },
    {
        "entry_number": 228,
        "pokemon_species": {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
        }
    },
    {
        "entry_number": 229,
        "pokemon_species": {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon-species/4/"
        }
    },
    {
        "entry_number": 230,
        "pokemon_species": {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/5/"
        }
    },
    {
        "entry_number": 231,
        "pokemon_species": {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon-species/6/"
        }
    },
    {
        "entry_number": 232,
        "pokemon_species": {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon-species/7/"
        }
    },
    {
        "entry_number": 233,
        "pokemon_species": {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon-species/8/"
        }
    },
    {
        "entry_number": 234,
        "pokemon_species": {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon-species/9/"
        }
    },
    {
        "entry_number": 235,
        "pokemon_species": {
            "name": "articuno",
            "url": "https://pokeapi.co/api/v2/pokemon-species/144/"
        }
    },
    {
        "entry_number": 236,
        "pokemon_species": {
            "name": "zapdos",
            "url": "https://pokeapi.co/api/v2/pokemon-species/145/"
        }
    },
    {
        "entry_number": 237,
        "pokemon_species": {
            "name": "moltres",
            "url": "https://pokeapi.co/api/v2/pokemon-species/146/"
        }
    },
    {
        "entry_number": 238,
        "pokemon_species": {
            "name": "raikou",
            "url": "https://pokeapi.co/api/v2/pokemon-species/243/"
        }
    },
    {
        "entry_number": 239,
        "pokemon_species": {
            "name": "entei",
            "url": "https://pokeapi.co/api/v2/pokemon-species/244/"
        }
    },
    {
        "entry_number": 240,
        "pokemon_species": {
            "name": "suicune",
            "url": "https://pokeapi.co/api/v2/pokemon-species/245/"
        }
    },
    {
        "entry_number": 241,
        "pokemon_species": {
            "name": "dratini",
            "url": "https://pokeapi.co/api/v2/pokemon-species/147/"
        }
    },
    {
        "entry_number": 242,
        "pokemon_species": {
            "name": "dragonair",
            "url": "https://pokeapi.co/api/v2/pokemon-species/148/"
        }
    },
    {
        "entry_number": 243,
        "pokemon_species": {
            "name": "dragonite",
            "url": "https://pokeapi.co/api/v2/pokemon-species/149/"
        }
    },
    {
        "entry_number": 244,
        "pokemon_species": {
            "name": "larvitar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/246/"
        }
    },
    {
        "entry_number": 245,
        "pokemon_species": {
            "name": "pupitar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/247/"
        }
    },
    {
        "entry_number": 246,
        "pokemon_species": {
            "name": "tyranitar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/248/"
        }
    },
    {
        "entry_number": 247,
        "pokemon_species": {
            "name": "lugia",
            "url": "https://pokeapi.co/api/v2/pokemon-species/249/"
        }
    },
    {
        "entry_number": 248,
        "pokemon_species": {
            "name": "ho-oh",
            "url": "https://pokeapi.co/api/v2/pokemon-species/250/"
        }
    },
    {
        "entry_number": 249,
        "pokemon_species": {
            "name": "mewtwo",
            "url": "https://pokeapi.co/api/v2/pokemon-species/150/"
        }
    },
    {
        "entry_number": 250,
        "pokemon_species": {
            "name": "mew",
            "url": "https://pokeapi.co/api/v2/pokemon-species/151/"
        }
    },
    {
        "entry_number": 251,
        "pokemon_species": {
            "name": "celebi",
            "url": "https://pokeapi.co/api/v2/pokemon-species/251/"
        }
    }
];

let rseDexGen3 =  ""

let frlgDexGen3 =  ""

let dpDexGen4 = ""

let ptDexGen4 = ""

let bwDexGen5 = ""

let bw2DexGen5 = ""

//function to get new pokedex with no extra data

async function getAPIInfo() {
    let call = await fetch('https://pokeapi.co/api/v2/pokedex/2');
    let data = await call.json();
    console.log(data);
};