import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between mx-auto px-10 py-5 items-center fixed w-full h-[100px]">
      <Link className="text-3xl font-bold" href="/">
        tripleS
      </Link>
      <div className="flex flex-row gap-6 items-center">
        <div>Member</div>
        <div>Album</div>
        <div className="bg-black text-white p-3 line-clamp-2 w-[120px] text-center">
          COSMO APP DOWNLOAD
        </div>
      </div>
    </div>
  );
}

export default Navbar;
