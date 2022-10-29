// DOM Setup

let body = document.querySelector('body');
let darkModeButton = document.querySelector('#dark-mode-button');
let team = document.querySelector('#team');
let genXOnlyButton = document.querySelector('#gen-x-only-button');
let pokedex = document.querySelector('#pokedex');
let pokedexEntries = document.querySelectorAll('.pokedex-entry');

// function setup, global variables
let darkMode = false;
let selectedGeneration = rbyDexGen1;
let teamMembers = [
    {
        "entry_number": 0,
        "name": "",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/0.png",
    },
    {
        "entry_number": 0,
        "name": "",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/0.png",
    },
    {
        "entry_number": 0,
        "name": "",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/0.png",
    },
    {
        "entry_number": 0,
        "name": "",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/0.png",
    },
    {
        "entry_number": 0,
        "name": "",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/0.png",
    },
    {
        "entry_number": 0,
        "name": "",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ],
        "sprite": "images/sprites/pokemon/0.png",
    }
];
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

//navbar

function openNav() {
    document.getElementById("navbar").style.width = "33%";
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
}

//dark mode
function darkModeToggle() {
    if (darkMode === false) {
        body.classList.add('dark-mode');
        darkModeButton.textContent = 'Light Mode'
        darkMode = true;
    } else if (darkMode === true) {
        body.classList.remove('dark-mode')
        darkModeButton.textContent = 'Dark Mode'
        darkMode = false;
    };
};

// pokemon/pokedex load in

let hmCheckboxes = document.querySelectorAll(".check");

function filterHM() {
    hmCheckboxes.forEach((hm) => {
        if (!(hm.checked)) {
            let hmShow = document.querySelectorAll(`.${hm.name}`)
            for (let i = 0; i < hmShow.length; i++) {
                hmShow[i].classList.remove('invisible');
            }
        }
    })
    hmCheckboxes.forEach((hm) => {
        if (hm.checked) {
            let hmHide = document.querySelectorAll(`div:not(.${hm.name}).pokedex-entry`)
            for (let i = 0; i < hmHide.length; i++) {
                hmHide[i].classList.add('invisible');
            }
        }
    })
}
/* else {
    for (let i = 0; i < pokedexEntries.length; i++) {
        pokedexEntries[i].classList.remove('.invisible');
    }
} */

function updateGeneration(gen) {
    genXOnlyButton.classList.remove('invisible')
    switch(gen) {
        case 1:
            gen === 1;
            selectedGeneration = rbyDexGen1;
            genXOnlyButton.setAttribute('data-id', `1`);
            genXOnlyButton.classList.add('invisible')
            
            break;
        case 2:
            gen === 2;
            selectedGeneration = gscDexGen2;
            genXOnlyButton.textContent = "Gen 2 Only";
            genXOnlyButton.setAttribute('data-id', `2`);
            break;
        case 3:
            gen === 3;
            selectedGeneration = rseDexGen3;
            genXOnlyButton.textContent = "Gen 3 Only";
            genXOnlyButton.setAttribute('data-id', `3`);
            break;
    }
    console.log(selectedGeneration)
    while (pokedex.hasChildNodes()) {
        pokedex.removeChild(pokedex.firstChild);
    }
    displayAvailablePokemon();
    closeNav();
};

function displayAvailablePokemon() {
    for (let i = 0; i < selectedGeneration.length; i++) {
        let pokedexEntry = document.createElement('div');
        pokedexEntry.classList.add('pokedex-entry')
        pokedexEntry.setAttribute('data-id', `${selectedGeneration[i].entry_number}`)
        pokedexEntry.style.backgroundColor = `var(--${selectedGeneration[i].types[0].type.name})`;
        let pokedexImage = document.createElement('img');
        pokedexImage.classList.add('pokedex-image')
        pokedexImage.src = selectedGeneration[i].sprite
        pokedexImage.alt = selectedGeneration[i].name
        pokedexImage.ondragstart = function () { return false; };
        let pokedexName = document.createElement('p');
        pokedexName.classList.add('pokedex-name')
        pokedexName.textContent = selectedGeneration[i].name.charAt(0).toUpperCase() + selectedGeneration[i].name.slice(1);
        let pokedexID = document.createElement('p');
        pokedexID.classList.add('pokedex-id');
        pokedexID.textContent = `#${selectedGeneration[i].entry_number}`;
        let learnableHMs = selectedGeneration[i].hms;
        for (let j = 0; j < learnableHMs.length; j++) {
            if (learnableHMs[j].can_learn === true) {
                pokedexEntry.classList.add(`${learnableHMs[j].name}`)
            };
        };
        pokedex.appendChild(pokedexEntry);
        pokedexEntry.addEventListener('click', addToTeam)
        pokedexEntry.appendChild(pokedexImage);
        pokedexEntry.appendChild(pokedexName);
        pokedexEntry.appendChild(pokedexID);
        pokedexEntries = document.querySelectorAll('.pokedex-entry');
    };
};

function addToTeam() {
    let arrayPos = (this.getAttribute('data-id') - 1)
    let selectedPokemon = selectedGeneration[arrayPos]
    for (let i = 0; i < 6; i++) {
        if (teamMembers[i].entry_number === 0) {
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
    const teamMember = teamMembers[position];
    const teamMemberCard = document.createElement('div');
    teamMemberCard.classList.add('team-member');
    teamMemberCard.style.backgroundColor = `var(--${teamMember.types[0].type.name})`;

    const teamMemberImage = document.createElement('img');
    teamMemberImage.classList.add('team-member-image')
    teamMemberImage.src = teamMember.sprite;
    teamMemberImage.alt = teamMember.name;
    
    const teamMemberName = document.createElement('p');
    teamMemberName.textContent = teamMember.name;
    teamMemberName.textContent = teamMember.name.charAt(0).toUpperCase() + teamMemberName.textContent.slice(1)
    teamMemberName.classList.add('team-member-name');

    const teamMemberTypes = document.createElement('div');
    teamMemberImage.classList.add('types')

    const teamMemberType1 = document.createElement('p');
    teamMemberType1.textContent = teamMember.types[0].type.name;
    teamMemberType1.textContent = teamMemberType1.textContent.charAt(0).toUpperCase() + teamMemberType1.textContent.slice(1)
    teamMemberType1.classList.add('type')
    teamMemberType1.style.backgroundColor = `var(--${teamMember.types[0].type.name})`;
    
    team.appendChild(teamMemberCard);
    teamMemberCard.appendChild(teamMemberImage)
    teamMemberCard.appendChild(teamMemberName)
    teamMemberCard.appendChild(teamMemberTypes)
    teamMemberTypes.appendChild(teamMemberType1)
    if (teamMember.types[1]) {
        const teamMemberType2 = document.createElement('p');
        teamMemberType2.textContent = teamMember.types[1].type.name;
        teamMemberType2.textContent = teamMemberType2.textContent.charAt(0).toUpperCase() + teamMemberType2.textContent.slice(1)
        teamMemberType2.classList.add('type')
        teamMemberType2.style.backgroundColor = `var(--${teamMember.types[1].type.name})`;
        teamMemberTypes.appendChild(teamMemberType2)
    }
};

//option functions

function preventTypeOverlap() {

}

function genXOnly() {
    
}

//run on load
displayAvailablePokemon()
darkModeToggle()
closeNav()