"use client";

import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const images = [
  {
    id: 0,
    url: "/images/662a5f4466fa6494f734114e_cover_img_01.jpg",
    title: "image1",
  },
  {
    id: 1,
    url: "/images/66301a92b77493803ef9ed8e_cover_img_new_04.jpg",
    title: "image2",
  },
  {
    id: 2,
    url: "/images/66301a921faa4deebddd43e7_cover_img_new_02.jpg",
    title: "image3",
  },
];

function MainSlide() {
  const [position, setPosition] = useState(200);

  const handleSlide = () => {
    setPosition(position - 100);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center w-full relative">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            // layout="fill"
            // objectFit="contain"
            width={300}
            height={300} // Use the actual aspect ratio of your image
            objectFit="contain"
            alt="image1"
            className={`left-[${position}px] absolute`}
          />
        ))}
      </div>
      {images.map((image, index) => (
        <button key={index} onClick={handleSlide}>
          <FaCircle className="text-black" />
        </button>
      ))}
    </div>
  );
}

export default MainSlide;
