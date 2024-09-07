"use client";

import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [signUpPopUp, setSignUpPopUp] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        showMore,
        setShowMore,
        showHamburger,
        setShowHamburger,
        signUpPopUp,
        setSignUpPopUp,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
