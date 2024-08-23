import React, { useEffect, useRef, useState } from "react";

function Anchors() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarOffset, setNavbarOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  // }, [lastScrollY]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log(currentScrollY);

    if (currentScrollY > 7100 && currentScrollY > lastScrollY) {
      scrollToRef(ref3);
    } else if (currentScrollY > 6029 && currentScrollY > lastScrollY) {
      scrollToRef(ref2);
    }

    if (currentScrollY < lastScrollY) {
      if (currentScrollY > 6500) {
        scrollToRef(ref2);
      } else if (currentScrollY > 7500) {
        scrollToRef(ref1);
      }
    }

    // const scrollDifference = currentScrollY - lastScrollY;

    // const sensitivity = 20;

    // if (scrollDifference > sensitivity) {
    //   setNavbarOffset((prev) => Math.min(prev + scrollDifference, 400));
    // } else if (scrollDifference < -sensitivity) {
    //   setNavbarOffset((prev) => Math.max(prev + scrollDifference, 0));
    // }

    setLastScrollY(currentScrollY);
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}>
        <button onClick={() => scrollToRef(ref1)}>1: First</button>{" "}
        {/* Scroll to ref1 */}
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
