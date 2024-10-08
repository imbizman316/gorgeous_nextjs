"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Resend } from "resend";

function NewsletterSubcribe() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("821092497693");
  const [thankMessage, setThankMessage] = useState("");

  const sendEmail = async () => {
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        sender: "Mikey Mike",
      }),
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    await sendEmail();

    const res = await fetch("/api/Emails", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      "Content-Type": "application/json",
    });

    if (!res.ok) {
      showWarningMessage();
      throw new Error("Failed to create Email");
    }

    showThankMessage();
  }

  function showThankMessage() {
    setThankMessage("Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setThankMessage(""), 3000);
  }

  function showWarningMessage() {
    setThankMessage("Enter an email to send");
    setEmail("");
    setTimeout(() => setThankMessage(""), 3000);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-10">
      <h1 className="text-2xl font-bold mb-5">Subscribe to newsletters</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-1"
      >
        <input
          placeholder="youremail@goeshere.com"
          type="email"
          className="bg-gray-300 sm:w-[20rem] lg:w-[50rem] md:w-[30rem] border-2 h-11 border-black px-3"
          value={email}
          onChange={handleChange}
        />
        <button className="bg-pink-500 px-10 py-2 text-white font-bold border-2 border-black">
          Subscribe
        </button>
      </form>
      <div className="h-5 text-blue-600 font-semibold duration-300">
        {thankMessage}
      </div>
    </div>
  );
}

export default NewsletterSubcribe;
