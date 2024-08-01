/** @format */

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-4 z-10">
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <Image
          quality={100}
          fill
          src={logo}
          alt="The Wild Oasis"
          className="object-contain"
        />
      </div>

      <span className="text-sm sm:text-base md:text-lg font-semibold text-primary-100  sm:inline">
        The Wild Oasis
      </span>
    </Link>
  );
}
