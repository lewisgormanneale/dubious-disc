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
    for (let i = 0; i < gscDexGen2.length; i++) {
        let pokemonName = gscDexGen2[i].pokemon_species.name
        let apiString = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
        let data = await fetch(apiString);
        let jsonData = await data.json();
        let natDexID = jsonData.id
        gscDexGen2[i].name = pokemonName;
        gscDexGen2[i].national_dex_id = natDexID;
        gscDexGen2[i].types = jsonData.types;
        gscDexGen2[i].sprite = `images/sprites/pokemon/versions/generation-ii/crystal/transparent/${natDexID}.png`
        delete gscDexGen2[i].pokemon_species
    };
    console.log(gscDexGen2)
};


//use this function once when setting up new generation to add in the HMs for that generation to each pokemon 
async function setHMSlots() {
    for (let i = 0; i < gscDexGen2.length; i++) {
        console.log(gscDexGen2[i])
        gscDexGen2[i].hms = [
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
                'name': 'whirlpool',
                'can_learn': false
            },
            {
                'name': 'waterfall',
                'can_learn': false
            }
        ];
    }
    console.log(gscDexGen2)
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
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
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
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
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
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
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
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
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
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
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
        ]
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
        ]
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
                "can_learn": false
            },
            {
                "name": "surf",
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
                "can_learn": false
            },
            {
                "name": "surf",
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
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
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
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
                "can_learn": false
            },
            {
                "name": "fly",
                "can_learn": false
            },
            {
                "name": "surf",
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
            },
            {
                "name": "flash",
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
                "can_learn": false
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
];

let rseDexGen3 =  ""

let frlgDexGen3 =  ""

let dpDexGen4 = ""

let ptDexGen4 = ""

let bwDexGen5 = ""

let bw2DexGen5 = ""


//function to get new pokedex from PokeAPI with no extra data

async function getNewPokedex() {
    let call = await fetch('https://pokeapi.co/api/v2/pokedex/2');
    let data = await call.json();
    console.log(data);
};