"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const TabButton = () => {
  const currentTab = usePathname();
  const router = useRouter();

  const handleClick = (url) => [router.push(url)];

  return (
    <footer className="z-50 relative px-10 pb-10 w-screen">
      <ul className="flex rounded-2xl w-max bg-slate-800">
        <li
          className={`text-center hover:cursor-pointer ${
            currentTab === "/events" && "bg-slate-500"
          } rounded-3xl p-2 w-40`}
          onClick={() => handleClick("/events")}
        >
          Events
        </li>
        <li
          className={`text-center hover:cursor-pointer ${
            currentTab === "/collections" && "bg-slate-500"
          } rounded-3xl p-2 w-40`}
          onClick={() => handleClick("/collections")}
        >
          Collections
        </li>
      </ul>
    </footer>
  );
};

export default TabButton;
