/** @format */
"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    setIsOpen(false);
  }

  return (
    <div className="border border-primary-800 flex flex-col sm:flex-row">
      <button
        className="sm:hidden w-full bg-primary-700 text-primary-50 px-5 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Filter Cabins"}
      </button>
      <div
        className={`flex flex-col sm:flex-row ${
          isOpen ? "" : "hidden sm:flex"
        }`}
      >
        <Button
          filter="all"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          All Cabins
        </Button>
        <Button
          filter="small"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          1&mdash;3 guests
        </Button>
        <Button
          filter="medium"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          4&mdash;7 guests
        </Button>
        <Button
          filter="large"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          8&mdash;12 guests
        </Button>
      </div>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`hover:bg-primary-700 px-5 py-2 text-left sm:text-center ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
