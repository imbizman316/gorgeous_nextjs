"use client";

import SliderAllMembers from "@/app/components/SliderAllMembers";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import data from "@/app/components/data";

function MemberDetail() {
  const { id } = useParams();
  const memberDetail = data.members.find((member) => member.id === id);

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
      {/* <SliderAllMembers /> */}
    </div>
  );
}

export default MemberDetail;
