"use client";

import React, { useState } from "react";
import data from "./data";
import Image from "next/image";

function SliderAllMembers() {
  const [page, setPage] = useState(0);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col gap-5 w-full overflow-hidden py-10">
      <button onClick={handleClick}>Move the pictures</button>
      <div
        className={`flex flex-row gap-5 overflow-hidden translate-x-[${
          100 * page
        }px] duration-200`}
      >
        {data.members.map((member, index) => (
          <Image
            key={index}
            src={member.photos[0]}
            alt={member.name}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderAllMembers;
