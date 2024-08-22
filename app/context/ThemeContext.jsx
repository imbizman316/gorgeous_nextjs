"use client";

import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <ThemeContext.Provider value={{ showMore, setShowMore }}>
      {children}
    </ThemeContext.Provider>
  );
};
