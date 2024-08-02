/** @format */
import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const metadata = {
  title: "Cabin",
};

export const revalidate = 3600;
export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-6 sm:mb-7 md:mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
