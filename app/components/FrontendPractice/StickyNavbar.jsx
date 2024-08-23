"use client";

import React, { useEffect, useState } from "react";

function StickyNavbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarOffset, setNavbarOffset] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;

    const sensitivity = 20;

    if (scrollDifference > sensitivity) {
      setNavbarOffset((prev) => Math.min(prev + scrollDifference, 400));
    } else if (scrollDifference < -sensitivity) {
      setNavbarOffset((prev) => Math.max(prev + scrollDifference, 0));
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className="fixed top-30 w-full bg-gray-800 text-white p-4 transition-transform duration-500 z-10"
      style={{
        transform: `translateY(-${navbarOffset}px)`,
      }}
    >
      <h1 className="text-lg font-bold"></h1>
    </div>
  );
}

export default StickyNavbar;
