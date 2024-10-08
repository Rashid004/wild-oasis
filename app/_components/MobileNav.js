/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function MobileNav({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 bottom-0 w-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center mt-8">
          <Link
            href="/cabins"
            className="block py-2 px-4 w-full text-center hover:text-accent-400 transition-colors"
            onClick={closeMenu}
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 w-full text-center hover:text-accent-400 transition-colors"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/account"
            className="block py-2 px-4 w-full text-center hover:text-accent-400 transition-colors"
            onClick={closeMenu}
          >
            {session?.user?.image ? (
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-8 rounded-full"
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
                <span>Guest area</span>
              </div>
            ) : (
              "Guest area"
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}
