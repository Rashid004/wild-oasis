/** @format */

import { auth } from "../_lib/auth";

/** @format */
export const metadata = {
  title: "Guest area",
};
export default async function page() {
  const session = await auth();
  console.log(session);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome {session.user.name}
    </h2>
  );
}
