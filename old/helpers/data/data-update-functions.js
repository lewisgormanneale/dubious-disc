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
        dex[i].sprite = `../images/sprites/pokemon/versions/generation-v/black-white/${natDexID}.png`
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
            'name': 'waterfall',
            'can_learn': false
        },
        {
            'name': 'dive',
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

async function updateTypes() {
    for (let i = 0; i < types.length; i++) {
        let url = types[i].url
        let apiString = `${url}`
        let data = await fetch(apiString);
        let jsonData = await data.json();
        types[i].damage_relations = jsonData.damage_relations;
    }
    console.log(types)
}

async function addExtraData() {
    for (let i = 0; i < dex.length; i++) {
        console.log(i)
        let pokemonName = dex[i].name
        let apiString = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
        let data = await fetch(apiString);
        let jsonData = await data.json();
        dex[i].shiny_sprite = `./images/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/${dex[i].national_dex_id}.png`
        dex[i].gender_rate = jsonData.gender_rate;
    };
    console.log(dex)
}

async function addExtraData4Up() {
  for (let i = 0; i < dex.length; i++) {
      console.log(i)
      let pokemonName = dex[i].name
      let apiString = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
      let data = await fetch(apiString);
      let jsonData = await data.json();
      dex[i].varieties = jsonData.varieties;
      dex[i].shiny_sprite = `./images/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/${dex[i].national_dex_id}.png`
      //chance of being female in eighths, or -1 for genderless
      dex[i].gender_rate = jsonData.gender_rate;
      dex[i].has_gender_differences = jsonData.has_gender_differences;
      if (dex[i].has_gender_differences === true) {
          dex[i].female_sprite = `./images/sprites/pokemon/versions/generation-iii/ruby-sapphire/female/${dex[i].national_dex_id}.png`
          dex[i].shiny_female_sprite = `./images/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/${dex[i].national_dex_id}.png`
      };
  };
  console.log(dex)
}

//copy dex I'm working on updating here
let dex = [];