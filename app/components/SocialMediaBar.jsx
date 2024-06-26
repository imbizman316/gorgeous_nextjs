import React from "react";
import data from "./data";

function SocialMediaBar({ size = "text-3xl", color = "text-white" }) {
  return (
    <div className="flex flex-row gap-2">
      {data.socialMedia.map((item) => (
        <a key={item.id} href={item.link} target="_blank">
          <item.icon className={`${size} ${color}`} />
        </a>
      ))}
    </div>
  );
}

export default SocialMediaBar;
