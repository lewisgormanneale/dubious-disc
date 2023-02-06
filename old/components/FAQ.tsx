export default function FAQ() {
  return (
    <div id="faq" className="content">
      <div id="faq-title">
        <img src="./images/notched-ear-pichu.png" />
        <h2>FAQ</h2>
        <img src="./images/shiny-pichu.png" />
      </div>
      <h3>What Is This Tool For?</h3>
      <p>
        You can use the Pokémon Team Planner to plan out a team of Pokémon that
        you want to use in one of the mainline RPG series. While some players
        like to decide on team members as they go, this tool is designed to help
        those who prefer to plan in advance.
      </p>
      <h3>How Do I Use This Tool?</h3>
      <h4>Selecting Team Members</h4>
      <p>
        Select the game you're playing in the top left of the page, and the
        Pokémon in that game's Regional Pokédex will appear. To add a Pokémon to
        your planned team, simply click/tap on it.
      </p>
      <p>
        Pokémon you've added to your team appear at the top of the screen. Under
        each Pokémon will be the option to remove it from the team, along with
        options to change the gender of the Pokémon (if possible for that
        species) or specify that the Pokémon is shiny.
      </p>
      <p>
        Note that in Pokémon Red, Blue and Yellow, Pokémon did not have genders
        and couldn't be shiny, so these options are not available for those
        games. A Pokémon's sprite will update when you switch it's gender if its
        appearance differs based on it, but this is only the case for games from
        Diamond and Pearl onwards.
      </p>
      <h4>Fitering the Pokédex</h4>
      <p>
        You can filter the list of Pokémon to select from by choosing from the
        options below the team member section. These options are designed to
        help you more easily construct a varied team with better type coverage,
        try and use new Pokémon, or ensure you have HM coverage.
      </p>
      <p>
        You can use multiple filters in combination with each other - if no
        Pokémon appear for you to select from, it likely means that none meet
        your criteria. If you're sure this isn't the case, please raise an issue
        in the GitHub repo.
      </p>
      <h3>Type Icon Reference</h3>
      <div id="type-icon-reference" className="icon-reference">
        <p>
          Bug: <img src="./images/type-icons/bug.svg" alt="bug" />
        </p>
        <p>
          Dark: <img src="./images/type-icons/dark.svg" alt="dark" />
        </p>
        <p>
          Dragon: <img src="./images/type-icons/dragon.svg" alt="dragon" />
        </p>
        <p>
          Electric:{" "}
          <img src="./images/type-icons/electric.svg" alt="electric" />
        </p>
        <p>
          Fairy: <img src="./images/type-icons/fairy.svg" alt="fairy" />
        </p>
        <p>
          Fighting:{" "}
          <img src="./images/type-icons/fighting.svg" alt="fighting" />
        </p>
        <p>
          Fire: <img src="./images/type-icons/fire.svg" alt="fire" />
        </p>
        <p>
          Flying: <img src="./images/type-icons/flying.svg" alt="flying" />
        </p>
        <p>
          Ghost: <img src="./images/type-icons/ghost.svg" alt="ghost" />
        </p>
        <p>
          Grass: <img src="./images/type-icons/grass.svg" alt="grass" />
        </p>
        <p>
          Ground: <img src="./images/type-icons/ground.svg" alt="ground" />
        </p>
        <p>
          Ice: <img src="./images/type-icons/ice.svg" alt="ice" />
        </p>
        <p>
          Normal: <img src="./images/type-icons/normal.svg" alt="normal" />
        </p>
        <p>
          Poison: <img src="./images/type-icons/poison.svg" alt="poison" />
        </p>
        <p>
          Psychic: <img src="./images/type-icons/psychic.svg" alt="psychic" />
        </p>
        <p>
          Rock: <img src="./images/type-icons/rock.svg" alt="rock" />
        </p>
        <p>
          Steel: <img src="./images/type-icons/steel.svg" alt="steel" />
        </p>
        <p>
          Water: <img src="./images/type-icons/water.svg" alt="water" />
        </p>
      </div>
      <h3>HM Icon Reference</h3>
      <div className="icon-reference">
        <p>
          Cut: <span className="material-icons-outlined">park</span>
        </p>
        <p>
          Fly: <span className="material-icons-outlined">flight</span>
        </p>
        <p>
          Surf: <span className="material-icons-outlined">surfing</span>
        </p>
        <p>
          Strength:{" "}
          <span className="material-icons-outlined">fitness_center</span>
        </p>
        <p>
          Flash: <span className="material-icons-outlined">flash_on</span>
        </p>
        <p>
          Whirlpool: <span className="material-icons-outlined">tornado</span>
        </p>
        <p>
          Waterfall:{" "}
          <span className="material-icons-outlined">
            vertical_shades_closed
          </span>
        </p>
        <p>
          Rock-Smash: <span className="material-icons-outlined">volcano</span>
        </p>
        <p>
          Dive: <span className="material-icons-outlined">scuba_diving</span>
        </p>
        <p>
          Defog: <span className="material-icons-outlined">cloud_off</span>
        </p>
        <p>
          Rock-Climb: <span className="material-icons-outlined">landslide</span>
        </p>
      </div>
    </div>
  );
}
