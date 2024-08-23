import React, { useRef } from "react";

function Anchors() {
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
