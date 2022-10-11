let teamMembers = [
    {
        "name": "",
        "url": "",
        "id": 0,
        "image": "images/sprites/pokemon/0.png",
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
        "name": "",
        "url": "",
        "id": 0,
        "image": "images/sprites/pokemon/0.png",
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
        "name": "",
        "url": "",
        "id": 0,
        "image": "images/sprites/pokemon/0.png",
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
        "name": "",
        "url": "",
        "id": 0,
        "image": "images/sprites/pokemon/0.png",
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
        "name": "",
        "url": "",
        "id": 0,
        "image": "images/sprites/pokemon/0.png",
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
        "name": "",
        "url": "",
        "id": 0,
        "image": "images/sprites/pokemon/0.png",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    }
];

// DOM Setup

let team = document.querySelector('#team');

let teamMember1 = document.querySelector('#team-member-1');
let teamMember2 = document.querySelector('#team-member-2');
let teamMember3 = document.querySelector('#team-member-3');
let teamMember4 = document.querySelector('#team-member-4');
let teamMember5 = document.querySelector('#team-member-5');
let teamMember6 = document.querySelector('#team-member-6');

let teamMember1Name = document.querySelector('#team-member-1-name');
let teamMember2Name = document.querySelector('#team-member-2-name');
let teamMember3Name = document.querySelector('#team-member-3-name');
let teamMember4Name = document.querySelector('#team-member-4-name');
let teamMember5Name = document.querySelector('#team-member-5-name');
let teamMember6Name = document.querySelector('#team-member-6-name');

let teamMember1Image = document.querySelector('#team-member-1-image');
let teamMember2Image = document.querySelector('#team-member-2-image');
let teamMember3Image = document.querySelector('#team-member-3-image');
let teamMember4Image = document.querySelector('#team-member-4-image');
let teamMember5Image = document.querySelector('#team-member-5-image');
let teamMember6Image = document.querySelector('#team-member-6-image');

let teamMember1Type1 = document.querySelector('#team-member-1-type-1');
let teamMember2Type1 = document.querySelector('#team-member-2-type-1');
let teamMember3Type1 = document.querySelector('#team-member-3-type-1');
let teamMember4Type1 = document.querySelector('#team-member-4-type-1');
let teamMember5Type1 = document.querySelector('#team-member-5-type-1');
let teamMember6Type1 = document.querySelector('#team-member-6-type-1');

let teamMember1Type2 = document.querySelector('#team-member-1-type-2');
let teamMember2Type2 = document.querySelector('#team-member-2-type-2');
let teamMember3Type2 = document.querySelector('#team-member-3-type-2');
let teamMember4Type2 = document.querySelector('#team-member-4-type-2');
let teamMember5Type2 = document.querySelector('#team-member-5-type-2');
let teamMember6Type2 = document.querySelector('#team-member-6-type-2');

let pokedex = document.querySelector('#pokedex');

// function setup, global variables

let selectedGeneration = generation1Pokemon;

// Get the offset position of the team window
let sticky = team.offsetTop;

//functions
window.addEventListener("scroll", stickyTeamWindow);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTeamWindow() {
  if (window.pageYOffset > sticky) {
    team.classList.add("sticky");
    console.log('hello')
    console.log(window)
  } else {
    team.classList.remove("sticky");
  }
}

function displayAvailablePokemon() {
    for (let i = 0; i < selectedGeneration.length; i++) {
        let pokedexEntry = document.createElement('div');
        pokedexEntry.classList.add('pokedex-entry')
        pokedexEntry.setAttribute('data-id', `${selectedGeneration[i].id}`)
        pokedexEntry.style.backgroundColor = `var(--${selectedGeneration[i].types[0].type.name})`;
        let pokedexImage = document.createElement('img');
        pokedexImage.classList.add('pokedex-image')
        pokedexImage.src = selectedGeneration[i].image
        pokedexImage.ondragstart = function () { return false; };
        let pokedexName = document.createElement('p');
        pokedexName.classList.add('pokedex-name')
        pokedexName.textContent = selectedGeneration[i].name;
        let pokedexID = document.createElement('p');
        pokedexID.classList.add('pokedex-id');
        pokedexID.textContent = `#${selectedGeneration[i].id}`;
        pokedex.appendChild(pokedexEntry);
        pokedexEntry.addEventListener('click', addToTeam)
        pokedexEntry.appendChild(pokedexImage);
        pokedexEntry.appendChild(pokedexName);
        pokedexEntry.appendChild(pokedexID);
        
    };
};

function addToTeam() {
    let id = (this.getAttribute('data-id') - 1)
    let selectedPokemon = selectedGeneration[id]
    for (let i = 0; i < 6; i++) {
        if (teamMembers[i].name === "") {
            teamMembers[i] = selectedPokemon;
            break
        } else if (i === 5 && teamMembers[i].name != "") {
            console.log('team full, remove one first')
        };
    };
    console.log(teamMembers)
    updateTeam();
};

function updateTeam() {
    teamMember1Name.textContent = teamMembers[0].name;
    teamMember1Image.src = teamMembers[0].image;
    teamMember1.style.backgroundColor = `var(--${teamMembers[0].types[0].type.name})`;
    teamMember2Name.textContent = teamMembers[1].name;
    teamMember2Image.src = teamMembers[1].image;
    teamMember2.style.backgroundColor = `var(--${teamMembers[1].types[0].type.name})`;
    teamMember3Name.textContent = teamMembers[2].name;
    teamMember3Image.src = teamMembers[2].image;
    teamMember3.style.backgroundColor = `var(--${teamMembers[2].types[0].type.name})`;
    teamMember4Name.textContent = teamMembers[3].name;
    teamMember4Image.src = teamMembers[3].image;
    teamMember4.style.backgroundColor = `var(--${teamMembers[3].types[0].type.name})`;
    teamMember5Name.textContent = teamMembers[4].name;
    teamMember5Image.src = teamMembers[4].image;
    teamMember5.style.backgroundColor = `var(--${teamMembers[4].types[0].type.name})`;
    teamMember6Name.textContent = teamMembers[5].name;
    teamMember6Image.src = teamMembers[5].image;
    teamMember6.style.backgroundColor = `var(--${teamMembers[5].types[0].type.name})`;
};

//run on load
updateTeam();
displayAvailablePokemon()

/* 
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