import React from "react";

function VideoContainer() {
  return (
    <div className="flex items-center justify-center p-10">
      <iframe
        className="w-[400px] h-[300px] md:w-[600px] md:h-[500px] lg:w-[1260px] lg:h-[1000px]"
        width="1260"
        height="600"
        src="https://www.youtube.com/embed/3TQd2ahq6oU?si=j0bvvOmHppe7HAsh"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoContainer;
