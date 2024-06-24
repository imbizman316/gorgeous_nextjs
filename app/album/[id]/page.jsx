"use client";

import React from "react";
import data from "@/app/components/data";
import { useParams } from "next/navigation";

function AlbumPage() {
  const { id } = useParams();

  const album = data.albums.find((album) => album.id === id);

  return (
    <div className="min-h-screen pt-24">
      <div className="w-full bg-black">
        <video
          id={album.videoId}
          autoPlay
          loop
          className="w-full opacity-50"
          style={{
            backgroundImage: `url(
          ${album.stillImage}
        )`,
          }}
          muted
          playsInline
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source src={album.video1} data-wf-ignore="true" />
          <source src={album.video2} data-wf-ignore="true" />
        </video>
      </div>
    </div>
  );
}

export default AlbumPage;
