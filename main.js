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

let darkMode = false;

// DOM Setup

let body = document.querySelector('body');

let darkModeButton = document.querySelector('#dark-mode-button');

let team = document.querySelector('#team');

let pokedex = document.querySelector('#pokedex');

// function setup, global variables

let selectedGeneration = generation1Pokemon;

// Get the offset position of the team window
let sticky = team.offsetTop;

//functions

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.addEventListener("scroll", stickyTeamWindow);
function stickyTeamWindow() {
  if (window.pageYOffset > sticky) {
    team.classList.add("sticky");
    console.log('hello')
    console.log(window)
  } else {
    team.classList.remove("sticky");
  }
}

//dark mode
darkModeButton.addEventListener('click', darkModeToggle);
function darkModeToggle() {
    console.log('hello')
    if (darkMode === false) {
        body.classList.add('dark-mode');
        darkMode = true;
    } else if (darkMode === true) {
        body.classList.remove('dark-mode')
        darkMode = false;
    };
};

// pokemon/pokedex load in

function displayAvailablePokemon() {
    for (let i = 0; i < selectedGeneration.length; i++) {
        let pokedexEntry = document.createElement('div');
        pokedexEntry.classList.add('pokedex-entry')
        pokedexEntry.setAttribute('data-id', `${selectedGeneration[i].id}`)
        pokedexEntry.style.backgroundColor = `var(--${selectedGeneration[i].types[0].type.name})`;
        let pokedexImage = document.createElement('img');
        pokedexImage.classList.add('pokedex-image')
        pokedexImage.src = selectedGeneration[i].image
        pokedexImage.alt = selectedGeneration[i].name
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
            let position = i;
            updateTeam(position);
            break
        } else if (i === 5 && teamMembers[i].name != "") {
            console.log('team full, remove one first')
        };
    };
};

function updateTeam(position) {
    let teamMember = teamMembers[position];
    let teamMemberCard = document.createElement('div');
    teamMemberCard.classList.add('team-member');
    teamMemberCard.style.backgroundColor = `var(--${teamMember.types[0].type.name})`;
    let teamMemberImage = document.createElement('img');
    teamMemberImage.classList.add('team-member-image')
    teamMemberImage.src = teamMember.image;
    teamMemberImage.alt = teamMember.name;
    let teamMemberName = document.createElement('p');
    teamMemberName.textContent = teamMember.name;
    let teamMemberType1 = document.createElement('p');
    teamMemberType1.textContent = teamMember.types[0].type.name;
    teamMemberType1.classList.add('type')
    teamMemberType1.style.backgroundColor = `var(--${teamMember.types[0].type.name})`;
    team.appendChild(teamMemberCard);
    teamMemberCard.appendChild(teamMemberImage)
    teamMemberCard.appendChild(teamMemberName)
    teamMemberCard.appendChild(teamMemberType1)
    try {
        if (typeof teamMember.types[1].type.name !== undefined) {
        let teamMemberType2 = document.createElement('p');
        teamMemberType2.textContent = teamMember.types[1].type.name;
        teamMemberType2.classList.add('type')
        teamMemberType2.style.backgroundColor = `var(--${teamMember.types[1].type.name})`;
        teamMemberCard.appendChild(teamMemberType2)
        }
    } catch(err) {
        // just to stop an error going to the console when no second type exists
    };
};

//run on load
displayAvailablePokemon()
darkModeToggle()

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