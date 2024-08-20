// Carousel.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const slideRefs = useRef([]);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  const buttonHandle = (i) => {
    setCurr(i);
  };

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval]);

  useEffect(() => {
    if (
      prevSlide !== null &&
      slideRefs.current[prevSlide] &&
      typeof slideRefs.current[prevSlide].stopSpotify === "function"
    ) {
      slideRefs.current[prevSlide].stopSpotify();
    }
    setPrevSlide(curr);
  }, [curr]);

  const slideArray = React.Children.toArray(slides);

  return (
    <div className="overflow-hidden relative w-full h-full z-10">
      <div
        className="flex transition-transform ease-out duration-500 w-full h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slideArray.map((slide, i) => (
          <div key={i} className="w-full h-full flex-shrink-0">
            {React.cloneElement(slide, {
              ref: (el) => (slideRefs.current[i] = el),
            })}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 z-20 pointer-events-none">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0 pointer-events-none">
        <div className="flex items-center justify-center gap-2 pointer-events-auto">
          {slideArray.map((_, i) => (
            <div
              onClick={() => buttonHandle(i)}
              key={i}
              className={`transition-all w-3 h-3 cursor-pointer bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
