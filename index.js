// DOM Setup
let body = document.querySelector('body');

let darkModeButton = document.querySelector('#dark-mode-button');

let teamAndOptions = document.querySelector('#team-and-options');
let team = document.querySelector('#team');

let genXOnlyButton = document.querySelector('#gen-x-only-button');
let pokedex = document.querySelector('#pokedex');
let pokedexEntries = document.querySelectorAll('.pokedex-entry');

const hms = document.querySelector('#hms');

// function setup, global variables
let darkMode = false;

let generationNumber = 5.5;
let selectedGeneration = '';
let data = []

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
        darkMode = true;
    } else if (darkMode === true) {
        body.classList.remove('dark-mode')
        darkMode = false;
    };
};

// pokemon/pokedex load in

async function displayAvailablePokemon() {
    for (let i = 0; i < selectedGeneration.length; i++) {
        let pokedexEntry = document.createElement('div');
        pokedexEntry.classList.add('pokemon')
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

// generation switching

async function updateGeneration(gen) {
    generationNumber = gen;
    genXOnlyButton.classList.remove('invisible')
    switch(gen) {
        case 1:
            gen === 1;
            data = await import('./data/pokedexes/gen-1-rby.js');
            selectedGeneration = data.gen1rbyDex;
            genXOnlyButton.setAttribute('data-id', `1`);
            genXOnlyButton.classList.add('invisible')
            break;
        case 2:
            gen === 2;
            data = await import('./data/pokedexes/gen-2-gsc.js');
            selectedGeneration = data.gen2gscDex;
            genXOnlyButton.textContent = "Gen 2 Only";
            genXOnlyButton.setAttribute('data-id', `2`);
            break;
        case 3:
            gen === 3;
            data = await import('./data/pokedexes/gen-3-rse.js');
            selectedGeneration = data.gen3rseDex;
            genXOnlyButton.textContent = "Gen 3 Only";
            genXOnlyButton.setAttribute('data-id', `3`);
            break;
        case 3.5:
            gen === 3.5;
            data = await import('./data/pokedexes/gen-3-frlg.js');
            selectedGeneration = data.gen3frlgDex;
            genXOnlyButton.setAttribute('data-id', `1`);
            genXOnlyButton.classList.add('invisible')
            break;
        case 4:
            gen === 4;
            data = await import('./data/pokedexes/gen-4-dp.js');
            selectedGeneration = data.gen4dpDex;
            genXOnlyButton.textContent = "Gen 4 Only";
            genXOnlyButton.setAttribute('data-id', `4`);
            break;
        case 4.1:
            gen === 4.1;
            data = await import('./data/pokedexes/gen-4-pt.js');
            selectedGeneration = data.gen4ptDex;
            genXOnlyButton.textContent = "Gen 4 Only";
            genXOnlyButton.setAttribute('data-id', `4`);
            break;
        case 4.5:
            gen === 4.5;
            data = await import('./data/pokedexes/gen-4-hgss.js');
            selectedGeneration = data.gen4hgssDex;
            genXOnlyButton.textContent = "Gen 2 Only";
            genXOnlyButton.setAttribute('data-id', `2`);
            break;
        case 5:
            gen === 5;
            data = await import('./data/pokedexes/gen-5-bw.js');
            selectedGeneration = data.gen5bwDex;
            genXOnlyButton.setAttribute('data-id', `5`);
            genXOnlyButton.classList.add('invisible')
            break;
        case 5.5:
            gen === 5.5;
            data = await import('./data/pokedexes/gen-5-bw2.js');
            selectedGeneration = data.gen5bw2Dex;
            genXOnlyButton.textContent = "Gen 5 Only";
            genXOnlyButton.setAttribute('data-id', `5`);
            break;
    }
    while (pokedex.hasChildNodes()) {
        pokedex.removeChild(pokedex.firstChild);
    }
    displayAvailablePokemon();
    populateHMs()
    closeNav();
};


// HM Checkboxes

function populateHMs() {
    // Remove existing HM checkboxes on generation switch
    while (hms.hasChildNodes()) {
        hms.removeChild(hms.firstChild);
    }
    // Populate HMs based on values found in selected generation Pokemon object
    for (let i = 0; i < selectedGeneration[0].hms.length; i++) {
        let hmInput = document.createElement('input');
        hmInput.type = 'checkbox';
        hmInput.name = selectedGeneration[0].hms[i].name.charAt(0).toUpperCase() + selectedGeneration[0].hms[i].name.slice(1);
        hmInput.value = selectedGeneration[0].hms[i].name;
        hmInput.addEventListener('click', filterHM);
        hmInput.classList.add('check')

        let hmLabel = document.createElement('label');
        hmLabel.for = hmInput.name;
        hmLabel.textContent = hmInput.name;

        hms.appendChild(hmInput)
        hms.appendChild(hmLabel)
    }
}

function filterHM() {
    let hmCheckboxes = document.querySelectorAll(".check");
    hmCheckboxes.forEach((hm) => {
        if (!(hm.checked)) {
            let hmShow = document.querySelectorAll(`.${hm.value}`)
            for (let i = 0; i < hmShow.length; i++) {
                hmShow[i].classList.remove('invisible');
            }
        }
    })
    hmCheckboxes.forEach((hm) => {
        if (hm.checked) {
            let hmHide = document.querySelectorAll(`div:not(.${hm.value}).pokedex-entry`)
            for (let i = 0; i < hmHide.length; i++) {
                hmHide[i].classList.add('invisible');
            }
        }
    })
}

//team update functionality

function addToTeam() {
    const teamMembers = document.querySelectorAll('.team-member')
    let arrayPos = 0;
    if (Math.floor(generationNumber) === 5) {
        arrayPos = (this.getAttribute('data-id'))
    } else {
        arrayPos = (this.getAttribute('data-id') - 1)
    }
    let selectedPokemon = selectedGeneration[arrayPos]
    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].className.includes('empty')) {
            updateTeam(selectedPokemon, i+1);
            break
        } else if (i === 5) {
            console.log('Team full')
        }
    };
};

function updateTeam(selectedPokemon, position) {
    const teamMemberCard = document.querySelector(`.team-member:nth-of-type(${position})`)
    teamMemberCard.classList.remove('empty')
    teamMemberCard.style.backgroundColor = `var(--${selectedPokemon.types[0].type.name})`;

    const teamMemberID = teamMemberCard.querySelector('.team-member-id-and-hms > .pokedex-id')
    teamMemberID.textContent = `#${selectedPokemon.entry_number}`

    const teamMemberImage = teamMemberCard.querySelector('.team-member-image')
    teamMemberImage.src = selectedPokemon.sprite;
    teamMemberImage.alt = selectedPokemon.name;
    
    const teamMemberName = teamMemberCard.querySelector('.pokemon-types-and-name > .team-member-name')
    teamMemberName.textContent = selectedPokemon.name;
    teamMemberName.textContent = selectedPokemon.name.charAt(0).toUpperCase() + teamMemberName.textContent.slice(1)

    const teamMemberType1 = teamMemberCard.querySelector('.pokemon-types-and-name > .primary-type')
    teamMemberType1.src = `./images/type-icons/${selectedPokemon.types[0].type.name}.svg`;
    teamMemberType1.alt = selectedPokemon.types[0].type.name;

    if (selectedPokemon.types[1]) {
        const teamMemberType2 = teamMemberCard.querySelector('.pokemon-types-and-name > .secondary-type')
        teamMemberType2.src = `./images/type-icons/${selectedPokemon.types[1].type.name}.svg`;
        teamMemberType2.alt = selectedPokemon.types[1].type.name;
    }
};

//option functions

function preventTypeOverlap() {

}

function genXOnly() {
    
}

//run on load

updateGeneration(generationNumber)

darkModeToggle()

closeNav()