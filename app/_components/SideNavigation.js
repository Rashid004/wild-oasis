/** @format */

// /** @format */
// "use client";
// import {
//   CalendarDaysIcon,
//   HomeIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";
// import SignOutButton from "./SignOutButton";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   {
//     name: "Home",
//     href: "/account",
//     icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
//   },
//   {
//     name: "Reservations",
//     href: "/account/reservations",
//     icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
//   },
//   {
//     name: "Guest profile",
//     href: "/account/profile",
//     icon: <UserIcon className="h-5 w-5 text-primary-600" />,
//   },
// ];

// function SideNavigation() {
//   const pathname = usePathname();

//   return (
//     <nav className="z-30 fixed inset-x-0 bottom-0 md:relative md:w-60 lg:w-72 bg-primary-800 border-t md:border-t-0 border-r border-primary-900 md:border-r">
//       <ul className="flex md:flex-col justify-around md:justify-start md:h-full text-lg gap-2 ">
//         {navLinks.map((link) => (
//           <li key={link.name} className="flex items-center">
//             <Link
//               className={`${
//                 pathname === link.href ? "bg-primary-900 text-primary-100 " : ""
//               } flex items-center py-3 px-4 hover:bg-primary-700 hover:text-primary-100 transition-colors font-semibold text-primary-200 rounded-md w-full  gap-4`}
//               href={link.href}
//             >
//               {link.icon}
//               <span className="hidden md:inline ml-3">{link.name}</span>
//             </Link>
//           </li>
//         ))}

//         <li className="mt-auto md:mt-auto flex justify-center md:justify-end">
//           <SignOutButton />
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default SideNavigation;
/** @format */
"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="z-30 fixed inset-x-0 bottom-0 lg:relative lg:w-72 bg-primary-800 border-t lg:border-t-0 border-r border-primary-900 lg:border-r">
      <ul className="flex lg:flex-col justify-around lg:justify-start lg:h-full text-lg gap-2">
        {navLinks.map((link) => (
          <li key={link.name} className="flex items-center">
            <Link
              className={`${
                pathname === link.href ? "bg-primary-900 text-primary-100 " : ""
              } flex items-center py-3 px-4 hover:bg-primary-700 hover:text-primary-100 transition-colors font-semibold text-primary-200 rounded-md w-full gap-4`}
              href={link.href}
            >
              {link.icon}
              <span className="hidden lg:inline ml-3">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className=" lg:flex lg:mt-auto lg:justify-end">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
