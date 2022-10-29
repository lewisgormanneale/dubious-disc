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


function fixSpriteURL() {
    for (let i = 0; i < selectedGeneration.length; i++) {
        selectedGeneration[i].sprite = '../' + selectedGeneration[i].sprite
    };
};


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
//function to get new pokedex from PokeAPI with no extra data

async function getNewPokedex() {
    let call = await fetch('https://pokeapi.co/api/v2/pokedex/4');
    let data = await call.json();
    console.log(data);
};