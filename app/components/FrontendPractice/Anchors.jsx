import React, { useEffect, useRef, useState } from "react";

function Anchors() {
  const [scrolling, setScrolling] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;

      setScrolling(true);
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY < viewportHeight) {
        if (scrollY >= viewportHeight * 0.5) {
          ref2.current.scrollIntoView({ behavior: "smooth" });
        } else {
          ref1.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (scrollY < viewportHeight * 2) {
        if (scrollY >= viewportHeight * 1.5) {
          ref3.current.scrollIntoView({ behavior: "smooth" });
        } else {
          ref2.current.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        if (scrollY >= viewportHeight * 2.5) {
          // Nothing further down, but if there was more content, you'd handle it here.
        } else {
          ref3.current.scrollIntoView({ behavior: "smooth" });
        }
      }

      setTimeout(() => {
        setScrolling(false);
      }, 500); // Adjust delay if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div>
      <div className="fixed top-0 left-0 z-50">
        <button
          onClick={() => ref1.current.scrollIntoView({ behavior: "smooth" })}
          className="m-2 p-2 bg-blue-500 text-white"
        >
          1: First
        </button>
        <button
          onClick={() => ref2.current.scrollIntoView({ behavior: "smooth" })}
          className="m-2 p-2 bg-green-500 text-white"
        >
          2: Second
        </button>
        <button
          onClick={() => ref3.current.scrollIntoView({ behavior: "smooth" })}
          className="m-2 p-2 bg-pink-500 text-white"
        >
          3: Third
        </button>
      </div>

      <div
        ref={ref1}
        className="h-screen bg-blue-500 flex items-center justify-center"
      >
        <h1 className="text-3xl text-white">Screen 1</h1>
      </div>
      <div
        ref={ref2}
        className="h-screen bg-green-500 flex items-center justify-center"
      >
        <h1 className="text-3xl text-white">Screen 2</h1>
      </div>
      <div
        ref={ref3}
        className="h-screen bg-pink-500 flex items-center justify-center"
      >
        <h1 className="text-3xl text-white">Screen 3</h1>
      </div>
    </div>
  );
}

export default Anchors;
