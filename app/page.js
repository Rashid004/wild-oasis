/** @format */

import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Image
        src={bg}
        fill
        quality={80}
        placeholder="blur"
        className="object-cover object-center"
        alt="Mountains and forests with two cabins"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-50 mb-6 sm:mb-8 md:mb-10 tracking-tight font-normal leading-tight">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="inline-block bg-accent-500 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-primary-800 text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-accent-600 transition-all duration-300 ease-in-out"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
