async function updatePokedexInfo() {
    for (let i = 0; i < dex.length; i++) {
        let pokemonName = dex[i].pokemon_species.name
        let apiString = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
        let data = await fetch(apiString);
        let jsonData = await data.json();
        let natDexID = jsonData.id
        dex[i].name = pokemonName;
        dex[i].national_dex_id = natDexID;
        dex[i].types = jsonData.types;
        dex[i].sprite = `../images/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${natDexID}.png`
        delete dex[i].pokemon_species
    };
    console.log(dex)
};

// function to set hm slots and then check if learnable. Need to check hm array and update manually before running.
async function getHMData() {
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
            'name': 'whirlpool',
            'can_learn': false
        },
        {
            'name': 'rock-smash',
            'can_learn': false
        },
        {
            'name': 'waterfall',
            'can_learn': false
        },
        {
          'name': 'rock-climb',
          'can_learn': false
        }
    ];
  }
  for (let x = 0; x < dex[0].hms.length; x++) {
    console.log('hello')
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

//function to get new pokedex from PokeAPI with no extra data
async function getNewPokedex() {
    let call = await fetch('https://pokeapi.co/api/v2/pokedex/2');
    let data = await call.json();
    console.log(data);
};

//copy dex I'm working on updating here
let dex = []