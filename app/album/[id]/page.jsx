"use client";

import React, { useState } from "react";
import data from "@/app/components/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Spotify } from "react-spotify-embed";
import GalleryModal from "@/app/components/GalleryModal";

function AlbumPage() {
  const { id } = useParams();

  const album = data.albums.find((album) => album.id === id);

  const participants = data.members.filter((member) =>
    album.participants.includes(member.id)
  );

  const participantsPhotos = [];
  participants.forEach((member) => {
    participantsPhotos.push(member.photos[0]);
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(
    participants[0].photos[0]
  );

  const handleGalleryClick = (photo) => {
    setShowModal(true);
    setSelectedPicture(photo);
  };

  console.log(participants);

  return (
    <div className="min-h-screen py-24 flex flex-col">
      <div className="w-full bg-black relative">
        <video
          id={album.videoId}
          autoPlay
          loop
          className="w-full opacity-45"
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
        <div className="absolute top-0 w-full flex items-center h-full justify-center">
          <Image
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px]"
            src={album.coverImage}
            width={300}
            height={300}
            alt={album.title}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center sm:h-[500px] md:h-auto lg:h-auto my-10">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          <h1 className="text-black text-2xl sm:text-3xl lg:text-5xl py-3 font-bold">
            {album.title}
          </h1>
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-10">
            <Image
              src={album.coverImage}
              // layout="fill"
              // objectFit="contain"
              width={380}
              height={380} // Use the actual aspect ratio of your image
              // objectFit="cover"
              alt={album.title}
              className="w-auto h-auto"
            />
            <Spotify link={album.musicLink} className="w-auto" />
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center my-10">
        <iframe
          // width="80%"
          // height="auto"
          style={{ width: "400px", height: "300px" }}
          src={album.musicVideo}
          title="tripleS 트리플에스 : Kaede.SSS"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {participants.map((member) => (
            <Image
              key={member.id}
              src={member.photos[0]}
              alt={member.name}
              width={300}
              height={300}
              onClick={() => handleGalleryClick(member.photos[0])}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <GalleryModal
          gallery={participantsPhotos}
          selected={selectedPicture}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default AlbumPage;
