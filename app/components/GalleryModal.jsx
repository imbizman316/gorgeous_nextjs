import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";

function GalleryModal({ gallery, selected, setShowModal }) {
  const mainPicture = gallery.find((item) => item === selected);

  return (
    <div className="w-screen h-screen absolute bg-black z-10 t-0 opacity-90 flex flex-col justify-center items-center">
      <IoMdClose
        className="text-white text-3xl"
        onClick={() => setShowModal(false)}
      />
      <Image className="" src={selected} alt="main" width={400} height={400} />
      <div className="flex flex-row gap-7">
        {gallery.map((item, index) => (
          <Image
            className=""
            src={item}
            alt="main"
            width={200}
            height={200}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryModal;
