import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";

function GalleryModal({ gallery, selected, setShowModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center">
      <IoMdClose
        className="text-white text-3xl absolute top-5 right-5 cursor-pointer"
        onClick={() => setShowModal(false)}
      />
      <Image
        className="mb-5"
        src={selected}
        alt="main"
        width={600}
        height={600}
      />
      <div className="flex flex-row gap-7 overflow-x-auto">
        {gallery.map((item, index) => (
          <Image
            className="cursor-pointer"
            src={item}
            alt={`Thumbnail ${index}`}
            width={200}
            height={200}
            key={index}
            onClick={() => setSelectedPicture(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryModal;
