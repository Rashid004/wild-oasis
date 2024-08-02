/** @format */
"use client";
import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="w-full sm:w-auto bg-accent-500 px-4 py-2 sm:px-6 md:px-8 md:py-3 text-sm sm:text-base md:text-lg text-primary-800 font-semibold hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 rounded-md"
      disabled={pending}
      type="submit"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
