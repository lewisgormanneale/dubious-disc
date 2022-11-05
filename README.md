# pokemon-team-planner

## [Live Version](https://lewisgormanneale.github.io/pokemon-team-planner/)

## Description

A Pokémon Team Planner built for players of the popular RPG series, which see you travelling around various regions and locations with a team of up to six Pokémon at once, completing objectives and collecting Pokémon. 

The Pokémon Team Planner is designed to help players who prefer to plan their Pokémon teams out in advance to decide on a team they want to use for a specified game in the series while:
- **Filtering HMs**: Checking if their chosen team can learn all of the HMs (Hidden Moves) available in their specified game, which are moves used in the game overworld that are often required for progression, but that only certain Pokémon can use.
- **Avoiding Type Overlap**: Optionally choosing to filter any Pokémon out of the selectable list if they are of the same type as a Pokémon already selected for their team.
- **Filtering By Generation**: If they only want to use Pokémon introduced in that generation.

Currently it supports all main series Pokémon games up to Black 2/White 2. Other features include:
- Toggle shiny status/gender of team members
- View which HMs team members can learn
- Dark Mode/Light Mode

## Screenshots
<p align="center">
  <img height="400" src="https://user-images.githubusercontent.com/107112881/200135158-5e880fe7-eb92-4fbc-b304-5adbaec4b2bc.png">
  <img height="400" src="https://user-images.githubusercontent.com/107112881/200135249-b41a795e-6da9-44bf-93d0-10d0b19a7174.png">
  <img height="400" src="https://user-images.githubusercontent.com/107112881/200135180-7c2de265-c5c4-4bc0-ab91-ea750b9de1d0.png">
</p>

## Development Status / Notes

All Pokémon data (moves/types etc.) was gathered from [PokéAPI](https://pokeapi.co/) calls during development and is stored locally in the repo to prevent the need to send countless API calls to PokéAPI. Pokémon sprites were also saved in the repo for the same reason - these sprites were obtained from [PokeAPI's sprites repo on GitHub](https://github.com/PokeAPI/sprites).

For those unfamiliar with the games, a lot of information relevant to a Pokémon can change between each game/generation in the series. Pokémon types, learnable moves, sprites, location data and more all change with each game, so building a single callable list of Pokémon that contained the specific information unique to each game inside it did not seem to be an efficient solution.

Instead I built functions to match up data in a variety of PokéAPI calls into a single array for each game's Pokédex that contained all the information necessary to display Pokémon from that generation - at time of writing some of these functions should still be visible in the ./data/data-update-functions.js file. The creation of these functions enabled the relatively easy addition of additional Pokémon generations. In the future I plan to do more research into the implications of multiple large arrays/objects on page load times, and see if better solutions exist (which I'm sure they do).

## Potential Future Additions

- Add more recent main series game support (X/Y up to Scarlet/Violet)
- Add National Pokédex mode with all Pokémon available at once
- Indicators for when a Pokémon is version exclusive (e.g. in Red but not Blue)
- Indiciators for when a Pokémon requires a trade to evolve
- 'Timeline View' showing Pokémon available in the game based on how early they become available to the player (using location data etc.)
- Team Analysis option, to view in-depth the weaknesses/strengths of your chosen team
- More information on selected Pokémon e.g. abilities, or at least links to them in something like PokémonDB
- Support for other field moves e.g. Secret Power
- Export functionality - some way to save your chosen team either as an image or custom URL.
