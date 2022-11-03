// DOM Setup
let body = document.querySelector('body');

let darkModeButton = document.querySelector('#dark-mode-button');

let teamAndOptions = document.querySelector('#team-and-options');
const team = document.querySelector('#team');

let genXOnlyButton = document.querySelector('#gen-x-only-button');
let typeOverlapButton = document.querySelector('#type-overlap-button');
const pokedex = document.querySelector('#pokedex');

const hms = document.querySelector('#hms');

// function setup, global variables
let darkMode = false;
let generationNumber = 5.5;
let selectedGeneration = '';
let data = []
let typeOverlap = false;
let generationFilterNumber = 0
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
        const pokedexEntry = document.createElement('div');
        pokedexEntry.classList.add('pokemon')
        pokedexEntry.classList.add('pokedex-entry')
        pokedexEntry.setAttribute('data-id', `${selectedGeneration[i].entry_number}`)
        pokedexEntry.setAttribute('data-nat-id', `${selectedGeneration[i].national_dex_id}`)
        pokedexEntry.style.backgroundColor = `var(--${selectedGeneration[i].types[0].type.name})`;

        const pokemonNameAndID = document.createElement('div');
        pokemonNameAndID.classList.add('pokemon-name-and-id')

        const pokemonID = document.createElement('p');
        pokemonID.classList.add('pokemon-id');
        pokemonID.textContent = `#${selectedGeneration[i].entry_number}`;

        const pokemonName = document.createElement('p');
        pokemonName.classList.add('pokemon-name')
        pokemonName.textContent = selectedGeneration[i].name.charAt(0).toUpperCase() + selectedGeneration[i].name.slice(1);

        const pokemonImage = document.createElement('img');
        pokemonImage.classList.add('pokemon-image')
        pokemonImage.src = selectedGeneration[i].sprite
        pokemonImage.alt = selectedGeneration[i].name
        pokemonImage.ondragstart = function () { return false; };

        const pokemonType1 = document.createElement('img')
        pokemonType1.classList.add('type')
        pokemonType1.classList.add('primary-type')
        pokemonType1.src = `./images/type-icons/${selectedGeneration[i].types[0].type.name}.svg`;
        pokemonType1.alt = selectedGeneration[i].types[0].type.name;

        if (selectedGeneration[i].types[1]) {
            const pokemonType2 = document.createElement('img')
            pokemonType2.classList.add('type')
            pokemonType2.classList.add('secondary-type')
            pokemonType2.src = `./images/type-icons/${selectedGeneration[i].types[1].type.name}.svg`;
            pokemonType2.alt = selectedGeneration[i].types[1].type.name;
            pokedexEntry.appendChild(pokemonType2);
        } else {
            const pokemonType2 = document.createElement('img')
            pokemonType2.classList.add('type')
            pokemonType2.classList.add('secondary-type')
            pokemonType2.src = "";
            pokemonType2.alt = "";
            pokemonType2.classList.add('invisible')
            pokedexEntry.appendChild(pokemonType2); 
        }

        const learnableHMs = selectedGeneration[i].hms;
        for (let j = 0; j < learnableHMs.length; j++) {
            if (learnableHMs[j].can_learn === true) {
                pokedexEntry.classList.add(`${learnableHMs[j].name}`)
            };
        };

        
        pokedexEntry.addEventListener('click', addToTeam)
        pokedexEntry.appendChild(pokemonNameAndID)
        pokemonNameAndID.appendChild(pokemonID);
        pokemonNameAndID.appendChild(pokemonName);
        pokedexEntry.appendChild(pokemonImage);
        pokedexEntry.appendChild(pokemonType1);
        pokedex.appendChild(pokedexEntry);
    };
};

// generation switching

async function updateGeneration(gen) {
    generationNumber = gen;
    removeFromTeam(0)
    removeFromTeam(1)
    removeFromTeam(2)
    removeFromTeam(3)
    removeFromTeam(4)
    removeFromTeam(5)
    genXOnly(0)
    genXOnlyButton.classList.remove('invisible')
    genXOnlyButton.replaceWith(genXOnlyButton.cloneNode(true));
    genXOnlyButton = document.querySelector('#gen-x-only-button');
    switch(gen) {
        case 1:
            data = await import('./data/pokedexes/gen-1-rby.js');
            selectedGeneration = data.gen1rbyDex;
            genXOnlyButton.classList.add('invisible')
            break;
        case 2:
            data = await import('./data/pokedexes/gen-2-gsc.js');
            selectedGeneration = data.gen2gscDex;
            generationFilterNumber = 2;
            genXOnlyButton.textContent = "Gen 2 Only";
            genXOnlyButton.addEventListener('click', () => genXOnly(2))
            break;
        case 3:
            data = await import('./data/pokedexes/gen-3-rse.js');
            selectedGeneration = data.gen3rseDex;
            generationFilterNumber = 3;
            genXOnlyButton.textContent = "Gen 3 Only";
            genXOnlyButton.addEventListener('click', () => genXOnly(3))
            break;
        case 3.5:
            data = await import('./data/pokedexes/gen-3-frlg.js');
            selectedGeneration = data.gen3frlgDex;
            genXOnlyButton.classList.add('invisible')
            break;
        case 4:
            data = await import('./data/pokedexes/gen-4-dp.js');
            selectedGeneration = data.gen4dpDex;
            generationFilterNumber = 4;
            genXOnlyButton.textContent = "Gen 4 Only";
            genXOnlyButton.addEventListener('click',() => genXOnly(4))
            break;
        case 4.1:
            data = await import('./data/pokedexes/gen-4-pt.js');
            selectedGeneration = data.gen4ptDex;
            generationFilterNumber = 4;
            genXOnlyButton.textContent = "Gen 4 Only";
            break;
        case 4.5:
            data = await import('./data/pokedexes/gen-4-hgss.js');
            selectedGeneration = data.gen4hgssDex;
            generationFilterNumber = 2;
            genXOnlyButton.textContent = "Gen 2 Only";
            genXOnlyButton.addEventListener('click', () => genXOnly(2))
            break;
        case 5:
            data = await import('./data/pokedexes/gen-5-bw.js');
            selectedGeneration = data.gen5bwDex;
            genXOnlyButton.classList.add('invisible')
            break;
        case 5.5:
            data = await import('./data/pokedexes/gen-5-bw2.js');
            selectedGeneration = data.gen5bw2Dex;
            generationFilterNumber = 5;
            genXOnlyButton.textContent = "Gen 5 Only";
            genXOnlyButton.addEventListener('click', () => genXOnly(5))
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
        hmLabel.classList.add('hm')
        hmLabel.for = hmInput.name;
        hmLabel.textContent = hmInput.name;

        let hmSpan = document.createElement('span')
        hmSpan.classList.add('checkmark')

        hms.appendChild(hmLabel)
        hmLabel.appendChild(hmInput)
        hmLabel.appendChild(hmSpan)
    }
}

function filterHM() {
    let hmCheckboxes = document.querySelectorAll(".check");
    hmCheckboxes.forEach((hm) => {
        if (!(hm.checked)) {
            let hmShow = document.querySelectorAll(`.${hm.value}`)
            console.log(hmShow)
            for (let i = 0; i < hmShow.length; i++) {
                if (!(hmShow[i].classList.contains('type-filtered')) && !(hmShow[i].classList.contains('gen-filtered'))) {
                    hmShow[i].classList.remove('invisible');
                    hmShow[i].classList.remove('hm-filtered')
                }
            }
        }
    })
    hmCheckboxes.forEach((hm) => {
        if (hm.checked) {
            let hmHide = document.querySelectorAll(`div:not(.${hm.value}).pokedex-entry`)
            for (let i = 0; i < hmHide.length; i++) {
                hmHide[i].classList.add('invisible');
                hmHide[i].classList.add('hm-filtered')
            }
        }
    })
}

//team update functionality

function addToTeam() {
    const teamMemberContainer = document.querySelectorAll('.team-member-container')
    let arrayPos = 0;
    if (Math.floor(generationNumber) === 5) {
        arrayPos = (this.getAttribute('data-id'))
    } else {
        arrayPos = (this.getAttribute('data-id') - 1)
    }
    let selectedPokemon = selectedGeneration[arrayPos]
    for (let i = 0; i < teamMemberContainer.length; i++) {
        if (teamMemberContainer[i].className.includes('empty')) {
            updateTeam(selectedPokemon, teamMemberContainer[i]);
            break
        } else if (i === 5) {
            console.log('Team full')
        }
    };
};

function updateTeam(selectedPokemon, teamMemberContainer) {
    teamMemberContainer.classList.remove('empty')

    const teamMember = teamMemberContainer.querySelector('.team-member')
    teamMember.style.backgroundColor = `var(--${selectedPokemon.types[0].type.name})`;

    const teamMemberNameAndID = teamMember.querySelector('.pokemon-name-and-id')
    teamMemberNameAndID.classList.remove('invisible')

    const teamMemberID = teamMember.querySelector('.pokemon-id')
    teamMemberID.textContent = `#${selectedPokemon.entry_number}`
    
    const teamMemberName = teamMember.querySelector('.pokemon-name')
    teamMemberName.textContent = selectedPokemon.name;
    teamMemberName.textContent = selectedPokemon.name.charAt(0).toUpperCase() + teamMemberName.textContent.slice(1)

    const teamMemberImage = teamMember.querySelector('.pokemon-image')
    teamMemberImage.src = selectedPokemon.sprite;
    teamMemberImage.alt = selectedPokemon.name;

    const teamMemberType1 = teamMember.querySelector('.primary-type')
    teamMemberType1.classList.remove('invisible')
    teamMemberType1.src = `./images/type-icons/${selectedPokemon.types[0].type.name}.svg`;
    teamMemberType1.alt = selectedPokemon.types[0].type.name;

    if (selectedPokemon.types[1]) {
        const teamMemberType2 = teamMember.querySelector('.secondary-type')
        teamMemberType2.classList.remove('invisible')
        teamMemberType2.src = `./images/type-icons/${selectedPokemon.types[1].type.name}.svg`;
        teamMemberType2.alt = selectedPokemon.types[1].type.name;
    } else {
        const teamMemberType2 = teamMember.querySelector('.secondary-type')
        teamMemberType2.src = "";
        teamMemberType2.alt = "";
        teamMemberType2.classList.add('invisible')
    }

    const teamMemberOptions = teamMemberContainer.querySelector('.team-member-options')
    teamMemberOptions.classList.remove('invisible')

    if (typeOverlap === true) {
        typeOverlapChecker()
    }
};

function removeFromTeam(pos) {
    const allTeamMembers = document.querySelectorAll('.team-member-container')
    const teamMemberContainer = allTeamMembers[pos]

    teamMemberContainer.classList.add('empty')

    const teamMember = teamMemberContainer.querySelector('.team-member')
    teamMember.style.backgroundColor = `var(--normal)`;

    const teamMemberNameAndID = teamMember.querySelector('.pokemon-name-and-id')
    teamMemberNameAndID.classList.add('invisible')

    const teamMemberImage = teamMember.querySelector('.pokemon-image')
    teamMemberImage.src = './images/sprites/pokemon/missing.png'
    teamMemberImage.alt = 'placeholder'

    const teamMemberType1 = teamMember.querySelector('.primary-type')
    teamMemberType1.classList.add('invisible')
    teamMemberType1.src = "";
    teamMemberType1.alt = "";

    const teamMemberType2 = teamMember.querySelector('.secondary-type')
    teamMemberType2.classList.add('invisible')
    teamMemberType2.src = "";
    teamMemberType2.alt = "";

    const teamMemberOptions = teamMemberContainer.querySelector('.team-member-options')
    teamMemberOptions.classList.add('invisible')
}

//option functions

function preventTypeOverlap() {
    typeOverlap = !typeOverlap;
    if (typeOverlap === true) {
        typeOverlapButton.style.backgroundColor = 'orange'
        typeOverlapChecker()
    } else {
        typeOverlapButton.style.backgroundColor = 'white'
        const pokedexEntries = document.querySelectorAll('.pokedex-entry');
        for (let i = 0; i < pokedexEntries.length; i++) {
            if (!(pokedexEntries[i].classList.contains('gen-filtered')) && !(pokedexEntries[i].classList.contains('hm-filtered')))
                pokedexEntries[i].classList.remove('invisible')
                pokedexEntries[i].classList.remove('type-filtered')
        }
    }
}

function typeOverlapChecker() {
    const pokedexEntries = document.querySelectorAll('.pokedex-entry');
    const teamMembers = document.querySelectorAll('.team-member')
        for (let i = 0; i < pokedexEntries.length; i++) {
            for (let j = 0; j < teamMembers.length; j++) {
                if (pokedexEntries[i].querySelector('.primary-type').alt === teamMembers[j].querySelector('.primary-type').alt || pokedexEntries[i].querySelector('.primary-type').alt === teamMembers[j].querySelector('.secondary-type').alt )
                pokedexEntries[i].classList.add('invisible')
                pokedexEntries[i].classList.add('type-filtered')
                if (pokedexEntries[i].querySelector('.secondary-type').alt) {
                    if (pokedexEntries[i].querySelector('.secondary-type').alt === teamMembers[j].querySelector('.primary-type').alt || pokedexEntries[i].querySelector('.secondary-type').alt === teamMembers[j].querySelector('.secondary-type').alt )
                    pokedexEntries[i].classList.add('invisible')
                    pokedexEntries[i].classList.add('type-filtered')
                }
            }
        }
}

function genXOnly(num) {
    const pokedexEntries = document.querySelectorAll('.pokedex-entry');

    //removes all event listeners on button by cloning it, then reassigns variable to the button
    genXOnlyButton.replaceWith(genXOnlyButton.cloneNode(true));
    genXOnlyButton = document.querySelector('#gen-x-only-button');

    switch(num) {
        case 0:
            for (let i = 0; i < pokedexEntries.length; i++) {
                if (!(pokedexEntries[i].classList.contains('hm-filtered')) && !(pokedexEntries[i].classList.contains('type-filtered')))
                pokedexEntries[i].classList.remove('invisible')
                pokedexEntries[i].classList.remove('gen-filtered')
                }
            genXOnlyButton.style.backgroundColor = 'white'
            genXOnlyButton.addEventListener('click', () => genXOnly(generationFilterNumber))
            break;
        case 2:
            for (let i = 0; i < pokedexEntries.length; i++) {
                let natID = pokedexEntries[i].getAttribute('data-nat-id')
                if (natID < 152 || natID > 251)  {
                    pokedexEntries[i].classList.add('invisible')
                    pokedexEntries[i].classList.add('gen-filtered')
                }
            }
            genXOnlyButton.style.backgroundColor = 'orange'
            genXOnlyButton.addEventListener('click', () => genXOnly(0))
            break;
        case 3:
            for (let i = 0; i < pokedexEntries.length; i++) {
                let natID = pokedexEntries[i].getAttribute('data-nat-id')
                if (natID < 252 || natID > 386)  {
                    pokedexEntries[i].classList.add('invisible')
                    pokedexEntries[i].classList.add('gen-filtered')
                }
            }
            genXOnlyButton.style.backgroundColor = 'orange'
            genXOnlyButton.addEventListener('click', () => genXOnly(0))
            break;
        case 4:
            for (let i = 0; i < pokedexEntries.length; i++) {
                let natID = pokedexEntries[i].getAttribute('data-nat-id')
                if (natID < 387 || natID > 493)  {
                    pokedexEntries[i].classList.add('invisible')
                    pokedexEntries[i].classList.add('gen-filtered')
                }
            }
            genXOnlyButton.style.backgroundColor = 'orange'
            genXOnlyButton.addEventListener('click', () => genXOnly(0))
            break;
        case 5:
            for (let i = 0; i < pokedexEntries.length; i++) {
                let natID = pokedexEntries[i].getAttribute('data-nat-id')
                if (natID < 494 || natID > 649)  {
                    pokedexEntries[i].classList.add('invisible')
                    pokedexEntries[i].classList.add('gen-filtered')
                }
            }
            genXOnlyButton.style.backgroundColor = 'orange'
            genXOnlyButton.addEventListener('click', () => genXOnly(0))
            break;
    }
};

//run on load

updateGeneration(generationNumber)

darkModeToggle()

closeNav()