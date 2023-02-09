import Image from "next/image";
import TypeIcon from "../TypeIcon";

export default function FAQ() {
  return (
    <section className="flex flex-col gap-10 text-white">
      <div className="flex justify-center items-center">
        <h2>FAQ</h2>
      </div>
      <h3>What Is This Tool For?</h3>
      <p>
        You can use the Pokémon Team Planner to plan out a team of Pokémon that
        you want to use in one of the mainline RPG series. While some players
        like to decide on team members as they go, this tool is designed to help
        those who prefer to plan in advance.
      </p>
      <h3>Type Icon Reference</h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-center">
          <p>Bug</p>
          <TypeIcon type="bug" />
        </div>
        <div className="flex flex-col items-center">
          <p>Dark</p>
          <TypeIcon type="dark" />
        </div>
        <div className="flex flex-col items-center">
          <p>Dragon</p>
          <TypeIcon type="dragon" />
        </div>
        <div className="flex flex-col items-center">
          <p>Electric</p>
          <TypeIcon type="electric" />
        </div>
        <div className="flex flex-col items-center">
          <p>Fairy</p>
          <TypeIcon type="fairy" />
        </div>
        <div className="flex flex-col items-center">
          <p>Fighting</p>
          <TypeIcon type="fighting" />
        </div>
        <div className="flex flex-col items-center">
          <p>Fire</p>
          <TypeIcon type="fire" />
        </div>
        <div className="flex flex-col items-center">
          <p>Flying</p>
          <TypeIcon type="flying" />
        </div>
        <div className="flex flex-col items-center">
          <p>Ghost</p>
          <TypeIcon type="ghost" />
        </div>
        <div className="flex flex-col items-center">
          <p>Grass</p>
          <TypeIcon type="grass" />
        </div>
        <div className="flex flex-col items-center">
          <p>Ground</p>
          <TypeIcon type="ground" />
        </div>
        <div className="flex flex-col items-center">
          <p>Ice</p>
          <TypeIcon type="ice" />
        </div>
        <div className="flex flex-col items-center">
          <p>Normal</p>
          <TypeIcon type="normal" />
        </div>
        <div className="flex flex-col items-center">
          <p>Poison</p>
          <TypeIcon type="poison" />
        </div>
        <div className="flex flex-col items-center">
          <p>Psychic</p>
          <TypeIcon type="psychic" />
        </div>
        <div className="flex flex-col items-center">
          <p>Rock</p>
          <TypeIcon type="rock" />
        </div>
        <div className="flex flex-col items-center">
          <p>Steel</p>
          <TypeIcon type="steel" />
        </div>
        <div className="flex flex-col items-center">
          <p>Water</p>
          <TypeIcon type="water" />
        </div>
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
    </section>
  );
}
