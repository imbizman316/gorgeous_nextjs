"use client";

import React from "react";
import AlbumItem from "./AlbumItem";
import Carousel from "./Carousel";
import data from "./data";

function Albums() {
  return (
    <div className="h-[750px] sm:h-[750px] md:h-[600px] lg:h-[800px] justify-center items-center">
      <div className="p-10 w-[90%]">
        <h1 className="text-4xl font-bold">Album</h1>
      </div>
      <Carousel autoSlide={true} autoSlideInterval={300000}>
        {data.albums.map((album) => (
          <div key={album.title}>
            <AlbumItem
              coverImage={album.coverImage}
              title={album.title}
              stillImage={album.stillImage}
              videoId={album.videoId}
              video1={album.video1}
              video2={album.video2}
              musicLink={album.musicLink}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Albums;
