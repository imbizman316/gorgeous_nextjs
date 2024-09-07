"use client";

import { useTheme } from "@/app/context/ThemeContext";
import React from "react";
import SignUpForm from "./SignUpForm";

function MemberSignup() {
  const { signUpPopUp, setSignUpPopUp } = useTheme();

  return (
    <div className="w-full min-h-screen items-center justify-end flex bg-white z-[800] flex-col pt-[200px] fixed">
      <div>Become a WAV</div>
      <div className="flex flex-row">
        <SignUpForm />
        {/* <form action="" className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" type="text" className="bg-slate-300" />
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" type="text" className="bg-slate-300" />
          <label htmlFor="email">Email</label>
          <input name="Email" type="text" className="bg-slate-300" />
          <label htmlFor="password">Password</label>
          <input name="password" type="text" className="bg-slate-300" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input name="confirmPassword" type="text" className="bg-slate-300" />
        </form> */}
        <div>
          <div>
            <h1>Benefits</h1>
            <p>Free Trial - $59/mo after</p>
          </div>
          <hr />
          <div>
            <div>
              <p>I have zero regret for joining this awesome membership.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Billing Information</h1>
          <div>
            <label htmlFor="cardName">Name on card</label>
            <input name="cardName" type="text" className="bg-gray-300" />
          </div>
        </div>
      </div>
      <h1
        onClick={() => setSignUpPopUp(false)}
        className="text-4xl cursor-pointer"
      >
        X
      </h1>
    </div>
  );
}

export default MemberSignup;
