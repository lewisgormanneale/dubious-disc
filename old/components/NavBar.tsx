export default function NavBar() {
  return (
    <div id="game-select-container">
      <button id="game-select-button" className="header-button">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div id="navbar">
        <a id="close-button">Close</a>
        <a>Pokémon Red/Blue/Yellow</a>
        <a>Pokémon Gold/Silver/Crystal</a>
        <a>Pokémon Ruby/Sapphire/Emerald</a>
        <a>Pokémon FireRed/LeafGreen</a>
        <a>Pokémon Diamond & Pearl</a>
        <a>Pokémon Platinum</a>
        <a>Pokémon HeartGold/SoulSilver</a>
        <a>Pokémon Black/White</a>
        <a>Pokémon Black 2/White 2</a>
      </div>
    </div>
  );
}
