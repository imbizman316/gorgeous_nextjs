import React from "react";
import Image from "next/image";
import { Spotify } from "react-spotify-embed";

function AlbumItem({
  key,
  coverImage,
  title,
  stillImage,
  videoId,
  video1,
  video2,
  musicLink,
}) {
  return (
    <div className="flex flex-col items-center justify-center sm:h-[500px] md:h-auto lg:h-auto">
      <div className="relative">
        <video
          id={videoId}
          autoPlay
          loop
          style={{
            backgroundImage: `url(
          ${stillImage}
        )`,
          }}
          muted
          playsInline
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source src={video1} data-wf-ignore="true" />
          <source src={video2} data-wf-ignore="true" />
        </video>
        <div className="absolute top-0 flex flex-col justify-evenly items-center w-full h-full">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl py-3 font-bold">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-10">
            <Image
              src={coverImage}
              // layout="fill"
              // objectFit="contain"
              width={380}
              height={380} // Use the actual aspect ratio of your image
              // objectFit="cover"
              alt={title}
              className="w-auto h-auto"
            />
            <Spotify link={musicLink} className="w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumItem;
