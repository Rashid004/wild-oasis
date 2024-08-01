/** @format */

/** @format */

import Link from "next/link";
import { auth } from "../_lib/auth";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

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

// /** @format */

// import Link from "next/link";
// import { auth } from "../_lib/auth";

// export default async function Navigation() {
//   const session = await auth();

//   return (
//     <nav className="flex items-center">
//       <ul className="flex gap-2 sm:gap-4 md:gap-8 items-center text-sm sm:text-base">
//         <li>
//           <Link
//             href="/cabins"
//             className="hover:text-accent-400 transition-colors"
//           >
//             Cabins
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/about"
//             className="hover:text-accent-400 transition-colors"
//           >
//             About
//           </Link>
//         </li>
//         <li>
//           {session?.user?.image ? (
//             <Link
//               href="/account"
//               className="hover:text-accent-400 transition-colors flex items-center gap-2"
//             >
//               <img
//                 className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
//                 src={session.user.image}
//                 alt={session.user.name}
//                 referrerPolicy="no-referrer"
//               />
//               <span className="hidden md:inline">Guest area</span>
//             </Link>
//           ) : (
//             <Link
//               href="/account"
//               className="hover:text-accent-400 transition-colors"
//             >
//               Guest area
//             </Link>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// }
