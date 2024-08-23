import { useTheme } from "@/app/context/ThemeContext";
import React, { useState } from "react";

function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { showHamburger, setShowHamburger } = useTheme();

  const toggleMenu = () => {
    // setIsOpen(!isOpen);
    setShowHamburger(!showHamburger);
  };

  return (
    <button
      className="relative w-8 h-8 flex flex-col justify-between items-center md:hidden lg:hidden sm:block"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <div
        className={`h-1 w-full bg-gray-800 rounded transition-transform duration-300 ${
          showHamburger ? "transform rotate-45 translate-y-4" : ""
        }`}
        style={{ transformOrigin: "center" }}
      ></div>
      <div
        className={`h-1 w-full bg-gray-800 rounded transition-opacity duration-300 ${
          showHamburger ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-full bg-gray-800 rounded transition-transform duration-300 ${
          showHamburger ? "transform -rotate-45 -translate-y-3" : ""
        }`}
        style={{ transformOrigin: "center" }}
      ></div>
    </button>
  );
}

export default HamburgerButton;
