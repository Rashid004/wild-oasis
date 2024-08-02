/** @format */

// /** @format */

import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileDate";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

// export const metadata = {
//   title: "Update profile",
// };

// export default async function Page() {
//   const session = await auth();
//   const guest = await getGuest(session.user.email);

//   return (
//     <div className="w-full px-4 sm:px-6 md:px-8 lg:pr-8">
//       <h2 className="font-semibold text-2xl text-accent-400 mb-4">
//         Update your guest profile
//       </h2>

//       <p className="text-lg mb-8 text-primary-200">
//         Providing the following information will make your check-in process
//         faster and smoother. See you soon!
//       </p>

//       <UpdateProfileForm guest={guest}>
//         <SelectCountry
//           name="nationality"
//           id="nationality"
//           className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
//           defaultCountry={guest.nationality}
//         />
//       </UpdateProfileForm>
//     </div>
//   );
// }

// Page.js (Profile component)
export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className="w-full h-full flex flex-col p-8">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
