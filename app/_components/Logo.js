/** @format */

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#" className="flex items-center gap-4 z-10">
      <img width={60} height={60} src="/logo.png" alt="Logo" />

      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}
