/** @format */
"use client";

import { useState } from "react";
import { updateGuest } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";

export default function UpdateProfileDate({ children, guest }) {
  const [count, setCount] = useState(0);
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-6 px-4 sm:px-5 md:py-8 md:px-6 lg:px-8 text-base md:text-lg flex gap-4 md:gap-6 flex-col max-w-full w-[320px] sm:w-[400px] md:w-[600px] lg:w-[896px] mx-auto"
    >
      <div className="space-y-1 md:space-y-2">
        <label className="block mb-1 text-primary-200 text-sm md:text-base">
          Full name
        </label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-3 py-2 md:px-4 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-1 md:space-y-2">
        <label className="block mb-1 text-primary-200 text-sm md:text-base">
          Email address
        </label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-3 py-2 md:px-4 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-1 md:space-y-2">
        <div className="flex items-center justify-between mb-1">
          <label
            htmlFor="nationality"
            className="text-primary-200 text-sm md:text-base"
          >
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-4 md:h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-1 md:space-y-2">
        <label
          htmlFor="nationalID"
          className="block mb-1 text-primary-200 text-sm md:text-base"
        >
          National ID number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-3 py-2 md:px-4 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center mt-2 md:mt-4">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}
