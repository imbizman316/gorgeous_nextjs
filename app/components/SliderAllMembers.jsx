"use client";

import React, { useState } from "react";
import data from "./data";
import Image from "next/image";
import Link from "next/link";

const imagesPerPage = 5;

function SliderAllMembers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = data.members.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + imagesPerPage;
      return nextIndex >= totalImages ? 0 : nextIndex;
    });
  };

  return (
    <div className="py-10 w-[100%] h-[600px] relative">
      <div className="w-[100%] h-[100%] overflow-hidden">
        <div
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${(currentIndex / imagesPerPage) * 100}%)`,
            width: `${totalPages * 100}%`,
          }}
        >
          {data.members.map((member, index) => (
            <Link
              href={`/member/${member.id}`}
              key={index}
              className="w-[20%] h-[500px]"
              style={{ flex: "0 0 20%" }}
            >
              <Image
                src={member.photos[0]}
                alt={member.name}
                className="w-[100%] h-[500px]"
                width={600}
                height={600}
              ></Image>
            </Link>
          ))}
          {/* Add empty divs to fill the last page if needed */}
          {Array.from({
            length: imagesPerPage - (totalImages % imagesPerPage),
          }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="w-[20%] h-[500px]"
              style={{ flex: "0 0 20%" }}
            ></div>
          ))}
        </div>
      </div>
      <button onClick={handleClick} className="mt-5">
        Move the pictures
      </button>
      <h1>{Math.ceil(currentIndex / imagesPerPage) + 1}</h1>
    </div>
  );
}

export default SliderAllMembers;

// "use client";

// import React, { useState } from "react";
// import data from "./data";
// import Image from "next/image";
// import Link from "next/link";

// const imagesPerPage = 5;

// function SliderAllMembers() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleClick = () => {
//     setCurrentIndex((prevIndex) => {
//       const nextIndex = prevIndex + imagesPerPage;
//       return nextIndex >= data.members.length ? 0 : nextIndex;
//     });
//   };

//   return (
//     <div className="py-10 w-full h-[600px] relative">
//       <div className="w-[100%] h-[100%] overflow-hidden">
//         <div
//           className="flex transition-transform duration-1000"
//           style={{
//             transform: `translateX(-${(currentIndex / imagesPerPage) * 100}%)`,
//             width: `${(data.members.length / imagesPerPage) * 100}%`,
//           }}
//         >
//           {data.members.map((member, index) => (
//             <Link
//               href={`/member/${member.id}`}
//               key={index}
//               className="w-[500px] h-[500px]"
//               style={{ flex: "0 0 auto" }}
//             >
//               <Image
//                 src={member.photos[0]}
//                 alt={member.name}
//                 className="w-[600px] h-[500px]"
//                 width={500}
//                 height={500}
//               ></Image>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <button onClick={handleClick} className="mt-5">
//         Move the pictures
//       </button>
//       <h1>{currentIndex / imagesPerPage + 1}</h1>
//     </div>
//   );
// }

// export default SliderAllMembers;

// "use client";

// import React, { useState } from "react";
// import data from "./data";
// import Image from "next/image";
// import Link from "next/link";

// function SliderAllMembers() {
//   const [page, setPage] = useState(1);

//   const handleClick = () => {
//     setPage(page + 1);
//   };

//   return (
//     <div className="py-10 w-[600px] h-[600px] relative">
//       <div className="w-[100%] h-[100%] overflow-hidden flex">
//         {data.members.map((member, index) => (
//           <Link
//             href={`/member/${member.id}`}
//             key={index}
//             className={`translate-x-[${
//               -10 * page
//             }px] w-[600px] h-[500px] duration-300`}
//           >
//             <Image
//               src={member.photos[0]}
//               alt={member.name}
//               className="w-[600px] h-[500px]"
//               width={600}
//               height={600}
//             ></Image>
//           </Link>
//         ))}
//       </div>
//       <button onClick={handleClick}>Move the pictures</button>
//       <h1>{page}</h1>
//     </div>
//   );
// }

// export default SliderAllMembers;
