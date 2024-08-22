import React from "react";

function TopMore() {
  return (
    <div className="flex w-full items-center justify-center h-[10em]">
      <div className="w-full">
        <h1 className="text-center mb-10 font-bold">More on TripleS</h1>
        <nav className="flex justify-evenly">
          <li>Blog</li>
          <li>About</li>
          <li>Music</li>
        </nav>
      </div>
    </div>
  );
}

export default TopMore;
