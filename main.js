let availablePokemon = [];

let teamMember1Image = document.querySelector('#team-member-1-image');

async function getAvailablePokemon() {
    let generationCall = await fetch('https://pokeapi.co/api/v2/generation/1/')
    let generationData = await generationCall.json();
    console.log(generationData)
    availablePokemon = generationData.pokemon_species;
    console.log(availablePokemon)
    displayAvailablePokemon()
};

async function displayAvailablePokemon() {
    for (let i = 0; i < 1; i++) {
        let pokemon = availablePokemon[i].name;
        let pokemonFull = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        let pokemonData = await pokemonFull.json();
        console.log(pokemonData)
        teamMember1Image.src =  pokemonData.sprites.versions['generation-i']['red-blue'].front_default; 
    };
}

async function callPokemon() {
console.log('hello')
}

getAvailablePokemon()
