# pokemon-team-planner

## [Live Version](https://lewisgormanneale.github.io/pokemon-team-planner/) (Work In Progress)

## Description

A Pokémon Team Planner built for players of the popular RPG series, which see you travelling around various regions and locations with a team of up to six Pokémon at once, completing objectives and collecting Pokémon. 

The Team Planner is designed to help players you prefer to plan their Pokémon teams out in advance to decide on a team they want to use for a specified game in the series while:
- **Filtering HMs**: Checking if their chosen team can learn all of the HMs (Hidden Moves) available in their specified game, which are moves used in the game overworld that are often required for progression, but that only certain Pokémon can use.
- **Avoiding Type Overlap**: Optionally choosing to filter any Pokémon out of the selectable list if they are of the same type as a Pokémon already selected for their team.
- **Evaluating Team Matchups**: Checking weaknesses and strengths of their team based on type matchups.

## Development Status / Notes

All Pokémon data (moves/types etc.) was gathered from [PokéAPI](https://pokeapi.co/) calls during development and is stored in the repo to improve page load times and due to the variety and quantity of data required. Pokémon sprites are also saved in the repo for the same reason - these sprites were obtained from [PokeAPI's sprites repo on GitHub](https://github.com/PokeAPI/sprites).

For those unfamiliar with the games, a lot of information relevant to a Pokémon can change between each game/generation in the series. Pokémon types, learnable moves, sprites, location data and more all change with each game, so building a single callable list of Pokémon that contained the specific information unique to each game inside it did not seem to be an efficient solution.

Instead I built functions to match up data in a variety of PokéAPI calls into a single array for each game's Pokédex that contains all the information necessary to display Pokémon from that generation - some of these functions should still be visible in the pokedexes.js file. The creation of these functions enables the relatively easy addition of future Pokémon generations, but in the future I plan to do more research into the implications of multiple large arrays/objects on page load times, and see if better solutions exist (which I'm sure they do). 

This project is a work in progress and I'm planning for a 'V1' to have:
- Support for all mainline games up to Pokémon Black 2/White 2, with a seperate Pokédex for each game where the regional Pokédex changes. 
- Support for options to filter Pokédex by type overlap, HMs of any combination, and by generation (e.g. option to only show Gen 2 Pokémon if playing Pokémon Silver, to choose from only new Pokémon)
- Responsive design/support for mobile screen sizes
- Dark Mode/Light Mode

## Potential Future Additions
Ideas for future additions I'd like to add once V1 is complete:
- Add more recent game support
- Add National Pokédex mode
- Indicators for when a Pokémon is version exclusive (e.g. in Red but not Blue)
- Indiciators for when a Pokémon requires a trade to evolve.
- Add National Pokédex mode
- 'Timeline View' showing Pokémon available in the game based on how early they become available to the player
- More information on selected Pokémon e.g. abilities, or at least links to them in something like PokémonDB.
- Support for other field moves e.g. Secret Power

## Screenshots

(To Be Added Once V1 Complete)
