import React from "react";

function VideoContainer() {
  return (
    <div className="flex items-center justify-center p-10">
      <iframe
        className="w-[700px] h-[300px] md:w-[700px] md:h-[420px] lg:w-[1360px] lg:h-[800px]"
        width="1300"
        height="500"
        src="https://www.youtube.com/embed/3TQd2ahq6oU?si=j0bvvOmHppe7HAsh"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoContainer;
