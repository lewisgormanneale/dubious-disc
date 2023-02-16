"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  let lastSegment = "";
  if (pathname) {
    lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
  }
  return (
    <div className="flex flex-col w-full h-screen gap-5">
      <p className="text-2xl font-bold text-center text-green-300 mt-5">
        {pathname}
      </p>
      <p className="text-1xl font-bold text-center text-green-300">
        Game Tools And Resources
      </p>
      <div className="flex justify-center items-center">
        <Link
          href={`/teamplanner/${lastSegment}`}
          className="flex justify-center items-center text-center w-56 h-14 rounded-md px-3 py-2 text-m  font-medium text-white bg-[#232323] border border-zinc-700 hover:bg-emerald-800"
        >
          Team Planner
        </Link>
      </div>
      <p className="text-1xl font-bold text-center text-green-300">News</p>
      <div>{children}</div>
    </div>
  );
}
