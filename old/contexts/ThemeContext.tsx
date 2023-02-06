import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IThemeContext {
  darkModeActive: boolean;
  setDarkModeActive: (value: boolean) => void;
}

export const ThemeContextProvider = ({ children }: any) => {
  const [darkModeActive, setDarkModeActive] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkModeActive, setDarkModeActive }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
