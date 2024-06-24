"use client";

import React from "react";
import AlbumItem from "./AlbumItem";
import Carousel from "./Carousel";
import data from "./data";

function Albums() {
  return (
    <div>
      <div className="p-10 w-[90%]">
        <h1 className="text-4xl font-bold">Album</h1>
      </div>
      <Carousel autoSlide={true} autoSlideInterval={300000}>
        {data.albums.map((album) => (
          <AlbumItem
            key={album.title}
            coverImage={album.coverImage}
            title={album.title}
            stillImage={album.stillImage}
            videoId={album.videoId}
            video1={album.video1}
            video2={album.video2}
            musicLink={album.musicLink}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Albums;
