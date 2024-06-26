"use client";

import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import Carousel from "./Carousel";
import {
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import SocialMediaBar from "./SocialMediaBar";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const slides = [
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

// max-w-lg

function MainSlide() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[2000px] relative">
        <div className="absolute z-10 bg-black w-full h-full opacity-30 p-10">
          <Image
            src="/images/6629c17b0d3d61385df923e5_tripleS-ASSEMBLE24-logo_design-p-800.png"
            width={300}
            height={300}
            alt="logo"
          />
          <h1 className="text-white font-bold text-2xl">2024.05.08 6 PM KST</h1>
          <hr className="border-1 my-2 w-[40%]" />
          <SocialMediaBar size="text-2xl" color="text-gray-500" />
          {/* <div className="flex flex-row gap-2 ">
            
          </div> */}
        </div>

        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full">
              <Image
                priority
                key={slide.id}
                src={slide.url}
                // layout="fill"
                // objectFit="contain"
                width={1000}
                height={1000} // Use the actual aspect ratio of your image
                // objectFit="cover"
                alt="image1"
                className="w-full h-auto"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MainSlide;
