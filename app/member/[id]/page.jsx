"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const memberDetails = [
  {
    id: "s3-jiwoo",
    name: "",
    mainImage: "",
    summary: "",
    activities: [
      "2023.02 tripleS 'Rising'",
      "2023.05 +(KR)ystal Eyes 'Cherry Talk'",
      "2023.10 EVOLution 'Invincible'",
    ],
    varities: ["2021 리얼:타임:러브:아이:러브:디엠", "2021 MBC '방과후 설렘'"],
    photoAlbums: ["2022.12 Y매거진"],
    photos: [
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/6630386b2189ddf62ab6ffaf_%E1%84%89%E1%85%A5%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%AB-Rising-%E1%84%90%E1%85%B5%E1%84%8C%E1%85%A5_s-p-800.jpg",
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662efe074e60e3ebb5f34d0f_%E1%84%85%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%89%E1%85%A7%E1%86%AB-%E1%84%90%E1%85%B5%E1%84%8C%E1%85%A5-%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%AB_s-p-800.jpg",
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662efe080d51b3d2d278863d_%5BAria%5D-%E1%84%80%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B5%E1%84%8C%E1%85%A5_%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%AB_s-p-800.jpg",
      "https://cdn.prod.website-files.com/654d79c08e32147b917ae9cf/662cc4b384c7f360e033c39c_S10_%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%AB_ASSEMBLE24_01_s-p-800.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/tuGbExoxJEk",
      "https://www.youtube.com/embed/26aXWkTp9L4",
      "https://www.youtube.com/embed/h69_Y2EKbf0",
    ],
  },
  {
    id: "s9-kaede",
    name: "Kaede",
    fullName: "山田 楓 (야마다 카에데, Yamada Kaede)",
    mainImage: "https://pbs.twimg.com/media/GMb7CXIW0AA_Wll.jpg:large",
    summary:
      "S9 카에데는 밝고 쾌활한 성격의 소유자로, 귀여운 외모에 높은 아이돌 능력치로 주목 받고 있다! 다이나믹한 댄스가 강점!",
    activities: [
      "2023.02 tripleS 'Rising'",
      "2023.05 +(KR)ystal Eyes 'Cherry Talk'",
      "2023.10 EVOLution 'Invincible'",
    ],
    varities: ["2021 리얼:타임:러브:아이:러브:디엠", "2021 MBC '방과후 설렘'"],
    photoAlbums: ["2022.12 Y매거진"],
    photos: [
      "/images/kaede_01.jpg",
      "/images/kaede_02.jpg",
      "/images/kaede_03.jpg",
      "/images/kaede_04.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/tuGbExoxJEk",
      "https://www.youtube.com/embed/26aXWkTp9L4",
      "https://www.youtube.com/embed/h69_Y2EKbf0",
    ],
  },
];

function MemberDetail() {
  const { id } = useParams();
  const memberDetail = memberDetails.find((member) => member.id === id);

  return (
    <div className="pt-[120px] min-h-screen px-[2.5rem]">
      <div className="flex items-center justify-center w-full">
        <div
          style={{
            backgroundImage: `url(${memberDetail.mainImage})`,
            width: "700px",
            height: "700px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div>
          <h1 className="text-4xl font-extrabold mb-10">{memberDetail.name}</h1>
          <h1 className="max-w-[300px]">{memberDetail.summary}</h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <table>
            <tbody>
              <tr>
                <th>이름</th>
                <td>{memberDetail.fullName}</td>
              </tr>
              <tr>
                <th>활동 경력</th>
                <td>
                  {memberDetail.activities.map((activity, index) => (
                    <h1 key={index}>{activity}</h1>
                  ))}
                </td>
              </tr>
              <tr>
                <th>방송 경력</th>
                <td>
                  {memberDetail.varities.map((varity, index) => (
                    <h1 key={index}>{varity}</h1>
                  ))}
                </td>
              </tr>
              <tr>
                <th>화보</th>
                <td>
                  {memberDetail.photoAlbums.map((photo, index) => (
                    <h1 key={index}>{photo}</h1>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center w-full my-[5rem]">
        <div className="grid grid-cols-2 gap-10">
          {memberDetail.photos.map((photo, index) => (
            <Image
              key={index}
              src={photo}
              alt={memberDetail.name}
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-10 px-[2.3rem]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {memberDetail.videos.map((video, index) => (
            <iframe
              key={index}
              width="auto"
              height="170"
              src={video}
              title="tripleS 트리플에스 : Kaede.SSS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberDetail;
