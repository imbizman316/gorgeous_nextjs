"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Repeat } from "react-feather";
import data from "./data";

const members = [
  {
    id: 0,
    name: "SeoYeon",
    image1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b417ecacf18a73ddff_S1_%E1%84%89%E1%85%A5%E1%84%8B%E1%85%A7%E1%86%AB_ASSEMBLE24_01_s-p-500.jpg",
    image2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6628b3048de580e73ad7d894_S1_%E1%84%89%E1%85%A5%E1%84%8B%E1%85%A7%E1%86%AB_ASSEMBLE24_02_s-p-500.jpg",
    link: "s1-seoyeon",
  },
  {
    id: 1,
    name: "HyeRin",
    image1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b38a72a974e5520010_S5_%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A7%E1%86%AB_ASSEMBLE24_01_s-p-500.jpg",
    image2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6628b30427adcfc68c212939_S5_%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A7%E1%86%AB_ASSEMBLE24_02_s-p-500.jpg",
    link: "s2-hyerin",
  },
  {
    id: 2,
    name: "Jiwoo",
    image1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b3344b991e0f851579_S2_%E1%84%92%E1%85%A8%E1%84%85%E1%85%B5%E1%86%AB_ASSEMBLE24_01_s-p-500.jpg",
    image2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6628b30470a642b8356c3969_S2_%E1%84%92%E1%85%A8%E1%84%85%E1%85%B5%E1%86%AB_ASSEMBLE24_02_s-p-500.jpg",
    link: "s3-jiwoo",
  },
  {
    id: 3,
    name: "Kaede",
    image1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b384c7f360e033c1fb_S9_%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%83%E1%85%A6_ASSEMBLE24_01_s-p-500.jpg",
    image2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6628b30bbd0e0066eb27ffa2_S9_%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%83%E1%85%A6_ASSEMBLE24_02_s-p-500.jpg",
    link: "s4-kaede",
  },
  {
    id: 4,
    name: "SeoYeon",
    image1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b417ecacf18a73ddff_S1_%E1%84%89%E1%85%A5%E1%84%8B%E1%85%A7%E1%86%AB_ASSEMBLE24_01_s-p-500.jpg",
    image2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6628b3048de580e73ad7d894_S1_%E1%84%89%E1%85%A5%E1%84%8B%E1%85%A7%E1%86%AB_ASSEMBLE24_02_s-p-500.jpg",
    link: "s1-seoyeon",
  },
  {
    id: 5,
    name: "HyeRin",
    image1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b38a72a974e5520010_S5_%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A7%E1%86%AB_ASSEMBLE24_01_s-p-500.jpg",
    image2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6628b30427adcfc68c212939_S5_%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A7%E1%86%AB_ASSEMBLE24_02_s-p-500.jpg",
    link: "s2-hyerin",
  },
  {
    id: 6,
    name: "HyeRin",
    image1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b3344b991e0f851579_S2_%E1%84%92%E1%85%A8%E1%84%85%E1%85%B5%E1%86%AB_ASSEMBLE24_01_s-p-500.jpg",
    image2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6628b30470a642b8356c3969_S2_%E1%84%92%E1%85%A8%E1%84%85%E1%85%B5%E1%86%AB_ASSEMBLE24_02_s-p-500.jpg",
    link: "s3-jiwoo",
  },
  {
    id: 7,
    name: "Kaede",
    image1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b384c7f360e033c1fb_S9_%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%83%E1%85%A6_ASSEMBLE24_01_s-p-500.jpg",
    image2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6628b30bbd0e0066eb27ffa2_S9_%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%83%E1%85%A6_ASSEMBLE24_02_s-p-500.jpg",
    link: "s9-kaede",
  },
];

function PictureBoxes() {
  const [isHover, setIsHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  function handleMouseEnter(index) {
    setIsHover(true);
    setHoverIndex(index);
  }

  function handleMouseExit(index) {
    setIsHover(false);
    setHoverIndex(null);
  }

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.members.map((member, index) => (
          <Link href={`/member/${member.id}`} key={index}>
            <div
              className="duration-500"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseExit(index)}
              style={{
                backgroundImage:
                  isHover && index === hoverIndex
                    ? `url(${member.image2})`
                    : `url(${member.image1})`,
                height: "500px",
                width: "300px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PictureBoxes;
