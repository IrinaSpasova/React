import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

function ThemeProvider({ children, startingTheme }) {
  const { theme, setTheme } = useTheme(startingTheme);
  // useState returns array, useTheme returns object;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
