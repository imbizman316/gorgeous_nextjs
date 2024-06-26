import Link from "next/link";
import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import SocialMediaBar from "./SocialMediaBar";

function Footer() {
  return (
    <div className="w-full px-10 py-5 bg-black text-white h-[180px]">
      <div className="flex flex-row justify-between items-center">
        <Link className="text-3xl font-bold" href="/">
          tripleS
        </Link>
        <SocialMediaBar size="text-3xl" color="text-white" />
        {/* <div className="flex flex-row gap-2">
          <a href="https://www.youtube.com/watch?v=HndlMCswvC0" target="_blank">
            <FaYoutube className="text-3xl" />
          </a>
          <a href="">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="">
            <FaTiktok className="text-3xl" />
          </a>
          <a href="">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="">
            <FaDiscord className="text-3xl" />
          </a>
        </div> */}
      </div>
      <hr className="my-8" />
      <div>Modhaus Inc. All rights reserved</div>
    </div>
  );
}

export default Footer;
