/** @format */
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  console.log(session);

  return (
    <div className="w-1/2 md:w-2/3 lg:w-full p-4 md:p-8 pb-20 md:pb-8 min-h-screen bg-primary-900">
      <h2 className="font-semibold text-xl md:text-2xl text-accent-400 mb-4 md:mb-7">
        Welcome {session.user.name}
      </h2>
    </div>
  );
}
