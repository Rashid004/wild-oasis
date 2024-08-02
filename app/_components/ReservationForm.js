/** @format */

// /** @format */

"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

// function ReservationForm({ cabin, user }) {
//   const { range, resetRange } = useReservation();
//   const { maxCapacity, regularPrice, discount, id } = cabin;

//   const startDate = range.from;
//   const endDate = range.to;

//   const numNights = differenceInDays(endDate, startDate);
//   const cabinPrice = numNights * (regularPrice - discount);

//   const bookingData = {
//     startDate,
//     endDate,
//     numNights,
//     cabinPrice,
//     cabinId: id,
//   };

//   const createBookingWithData = createBooking.bind(null, bookingData);

//   return (
//     <div className="scale-[1.01]">
//       <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
//         <p>Logged in as</p>

//         <div className="flex gap-4 items-center">
//           <img
//             // Important to display google profile images
//             referrerPolicy="no-referrer"
//             className="h-8 rounded-full"
//             src={user.image}
//             alt={user.name}
//           />
//           <p>{user.name}</p>
//         </div>
//       </div>

//       <form
//         // action={createBookingWithData}
//         action={async (formData) => {
//           await createBookingWithData(formData);
//           resetRange();
//         }}
//         className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
//       >
//         <div className="space-y-2">
//           <label htmlFor="numGuests">How many guests?</label>
//           <select
//             name="numGuests"
//             id="numGuests"
//             className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
//             required
//           >
//             <option value="" key="">
//               Select number of guests...
//             </option>
//             {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
//               <option value={x} key={x}>
//                 {x} {x === 1 ? "guest" : "guests"}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="observations">
//             Anything we should know about your stay?
//           </label>
//           <textarea
//             name="observations"
//             id="observations"
//             className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
//             placeholder="Any pets, allergies, special requirements, etc.?"
//           />
//         </div>

//         <div className="flex justify-end items-center gap-6">
//           {!(startDate && endDate) ? (
//             <p className="text-primary-300 text-base">
//               Start by selecting dates
//             </p>
//           ) : (
//             <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);
  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-4 sm:px-16 py-2 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-2 sm:mb-0">Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-6 sm:py-10 px-4 sm:px-16 text-base sm:text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
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

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
