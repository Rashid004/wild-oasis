/** @format */

import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 py-8 sm:py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-accent-400">
        Oops! Page Not Found
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-primary-300 mb-8 sm:mb-10 max-w-md">
        We&lsquo;re sorry, but the page you&lsquo;re looking for couldn&lsquo;t
        be found.
      </p>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-900 px-6 py-3 text-base sm:text-lg font-medium rounded-md hover:bg-accent-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
