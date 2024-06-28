"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function NewsletterSubcribe() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/Emails", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create Email");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-[200px]">
      <h1 className="text-2xl font-bold mb-5">Subscribe to newsletters</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="bg-gray-300 sm:w-[20rem] lg:w-[50rem] md:w-[40rem] border-2 mb-5 h-11 border-black"
          value={email}
          onChange={handleChange}
        />
        <button className="bg-pink-500 px-10 py-2 text-white font-bold border-2 border-black">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterSubcribe;
