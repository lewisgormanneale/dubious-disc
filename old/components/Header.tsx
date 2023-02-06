import { useContext } from "react";
import NavBar from "./NavBar";
import ThemeContext from "@/contexts/ThemeContext";

export default function Header() {
  const { darkModeActive, setDarkModeActive } = useContext(ThemeContext);

  function darkModeToggle() {
    setDarkModeActive(!darkModeActive);
  }

  return (
    <div id="header" className="sticky">
      <NavBar />
      <h1 id="title">Pokémon Team Planner</h1>
      <div id="dark-mode-container">
        <button id="dark-mode-button" className="header-button">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </button>
      </div>
    </div>
  );
}
