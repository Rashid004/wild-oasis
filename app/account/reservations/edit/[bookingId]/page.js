/** @format */

import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = params;
  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div className="p-4 md:p-6 lg:p-8 xl:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent-400 mb-6 md:mb-8 lg:mb-10">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-primary-900 py-6 px-4 md:py-8 md:px-6 lg:py-8 lg:px-8 xl:px-12 text-lg flex flex-col gap-6"
      >
        <input type="hidden" value={bookingId} name="bookingId" />

        <div className="space-y-4">
          <label
            htmlFor="numGuests"
            className="block text-sm md:text-base lg:text-lg font-medium"
          >
            How many guests?
          </label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-4 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base lg:text-lg"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <label
            htmlFor="observations"
            className="block text-sm md:text-base lg:text-lg font-medium"
          >
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-4 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base lg:text-lg"
            rows="4" // Adjust row count based on your needs
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between md:justify-end items-center gap-4">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
