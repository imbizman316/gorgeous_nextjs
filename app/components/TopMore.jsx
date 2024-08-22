"use client";

import React, { use, useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import data from "./data";

function TopMore() {
  const { showMore } = useTheme();
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dropDownRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (input.length >= 3) {
      const results = [];

      data.members.forEach((item) => {
        if (item.name.toLowerCase().includes(input)) {
          results.push(item);
        }
      });

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [input]);

  return (
    <>
      {showMore && (
        <div className="flex w-full items-center justify-center h-[10em] pt-[150px]">
          <div className="w-full">
            <h1 className="text-center mb-10 font-bold">More on TripleS</h1>
            <form
              className="flex justify-center items-center"
              onSubmit={handleSubmit}
            >
              <input
                ref={dropDownRef}
                className="border-2 px-6 py-2 select-none focus:outline-none"
                type="text"
                placeholder="Search"
                value={input}
                onChange={handleChange}
              />
            </form>
          </div>

          {searchResults.length > 0 ? (
            <div className="absolute top-[210px] h-[200px] bg-white z-40 w-[300px] flex flex-col items-center border-2 shadow-lg">
              <h1 className="py-5 text-sm">Search Results</h1>
              <hr className="w-full p-3" />
              {searchResults.map((result) => (
                <div key={result.id}>{result.name}</div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}

export default TopMore;
