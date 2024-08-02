/** @format */
import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border-primary-800 border">
      <div className="w-full sm:w-1/2 h-48 sm:h-auto relative">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col w-full sm:w-1/2">
        <div className="p-4 sm:p-5 md:p-6 bg-primary-950 flex-grow">
          <h3 className="text-accent-500 font-semibold text-xl sm:text-2xl mb-2 sm:mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-2 sm:gap-3 items-center mb-2">
            <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
            <p className="text-sm sm:text-base md:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-2 sm:gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl sm:text-2xl md:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600 text-sm sm:text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl sm:text-2xl md:text-3xl font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200 text-sm sm:text-base">
              / night
            </span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="block sm:inline-block border-t sm:border-l border-primary-800 py-3 px-4 sm:py-4 sm:px-6 hover:bg-accent-600 transition-all hover:text-primary-900 text-sm sm:text-base"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
