import React from "react";
import Image from "next/image";
import AlbumItem from "./AlbumItem";

const albums = [
  {
    id: 0,
    coverImage:
      "/images/6662a9f2ef515045bfcf5ee9_album-cover_ASSEMBLE24-p-800.jpg",
    title: "<ASSEMBLE24>",
    videoId: "a2d63bef-afd8-5bb3-b422-46a1028899d4-video",
    stillImage:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6627ed2b49e2df8779650ea2_231018_X_trendtakeover_tripleS-poster-00001.jpg",
    video1:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6627ed2b49e2df8779650ea2_231018_X_trendtakeover_tripleS-transcode.mp4",
    video2:
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6627ed2b49e2df8779650ea2_231018_X_trendtakeover_tripleS-transcode.webm",
    musicLink:
      "https://open.spotify.com/album/1FEdDqMaOL8oZYzI4n27GM?si=mTiITmlHQpaGkoivGTv8Jw",
  },
];

function Albums() {
  return (
    <div>
      {albums.map((album) => (
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
    </div>
  );
}

export default Albums;
