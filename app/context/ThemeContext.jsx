"use client";

import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ showMore, setShowMore, showHamburger, setShowHamburger }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
