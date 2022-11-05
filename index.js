// DOM Setup
const body = document.querySelector('body');

const darkModeButton = document.querySelector('#dark-mode-button');

const teamAndOptions = document.querySelector('#team-and-options');
const team = document.querySelector('#team');

let shinyButtons = document.querySelectorAll('.shiny-option')
for (let i = 0; i < shinyButtons.length; i++) {
    shinyButtons[i].addEventListener('click', shinyToggle)
}

let genXOnlyButton = document.querySelector('#gen-x-only-button');
let typeOverlapButton = document.querySelector('#type-overlap-button');
const pokedex = document.querySelector('#pokedex');

const hms = document.querySelector('#hms');

// Function Setup, Global Variables
let darkMode = false;
let generationNumber = 5.5;
let selectedGeneration = '';
let data = []
let typeOverlap = false;
let generationFilterNumber = 0

//Navbar
function openNav() {
    document.getElementById("navbar").style.width = "33%";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
}

//Dark Mode
function darkModeToggle() {
    if (darkMode === false) {
        body.classList.add('dark-mode');
        darkMode = true;
    } else if (darkMode === true) {
        body.classList.remove('dark-mode')
        darkMode = false;
    };
};

// Pokemon/Pokedex Load In
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

// Generation Switching
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

    const title = document.querySelector('#title');

    switch(gen) {
        case 1:
            data = await import('./data/pokedexes/gen-1-rby.js');
            selectedGeneration = data.gen1rbyDex;
            genXOnlyButton.classList.add('invisible')
            title.textContent = 'Pokémon RBY Team Planner'
            break;
        case 2:
            data = await import('./data/pokedexes/gen-2-gsc.js');
            selectedGeneration = data.gen2gscDex;
            generationFilterNumber = 2;
            genXOnlyButton.textContent = "Gen 2 Only";
            genXOnlyButton.addEventListener('click', () => genXOnly(2))
            title.textContent = 'Pokémon GSC Team Planner'
            break;
        case 3:
            data = await import('./data/pokedexes/gen-3-rse.js');
            selectedGeneration = data.gen3rseDex;
            generationFilterNumber = 3;
            genXOnlyButton.textContent = "Gen 3 Only";
            genXOnlyButton.addEventListener('click', () => genXOnly(3))
            title.textContent = 'Pokémon RSE Team Planner'
            break;
        case 3.5:
            data = await import('./data/pokedexes/gen-3-frlg.js');
            selectedGeneration = data.gen3frlgDex;
            genXOnlyButton.classList.add('invisible')
            title.textContent = 'Pokémon FRLG Team Planner'
            break;
        case 4:
            data = await import('./data/pokedexes/gen-4-dp.js');
            selectedGeneration = data.gen4dpDex;
            generationFilterNumber = 4;
            genXOnlyButton.textContent = "Gen 4 Only";
            genXOnlyButton.addEventListener('click',() => genXOnly(4))
            title.textContent = 'Pokémon DP Team Planner'
            break;
        case 4.1:
            data = await import('./data/pokedexes/gen-4-pt.js');
            selectedGeneration = data.gen4ptDex;
            generationFilterNumber = 4;
            genXOnlyButton.textContent = "Gen 4 Only";
            title.textContent = 'Pokémon Pt Team Planner'
            break;
        case 4.5:
            data = await import('./data/pokedexes/gen-4-hgss.js');
            selectedGeneration = data.gen4hgssDex;
            generationFilterNumber = 2;
            genXOnlyButton.textContent = "Gen 2 Only";
            genXOnlyButton.addEventListener('click', () => genXOnly(2))
            title.textContent = 'Pokémon HGSS Team Planner'
            break;
        case 5:
            data = await import('./data/pokedexes/gen-5-bw.js');
            selectedGeneration = data.gen5bwDex;
            genXOnlyButton.classList.add('invisible')
            title.textContent = 'Pokémon BW Team Planner'
            break;
        case 5.5:
            data = await import('./data/pokedexes/gen-5-bw2.js');
            selectedGeneration = data.gen5bw2Dex;
            generationFilterNumber = 5;
            genXOnlyButton.textContent = "Gen 5 Only";
            genXOnlyButton.addEventListener('click', () => genXOnly(5))
            title.textContent = 'Pokémon BW2 Team Planner'
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
        hmInput.name = hmInput.name.replace('-', ' ')
        hmInput.value = selectedGeneration[0].hms[i].name.toLowerCase();
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

// Team Update Functionality
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
        teamMemberType2.alt = "none";
        teamMemberType2.classList.add('invisible')
    }

    const teamMemberOptions = teamMemberContainer.querySelector('.team-member-options')
    teamMemberOptions.classList.remove('invisible')

    const shinyOption = teamMemberOptions.querySelector('.shiny-option')

    const genderOption = teamMemberOptions.querySelector('.gender-option')
    const genderIcon = teamMemberOptions.querySelector('.gender-symbol')

    if (generationNumber != 1) {
        genderOption.classList.remove('invisible')
        shinyOption.classList.remove('invisible')
        let genderRate = selectedPokemon.gender_rate
        if (genderRate === -1) {
            genderOption.style.backgroundColor = "lightgreen"
            genderIcon.textContent = 'agender'
        } else if (genderRate === 8) {
            genderOption.style.backgroundColor = "pink"
            genderIcon.textContent = 'female'
        } else if (genderRate === 0) {
            genderOption.style.backgroundColor = "lightskyblue"
            genderIcon.textContent = 'male'
        } else {
            genderOption.addEventListener('click', genderToggle);
        }
    } else {
        genderOption.classList.add('invisible')
        shinyOption.classList.add('invisible')
    }
    

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
    teamMemberType1.alt = "none";

    const teamMemberType2 = teamMember.querySelector('.secondary-type')
    teamMemberType2.classList.add('invisible')
    teamMemberType2.src = "";
    teamMemberType2.alt = "none";

    const teamMemberOptions = teamMemberContainer.querySelector('.team-member-options')
    teamMemberOptions.classList.add('invisible')

    const shinyOption = teamMemberOptions.querySelector('.shiny-option')
    if (shinyOption.style.backgroundColor === 'orange') {
        shinyOption.style.backgroundColor = 'yellow'
    }

    if (typeOverlap === true) {
        typeOverlapChecker()
    }
}

// Other Team Option Functions
function genderToggle() {
    const button = this;
    const genderSymbol = button.querySelector('.gender-symbol')
    if (genderSymbol.outerText === 'male') {
        genderSymbol.textContent = 'female'
        button.style.backgroundColor = 'pink'
        genderSpriteChange('female', button)
    } else {
        genderSymbol.textContent = 'male'
        button.style.backgroundColor = 'lightskyblue'
        genderSpriteChange('male', button)
    }
}

function genderSpriteChange(gender, button) {
    const pokemon = button.parentNode.parentNode;
    const pokemonImage = pokemon.querySelector('.pokemon-image');
    const pokemonID = (pokemon.querySelector('.pokemon-id').textContent).substring(1);

    let arrayPos = 0;
    if (Math.floor(generationNumber) === 5) {
        arrayPos = (pokemonID)
    } else {
        arrayPos = (pokemonID - 1)
    }

    let selectedPokemon = selectedGeneration[arrayPos]

    if (gender === 'male') {
        if (pokemonImage.src.includes('shiny')) {
            pokemonImage.src = selectedPokemon.shiny_sprite
        } else {
            pokemonImage.src = selectedPokemon.sprite
        }
    } else if (gender === 'female' && selectedPokemon.has_gender_differences === true) {
        if (pokemonImage.src.includes('shiny')) {
            pokemonImage.src = selectedPokemon.shiny_female_sprite
        } else {
            pokemonImage.src = selectedPokemon.female_sprite
        }
    }
};

function shinyToggle() {
    const pokemon = this.parentNode.parentNode;
    const pokemonImage = pokemon.querySelector('.pokemon-image');
    const pokemonID = (pokemon.querySelector('.pokemon-id').textContent).substring(1);
    const shinyOption = pokemon.querySelector('.shiny-option');
    const gender = pokemon.querySelector('.gender-symbol').textContent

    let arrayPos = 0;
    if (Math.floor(generationNumber) === 5) {
        arrayPos = (pokemonID)
    } else {
        arrayPos = (pokemonID - 1)
    }

    let selectedPokemon = selectedGeneration[arrayPos]
    if (pokemonImage.src.includes('shiny')) {
        shinyOption.style.backgroundColor = 'yellow'
        pokemonImage.src = selectedPokemon.sprite
    } else {
        shinyOption.style.backgroundColor = 'orange'
        pokemonImage.src = selectedPokemon.shiny_sprite
    }

    genderSpriteChange(gender, this)
}


// Pokedex Option Functions
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
    let filteredTypes = []

    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].querySelector('.primary-type').alt != "none") {
            filteredTypes.push(teamMembers[i].querySelector('.primary-type').alt)
        }
        if (teamMembers[i].querySelector('.secondary-type').alt != "none") {
            filteredTypes.push(teamMembers[i].querySelector('.secondary-type').alt)
        }
    }

    for (let i = 0; i < pokedexEntries.length; i++) {
        if (filteredTypes.includes(pokedexEntries[i].querySelector('.primary-type').alt) || filteredTypes.includes(pokedexEntries[i].querySelector('.secondary-type').alt)) {
            pokedexEntries[i].classList.add('invisible')
            pokedexEntries[i].classList.add('type-filtered')
        } else if (!(pokedexEntries[i].classList.contains('gen-filtered')) && !(pokedexEntries[i].classList.contains('hm-filtered'))) {
            pokedexEntries[i].classList.remove('invisible')
            pokedexEntries[i].classList.remove('type-filtered')
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

// Run On Load
updateGeneration(generationNumber)
darkModeToggle()
closeNav()