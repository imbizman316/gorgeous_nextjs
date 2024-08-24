import React, { useEffect, useRef, useState } from "react";

function Anchors() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false); // New state to track scrolling
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Avoid handling scroll events while scrolling is in progress
      if (scrolling) return;

      if (currentScrollY > 6000 && currentScrollY < 7000) {
        if (currentScrollY > lastScrollY) {
          scrollToRef(ref2); // Scrolling down to ref2
        } else {
          scrollToRef(ref1); // Scrolling up to ref1
        }
      } else if (currentScrollY >= 7000 && currentScrollY < 8000) {
        if (currentScrollY > lastScrollY) {
          scrollToRef(ref3); // Scrolling down to ref3
        } else {
          scrollToRef(ref2); // Scrolling up to ref2
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrolling]);

  const scrollToRef = (ref) => {
    if (ref.current) {
      setScrolling(true); // Set scrolling flag to true

      window.scrollTo({
        top: ref.current.offsetTop - 10,
        behavior: "smooth",
      });

      // Set a timeout to reset scrolling flag after the scroll animation
      setTimeout(() => {
        setScrolling(false);
      }, 500); // Adjust timeout duration based on scroll speed
    }
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}>
        <button onClick={() => scrollToRef(ref1)}>1: First</button>{" "}
        <button onClick={() => scrollToRef(ref2)}>2: Second</button>
        <button onClick={() => scrollToRef(ref3)}>3: Third</button>
      </div>

      <div ref={ref1} style={{ height: "100vh", backgroundColor: "lightblue" }}>
        <h1>Screen 1</h1>
      </div>
      <div
        ref={ref2}
        style={{ height: "100vh", backgroundColor: "lightgreen" }}
      >
        <h1>Screen 2</h1>
      </div>
      <div ref={ref3} style={{ height: "100vh", backgroundColor: "lightpink" }}>
        <h1>Screen 3</h1>
      </div>
    </div>
  );
}

export default Anchors;
