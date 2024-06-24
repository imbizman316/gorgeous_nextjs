"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import data from "./data";

function Navbar() {
  const [showMembers, setShowMembers] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);
  const [currentMember, setCurrentMember] = useState("");
  const [currentAlbum, setCurrentAlbum] = useState("");

  const handleMemberClick = () => {
    setShowAlbums(false);
    setShowMembers(!showMembers);
  };

  const handleAlbumClick = () => {
    setShowMembers(false);
    setShowAlbums(!showAlbums);
  };

  const handleSetCurrentMember = (id) => {
    setCurrentMember(id);
  };

  const handleSetCurrentAlbum = (id) => {
    setCurrentAlbum(id);
  };

  useEffect(() => {
    setShowAlbums(false);
    setShowMembers(false);
  }, [currentMember, currentAlbum]);

  return (
    <div className="flex flex-row justify-between mx-auto px-10 py-5 items-center fixed w-full h-[100px] z-10 bg-white opacity-[95%]">
      <Link className="text-3xl font-bold" href="/">
        <div>tripleS</div>
      </Link>
      <div className="flex flex-row gap-6 items-center">
        <div
          style={{ userSelect: "none" }}
          className="cursor-pointer relative p-2"
        >
          <h1 onClick={handleMemberClick}>Member</h1>
          <div
            className={`${
              showMembers ? "block" : "hidden"
            } absolute z-20 bg-white p-5 flex flex-col gap-3`}
          >
            {data.members.map((member) => (
              <Link
                className={`${
                  currentMember === member.id && "text-yellow font-semibold"
                }`}
                href={`/member/${member.id}`}
                key={member.id}
                onClick={() => handleSetCurrentMember(member.id)}
              >
                {member.name}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="cursor-pointer relative p-2"
          style={{ userSelect: "none" }}
        >
          <h1 onClick={handleAlbumClick}>Album</h1>
          <div
            className={`${
              showAlbums ? "block" : "hidden"
            } absolute z-20 bg-white p-5 flex flex-col gap-3`}
          >
            {data.albums.map((album) => (
              <Link
                href={`/album/${album.id}`}
                key={album.id}
                onClick={() => handleSetCurrentAlbum(album.id)}
              >
                {album.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-black text-white p-3 line-clamp-2 w-[120px] text-center">
          COSMO APP DOWNLOAD
        </div>
      </div>
    </div>
  );
}

export default Navbar;
