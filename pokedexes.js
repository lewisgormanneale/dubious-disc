/* async function updateObject() {
    for (let i = 0; generation1Pokemon.length; i++) {
        let name = generation1Pokemon[i].name;
        let uncapitalizedName = name.toLowerCase(); 
        let apiString = `https://pokeapi.co/api/v2/pokemon/${uncapitalizedName}/`
        console.log(apiString)
        let data = await fetch(apiString);
        let jsonData = await data.json();
        generation1Pokemon[i].types = jsonData.types;
    };
    console.log(generation1Pokemon)
};

*/ 

let generation1Pokemon = [
    {
        "name": "Bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "id": 1,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png",
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
        ]
    },
    {
        "name": "Ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "id": 2,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/2.png",
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
        ]
    },
    {
        "name": "Venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "id": 3,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/3.png",
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
        ]
    },
    {
        "name": "Charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/",
        "id": 4,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/4.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/",
        "id": 5,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/5.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/",
        "id": 6,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/6.png",
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
        ]
    },
    {
        "name": "Squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/",
        "id": 7,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/7.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/",
        "id": 8,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/8.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/",
        "id": 9,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/9.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/",
        "id": 10,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/10.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "Metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/",
        "id": 11,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/11.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "Butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/",
        "id": 12,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/12.png",
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
        ]
    },
    {
        "name": "Weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/",
        "id": 13,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/13.png",
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
        ]
    },
    {
        "name": "Kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/",
        "id": 14,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/14.png",
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
        ]
    },
    {
        "name": "Beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/",
        "id": 15,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/15.png",
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
        ]
    },
    {
        "name": "Pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/",
        "id": 16,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/16.png",
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
        ]
    },
    {
        "name": "Pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/",
        "id": 17,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/17.png",
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
        ]
    },
    {
        "name": "Pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/",
        "id": 18,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/18.png",
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
        ]
    },
    {
        "name": "Rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/",
        "id": 19,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/19.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/",
        "id": 20,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/20.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Spearow",
        "url": "https://pokeapi.co/api/v2/pokemon/21/",
        "id": 21,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/21.png",
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
        ]
    },
    {
        "name": "Fearow",
        "url": "https://pokeapi.co/api/v2/pokemon/22/",
        "id": 22,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/22.png",
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
        ]
    },
    {
        "name": "Ekans",
        "url": "https://pokeapi.co/api/v2/pokemon/23/",
        "id": 23,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/23.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Arbok",
        "url": "https://pokeapi.co/api/v2/pokemon/24/",
        "id": 24,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/24.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Pikachu",
        "url": "https://pokeapi.co/api/v2/pokemon/25/",
        "id": 25,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "Raichu",
        "url": "https://pokeapi.co/api/v2/pokemon/26/",
        "id": 26,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/26.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "Sandshrew",
        "url": "https://pokeapi.co/api/v2/pokemon/27/",
        "id": 27,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/27.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "Sandslash",
        "url": "https://pokeapi.co/api/v2/pokemon/28/",
        "id": 28,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/28.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "Nidoran-F",
        "url": "https://pokeapi.co/api/v2/pokemon/29/",
        "id": 29,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/29.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Nidorina",
        "url": "https://pokeapi.co/api/v2/pokemon/30/",
        "id": 30,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/30.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Nidoqueen",
        "url": "https://pokeapi.co/api/v2/pokemon/31/",
        "id": 31,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/31.png",
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
        ]
    },
    {
        "name": "Nidoran-M",
        "url": "https://pokeapi.co/api/v2/pokemon/32/",
        "id": 32,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/32.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Nidorino",
        "url": "https://pokeapi.co/api/v2/pokemon/33/",
        "id": 33,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/33.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Nidoking",
        "url": "https://pokeapi.co/api/v2/pokemon/34/",
        "id": 34,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/34.png",
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
        ]
    },
    {
        "name": "Clefairy",
        "url": "https://pokeapi.co/api/v2/pokemon/35/",
        "id": 35,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/35.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "Clefable",
        "url": "https://pokeapi.co/api/v2/pokemon/36/",
        "id": 36,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/36.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "Vulpix",
        "url": "https://pokeapi.co/api/v2/pokemon/37/",
        "id": 37,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/37.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Ninetales",
        "url": "https://pokeapi.co/api/v2/pokemon/38/",
        "id": 38,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/38.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Jigglypuff",
        "url": "https://pokeapi.co/api/v2/pokemon/39/",
        "id": 39,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/39.png",
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
        ]
    },
    {
        "name": "Wigglytuff",
        "url": "https://pokeapi.co/api/v2/pokemon/40/",
        "id": 40,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/40.png",
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
        ]
    },
    {
        "name": "Zubat",
        "url": "https://pokeapi.co/api/v2/pokemon/41/",
        "id": 41,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/41.png",
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
        ]
    },
    {
        "name": "Golbat",
        "url": "https://pokeapi.co/api/v2/pokemon/42/",
        "id": 42,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/42.png",
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
        ]
    },
    {
        "name": "Oddish",
        "url": "https://pokeapi.co/api/v2/pokemon/43/",
        "id": 43,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/43.png",
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
        ]
    },
    {
        "name": "Gloom",
        "url": "https://pokeapi.co/api/v2/pokemon/44/",
        "id": 44,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/44.png",
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
        ]
    },
    {
        "name": "Vileplume",
        "url": "https://pokeapi.co/api/v2/pokemon/45/",
        "id": 45,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/45.png",
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
        ]
    },
    {
        "name": "Paras",
        "url": "https://pokeapi.co/api/v2/pokemon/46/",
        "id": 46,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/46.png",
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
        ]
    },
    {
        "name": "Parasect",
        "url": "https://pokeapi.co/api/v2/pokemon/47/",
        "id": 47,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/47.png",
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
        ]
    },
    {
        "name": "Venonat",
        "url": "https://pokeapi.co/api/v2/pokemon/48/",
        "id": 48,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/48.png",
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
        ]
    },
    {
        "name": "Venomoth",
        "url": "https://pokeapi.co/api/v2/pokemon/49/",
        "id": 49,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/49.png",
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
        ]
    },
    {
        "name": "Diglett",
        "url": "https://pokeapi.co/api/v2/pokemon/50/",
        "id": 50,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/50.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "Dugtrio",
        "url": "https://pokeapi.co/api/v2/pokemon/51/",
        "id": 51,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/51.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "Meowth",
        "url": "https://pokeapi.co/api/v2/pokemon/52/",
        "id": 52,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/52.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Persian",
        "url": "https://pokeapi.co/api/v2/pokemon/53/",
        "id": 53,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/53.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Psyduck",
        "url": "https://pokeapi.co/api/v2/pokemon/54/",
        "id": 54,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/54.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Golduck",
        "url": "https://pokeapi.co/api/v2/pokemon/55/",
        "id": 55,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/55.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Mankey",
        "url": "https://pokeapi.co/api/v2/pokemon/56/",
        "id": 56,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/56.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "Primeape",
        "url": "https://pokeapi.co/api/v2/pokemon/57/",
        "id": 57,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/57.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "Growlithe",
        "url": "https://pokeapi.co/api/v2/pokemon/58/",
        "id": 58,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/58.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Arcanine",
        "url": "https://pokeapi.co/api/v2/pokemon/59/",
        "id": 59,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/59.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Poliwag",
        "url": "https://pokeapi.co/api/v2/pokemon/60/",
        "id": 60,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/60.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Poliwhirl",
        "url": "https://pokeapi.co/api/v2/pokemon/61/",
        "id": 61,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/61.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Poliwrath",
        "url": "https://pokeapi.co/api/v2/pokemon/62/",
        "id": 62,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/62.png",
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
        ]
    },
    {
        "name": "Abra",
        "url": "https://pokeapi.co/api/v2/pokemon/63/",
        "id": 63,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/63.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "Kadabra",
        "url": "https://pokeapi.co/api/v2/pokemon/64/",
        "id": 64,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/64.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "Alakazam",
        "url": "https://pokeapi.co/api/v2/pokemon/65/",
        "id": 65,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/65.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "Machop",
        "url": "https://pokeapi.co/api/v2/pokemon/66/",
        "id": 66,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/66.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "Machoke",
        "url": "https://pokeapi.co/api/v2/pokemon/67/",
        "id": 67,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/67.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "Machamp",
        "url": "https://pokeapi.co/api/v2/pokemon/68/",
        "id": 68,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/68.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "Bellsprout",
        "url": "https://pokeapi.co/api/v2/pokemon/69/",
        "id": 69,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/69.png",
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
        ]
    },
    {
        "name": "Weepinbell",
        "url": "https://pokeapi.co/api/v2/pokemon/70/",
        "id": 70,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/70.png",
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
        ]
    },
    {
        "name": "Victreebel",
        "url": "https://pokeapi.co/api/v2/pokemon/71/",
        "id": 71,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/71.png",
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
        ]
    },
    {
        "name": "Tentacool",
        "url": "https://pokeapi.co/api/v2/pokemon/72/",
        "id": 72,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/72.png",
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
        ]
    },
    {
        "name": "Tentacruel",
        "url": "https://pokeapi.co/api/v2/pokemon/73/",
        "id": 73,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/73.png",
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
        ]
    },
    {
        "name": "Geodude",
        "url": "https://pokeapi.co/api/v2/pokemon/74/",
        "id": 74,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/74.png",
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
        ]
    },
    {
        "name": "Graveler",
        "url": "https://pokeapi.co/api/v2/pokemon/75/",
        "id": 75,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/75.png",
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
        ]
    },
    {
        "name": "Golem",
        "url": "https://pokeapi.co/api/v2/pokemon/76/",
        "id": 76,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/76.png",
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
        ]
    },
    {
        "name": "Ponyta",
        "url": "https://pokeapi.co/api/v2/pokemon/77/",
        "id": 77,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/77.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Rapidash",
        "url": "https://pokeapi.co/api/v2/pokemon/78/",
        "id": 78,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/78.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Slowpoke",
        "url": "https://pokeapi.co/api/v2/pokemon/79/",
        "id": 79,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/79.png",
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
        ]
    },
    {
        "name": "Slowbro",
        "url": "https://pokeapi.co/api/v2/pokemon/80/",
        "id": 80,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/80.png",
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
        ]
    },
    {
        "name": "Magnemite",
        "url": "https://pokeapi.co/api/v2/pokemon/81/",
        "id": 81,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/81.png",
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
        ]
    },
    {
        "name": "Magneton",
        "url": "https://pokeapi.co/api/v2/pokemon/82/",
        "id": 82,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/82.png",
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
        ]
    },
    {
        "name": "Farfetchd",
        "url": "https://pokeapi.co/api/v2/pokemon/83/",
        "id": 83,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/83.png",
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
        ]
    },
    {
        "name": "Doduo",
        "url": "https://pokeapi.co/api/v2/pokemon/84/",
        "id": 84,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/84.png",
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
        ]
    },
    {
        "name": "Dodrio",
        "url": "https://pokeapi.co/api/v2/pokemon/85/",
        "id": 85,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/85.png",
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
        ]
    },
    {
        "name": "Seel",
        "url": "https://pokeapi.co/api/v2/pokemon/86/",
        "id": 86,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/86.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Dewgong",
        "url": "https://pokeapi.co/api/v2/pokemon/87/",
        "id": 87,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/87.png",
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
        ]
    },
    {
        "name": "Grimer",
        "url": "https://pokeapi.co/api/v2/pokemon/88/",
        "id": 88,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/88.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Muk",
        "url": "https://pokeapi.co/api/v2/pokemon/89/",
        "id": 89,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/89.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Shellder",
        "url": "https://pokeapi.co/api/v2/pokemon/90/",
        "id": 90,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/90.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Cloyster",
        "url": "https://pokeapi.co/api/v2/pokemon/91/",
        "id": 91,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/91.png",
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
        ]
    },
    {
        "name": "Gastly",
        "url": "https://pokeapi.co/api/v2/pokemon/92/",
        "id": 92,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/92.png",
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
        ]
    },
    {
        "name": "Haunter",
        "url": "https://pokeapi.co/api/v2/pokemon/93/",
        "id": 93,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/93.png",
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
        ]
    },
    {
        "name": "Gengar",
        "url": "https://pokeapi.co/api/v2/pokemon/94/",
        "id": 94,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/94.png",
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
        ]
    },
    {
        "name": "Onix",
        "url": "https://pokeapi.co/api/v2/pokemon/95/",
        "id": 95,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/95.png",
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
        ]
    },
    {
        "name": "Drowzee",
        "url": "https://pokeapi.co/api/v2/pokemon/96/",
        "id": 96,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/96.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "Hypno",
        "url": "https://pokeapi.co/api/v2/pokemon/97/",
        "id": 97,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/97.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "Krabby",
        "url": "https://pokeapi.co/api/v2/pokemon/98/",
        "id": 98,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/98.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Kingler",
        "url": "https://pokeapi.co/api/v2/pokemon/99/",
        "id": 99,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/99.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Voltorb",
        "url": "https://pokeapi.co/api/v2/pokemon/100/",
        "id": 100,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/100.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "Electrode",
        "url": "https://pokeapi.co/api/v2/pokemon/101/",
        "id": 101,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/101.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "Exeggcute",
        "url": "https://pokeapi.co/api/v2/pokemon/102/",
        "id": 102,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/102.png",
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
        ]
    },
    {
        "name": "Exeggutor",
        "url": "https://pokeapi.co/api/v2/pokemon/103/",
        "id": 103,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/103.png",
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
        ]
    },
    {
        "name": "Cubone",
        "url": "https://pokeapi.co/api/v2/pokemon/104/",
        "id": 104,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/104.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "Marowak",
        "url": "https://pokeapi.co/api/v2/pokemon/105/",
        "id": 105,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/105.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "Hitmonlee",
        "url": "https://pokeapi.co/api/v2/pokemon/106/",
        "id": 106,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/106.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "Hitmonchan",
        "url": "https://pokeapi.co/api/v2/pokemon/107/",
        "id": 107,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/107.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "Lickitung",
        "url": "https://pokeapi.co/api/v2/pokemon/108/",
        "id": 108,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/108.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Koffing",
        "url": "https://pokeapi.co/api/v2/pokemon/109/",
        "id": 109,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/109.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Weezing",
        "url": "https://pokeapi.co/api/v2/pokemon/110/",
        "id": 110,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/110.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "Rhyhorn",
        "url": "https://pokeapi.co/api/v2/pokemon/111/",
        "id": 111,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/111.png",
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
        ]
    },
    {
        "name": "Rhydon",
        "url": "https://pokeapi.co/api/v2/pokemon/112/",
        "id": 112,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/112.png",
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
        ]
    },
    {
        "name": "Chansey",
        "url": "https://pokeapi.co/api/v2/pokemon/113/",
        "id": 113,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/113.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Tangela",
        "url": "https://pokeapi.co/api/v2/pokemon/114/",
        "id": 114,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/114.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "Kangaskhan",
        "url": "https://pokeapi.co/api/v2/pokemon/115/",
        "id": 115,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/115.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Horsea",
        "url": "https://pokeapi.co/api/v2/pokemon/116/",
        "id": 116,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/116.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Seadra",
        "url": "https://pokeapi.co/api/v2/pokemon/117/",
        "id": 117,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/117.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Goldeen",
        "url": "https://pokeapi.co/api/v2/pokemon/118/",
        "id": 118,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/118.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Seaking",
        "url": "https://pokeapi.co/api/v2/pokemon/119/",
        "id": 119,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/119.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Staryu",
        "url": "https://pokeapi.co/api/v2/pokemon/120/",
        "id": 120,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/120.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Starmie",
        "url": "https://pokeapi.co/api/v2/pokemon/121/",
        "id": 121,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/121.png",
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
        ]
    },
    {
        "name": "Mr-Mime",
        "url": "https://pokeapi.co/api/v2/pokemon/122/",
        "id": 122,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/122.png",
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
        ]
    },
    {
        "name": "Scyther",
        "url": "https://pokeapi.co/api/v2/pokemon/123/",
        "id": 123,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/123.png",
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
        ]
    },
    {
        "name": "Jynx",
        "url": "https://pokeapi.co/api/v2/pokemon/124/",
        "id": 124,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/124.png",
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
        ]
    },
    {
        "name": "Electabuzz",
        "url": "https://pokeapi.co/api/v2/pokemon/125/",
        "id": 125,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/125.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "Magmar",
        "url": "https://pokeapi.co/api/v2/pokemon/126/",
        "id": 126,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/126.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Pinsir",
        "url": "https://pokeapi.co/api/v2/pokemon/127/",
        "id": 127,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/127.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "Tauros",
        "url": "https://pokeapi.co/api/v2/pokemon/128/",
        "id": 128,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/128.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Magikarp",
        "url": "https://pokeapi.co/api/v2/pokemon/129/",
        "id": 129,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/129.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Gyarados",
        "url": "https://pokeapi.co/api/v2/pokemon/130/",
        "id": 130,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/130.png",
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
        ]
    },
    {
        "name": "Lapras",
        "url": "https://pokeapi.co/api/v2/pokemon/131/",
        "id": 131,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/131.png",
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
        ]
    },
    {
        "name": "Ditto",
        "url": "https://pokeapi.co/api/v2/pokemon/132/",
        "id": 132,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/132.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Eevee",
        "url": "https://pokeapi.co/api/v2/pokemon/133/",
        "id": 133,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/133.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Vaporeon",
        "url": "https://pokeapi.co/api/v2/pokemon/134/",
        "id": 134,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/134.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "Jolteon",
        "url": "https://pokeapi.co/api/v2/pokemon/135/",
        "id": 135,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/135.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "Flareon",
        "url": "https://pokeapi.co/api/v2/pokemon/136/",
        "id": 136,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/136.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "Porygon",
        "url": "https://pokeapi.co/api/v2/pokemon/137/",
        "id": 137,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/137.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Omanyte",
        "url": "https://pokeapi.co/api/v2/pokemon/138/",
        "id": 138,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/138.png",
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
        ]
    },
    {
        "name": "Omastar",
        "url": "https://pokeapi.co/api/v2/pokemon/139/",
        "id": 139,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/139.png",
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
        ]
    },
    {
        "name": "Kabuto",
        "url": "https://pokeapi.co/api/v2/pokemon/140/",
        "id": 140,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/140.png",
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
        ]
    },
    {
        "name": "Kabutops",
        "url": "https://pokeapi.co/api/v2/pokemon/141/",
        "id": 141,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/141.png",
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
        ]
    },
    {
        "name": "Aerodactyl",
        "url": "https://pokeapi.co/api/v2/pokemon/142/",
        "id": 142,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/142.png",
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
        ]
    },
    {
        "name": "Snorlax",
        "url": "https://pokeapi.co/api/v2/pokemon/143/",
        "id": 143,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/143.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "Articuno",
        "url": "https://pokeapi.co/api/v2/pokemon/144/",
        "id": 144,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/144.png",
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
        ]
    },
    {
        "name": "Zapdos",
        "url": "https://pokeapi.co/api/v2/pokemon/145/",
        "id": 145,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/145.png",
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
        ]
    },
    {
        "name": "Moltres",
        "url": "https://pokeapi.co/api/v2/pokemon/146/",
        "id": 146,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/146.png",
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
        ]
    },
    {
        "name": "Dratini",
        "url": "https://pokeapi.co/api/v2/pokemon/147/",
        "id": 147,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/147.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "Dragonair",
        "url": "https://pokeapi.co/api/v2/pokemon/148/",
        "id": 148,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/148.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "Dragonite",
        "url": "https://pokeapi.co/api/v2/pokemon/149/",
        "id": 149,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/149.png",
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
        ]
    },
    {
        "name": "Mewtwo",
        "url": "https://pokeapi.co/api/v2/pokemon/150/",
        "id": 150,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/150.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "Mew",
        "url": "https://pokeapi.co/api/v2/pokemon/151/",
        "id": 151,
        "image": "images/sprites/pokemon/versions/generation-i/red-blue/transparent/151.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    }
]