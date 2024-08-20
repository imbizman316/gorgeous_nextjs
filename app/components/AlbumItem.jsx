import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Image from "next/image";
import { Spotify } from "react-spotify-embed";

const AlbumItem = forwardRef(
  (
    { coverImage, title, stillImage, videoId, video1, video2, musicLink },
    ref
  ) => {
    const spotifyRef = useRef(null);

    // Expose a method to stop the Spotify playback
    useImperativeHandle(ref, () => ({
      stopSpotify: () => {
        if (spotifyRef.current) {
          // Here you might need to implement the stop functionality or ensure the Spotify component can handle it
          // Some Spotify embed players might not provide a direct way to stop playback
          // You might need to implement a workaround, such as re-rendering the component
          spotifyRef.current.src = ""; // Reset the src to stop playback
        }
      },
    }));

    return (
      <div className="relative flex flex-col items-center justify-center sm:h-[700px] md:h-auto lg:h-auto z-20 pointer-events-auto">
        <div className="relative">
          <video
            id={videoId}
            autoPlay
            loop
            style={{
              backgroundImage: `url(${stillImage})`,
            }}
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
            className="relative z-10 pointer-events-none"
          >
            <source src={video1} data-wf-ignore="true" />
            <source src={video2} data-wf-ignore="true" />
          </video>
          <div className="absolute top-0 flex flex-col justify-evenly items-center w-full h-full z-30 pointer-events-auto">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl py-3 font-bold">
              {title}
            </h1>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-10">
              <div className="flex justify-center items-center">
                <Image
                  src={coverImage}
                  alt={title}
                  width={380}
                  height={380}
                  className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[300px] lg:h-[300px] xl:w-[380px] xl:h-[380px] object-cover z-30"
                />
              </div>
              <Spotify
                link={musicLink}
                className="relative z-40 w-auto pointer-events-auto h-[400px]"
                ref={spotifyRef}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

// Adding a display name to the forwardRef component
AlbumItem.displayName = "AlbumItem";

export default AlbumItem;
