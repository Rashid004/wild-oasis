/** @format */
import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div className="p-4 md:p-6 lg:p-8 pb-20 md:pb-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent-400 mb-6">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg text-primary-700">
          You have no reservations yet. Check out our{" "}
          <a
            className="underline text-accent-500 hover:text-accent-600 transition-colors"
            href="/cabins"
          >
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
