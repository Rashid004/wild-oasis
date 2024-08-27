/** @format */

/** @format */

import Link from "next/link";
import { auth } from "../_lib/auth";
import MobileNav from "./MobileNav";

export default async function Navigation() {
  const session = await auth();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:flex flex-wrap items-center text-base justify-center hidden">
          <Link
            href="/cabins"
            className="mr-5 hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="mr-5 hover:text-accent-400 transition-colors"
          >
            About
          </Link>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </nav>

        <MobileNav session={session} />
      </div>
    </header>
  );
}
