"use client";

import React, { use, useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import data from "../data";
import Link from "next/link";

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
        setTimeout(() => {
          setSearchResults([]);
        }, 500);
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
        if (item.name.toLowerCase().includes(input.toLowerCase())) {
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
            <div className="absolute top-[210px] h-auto py-5 bg-white z-40 w-[300px] flex flex-col items-center border-2 shadow-lg">
              <h1 className="py-5 text-sm">Search Results</h1>
              <hr className="w-full p-3" />
              <div className="flex flex-col gap-3 w-full">
                {searchResults.map((result) => (
                  <li key={result.id}>
                    <Link
                      href={`/member/${result.id}`}
                      className="text-sm hover:bg-gray-200 w-[260px] p-5"

                      // ref={dropDownRef}
                    >
                      {result.name}
                    </Link>
                  </li>
                ))}
              </div>
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
