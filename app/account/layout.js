/** @format */

import React from "react";
import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[16rem_1fr] gap-4 lg:gap-12 min-h-screen">
      <SideNavigation />
      <div className="flex-grow overflow-y-auto px-4 py-6 lg:py-8">
        {children}
      </div>
    </div>
  );
}
