/** @format */
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  console.log(session);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 pb-20 sm:pb-8 min-h-screen bg-primary-900">
      <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-accent-400 mb-4 sm:mb-6 md:mb-8">
        Welcome, {session.user.name}
      </h2>
    </div>
  );
}
