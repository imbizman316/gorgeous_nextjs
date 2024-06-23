import React from "react";
import PictureBoxes from "./PictureBoxes";

function MembersPics() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[450px] sm:w-[600px] lg:w-full">
        <h1 className="sm:text-3xl md:text-md p-10 lg:text-4xl font-bold text-center">
          우리는 하나이자 스물넷입니다.
        </h1>
        <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-center mb-16">
          ASSEMBLE24
        </h1>
      </div>
      <PictureBoxes />
    </div>
  );
}

export default MembersPics;
