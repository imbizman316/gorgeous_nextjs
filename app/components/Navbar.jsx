"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import data from "./data";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "../context/ThemeContext";
import TestHamburgerButton from "./FrontendPractice/TestHamburgerButton";
import MemberSignup from "./(signup)/MemberSignup";

function Navbar() {
  const [showMembers, setShowMembers] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);
  const [currentMember, setCurrentMember] = useState("");
  const [currentAlbum, setCurrentAlbum] = useState("");
  // const [showHamburger, setShowHamburger] = useState(false);

  const { showMore, setShowMore } = useTheme();
  const { showHamburger, setShowHamburger } = useTheme();
  const { signUpPopUp, setSignUpPopUp } = useTheme();

  const handleMemberClick = () => {
    setShowAlbums(false);
    setShowMembers(!showMembers);
  };

  const handleAlbumClick = () => {
    setShowMembers(false);
    setShowAlbums(!showAlbums);
  };

  const handleSetCurrentMember = (id) => {
    setShowHamburger(false);
    setCurrentMember(id);
  };

  const handleSetCurrentAlbum = (id) => {
    setShowHamburger(false);
    setCurrentAlbum(id);
  };

  useEffect(() => {
    setShowAlbums(false);
    setShowMembers(false);
  }, [currentMember, currentAlbum]);

  return (
    <div className="flex flex-row justify-between mx-auto px-10 py-5 items-center w-full h-[100px] z-50 bg-white bg-opacity-30 backdrop-blur-lg border border-white/30 shadow-lg fixed">
      <Link className="text-3xl font-bold" href="/">
        <div>tripleS</div>
      </Link>
      <div
        className={`${
          showHamburger ||
          (!showHamburger && "lg:flex md:flex-row lg:flex-row gap-6 md:flex")
        } ${
          showHamburger
            ? "flex flex-col items-center justify-start pt-10 absolute w-full top-24 bg-white bg-opacity-30 backdrop-blur-lg left-0 min-h-[30rem] border border-white/30"
            : "hidden"
        }`}
      >
        <div
          style={{ userSelect: "none" }}
          className="cursor-pointer relative p-2 flex justify-center items-center"
          onClick={handleMemberClick}
        >
          <h1 className="text-sm">Member</h1>
          <div
            className={`${
              showMembers ? "block" : "hidden"
            } absolute z-60 bg-gray-800 p-5 flex flex-col gap-3 text-white top-10`}
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
          className="cursor-pointer relative p-2 flex justify-center items-center"
          style={{ userSelect: "none" }}
          onClick={handleAlbumClick}
        >
          <h1 className="text-sm">Album</h1>
          <div
            className={`${
              showAlbums ? "block" : "hidden"
            } absolute z-60 bg-gray-800 text-white p-5 flex flex-col gap-3 top-10`}
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
        <div
          className="flex items-center justify-center text-sm cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          <h1>More {showMore ? "-" : "+"}</h1>
        </div>
        <div
          className="bg-black text-white p-2 py-3 text-[11px] line-clamp-2 w-[120px] text-center cursor-pointer"
          onClick={() => setSignUpPopUp(true)}
        >
          BECOME A MEMBER
        </div>
      </div>
      <TestHamburgerButton />
      {signUpPopUp && <MemberSignup />}
    </div>
  );
}

export default Navbar;
