/** @format */
import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileDate from "@/app/_components/UpdateProfileDate";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className="px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
      <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl text-accent-400 mb-3 md:mb-4">
        Update your guest profile
      </h2>

      <p className="text-base md:text-lg mb-6 md:mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileDate guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-3 py-2 md:px-4 md:py-2.5 bg-primary-200 text-primary-800 w-full rounded-sm shadow-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileDate>
    </div>
  );
}
