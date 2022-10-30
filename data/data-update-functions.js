async function updatePokedexInfo() {
    for (let i = 0; i < gen3frlgDex.length; i++) {
        let pokemonName = gen3frlgDex[i].pokemon_species.name
        let apiString = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
        let data = await fetch(apiString);
        let jsonData = await data.json();
        let natDexID = jsonData.id
        gen3frlgDex[i].name = pokemonName;
        gen3frlgDex[i].national_dex_id = natDexID;
        gen3frlgDex[i].types = jsonData.types;
        gen3frlgDex[i].sprite = `../images/sprites/pokemon/versions/generation-iii/firered-leafgreen/${natDexID}.png`
        delete gen3frlgDex[i].pokemon_species
    };
    console.log(gen3frlgDex)
};

//use this function once when setting up new generation to add in the HMs for that generation to each pokemon 
async function setHMSlots() {
    for (let i = 0; i < dex.length; i++) {
        console.log(dex[i])
        dex[i].hms = [
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
            }
        ];
    }
    console.log(dex)
};

// use this function to complete hm data for a specific HM. Should set up HM array first with previous function.
async function getHMData() {
  for (let x = 0; x < dex[0].hms.length; x++) {
    let data = await fetch(`https://pokeapi.co/api/v2/move/${dex[0].hms[x].name}/`);
    let jsonData = await data.json();
    for (let i = 0; i < dex.length; i++) {
        let name = dex[i].name;
        for (let j = 0; j < jsonData.learned_by_pokemon.length; j++) {
            if (jsonData.learned_by_pokemon[j].name === name) {
                dex[i].hms[x].can_learn = true;
                break;
            } else {
              dex[i].hms[x].can_learn = false;
            }
        }
    }
  }
    console.log(dex);
};


async function updateRockSmash() {
    for (let i = 0; i < dex.length; i++) {
      dex[i].hms[5].name = "rock-smash";
    }
    console.log(dex);
};

//function to get new pokedex from PokeAPI with no extra data
async function getNewPokedex() {
    let call = await fetch('https://pokeapi.co/api/v2/pokedex/2');
    let data = await call.json();
    console.log(data);
};

//copy dex I'm working on updating here
let dex = [];