"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const slug = useSelectedLayoutSegment();
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <div className="flex items-center space-x-4 bg-white">
          <Link href={`/teamplanner/${slug}`}>Team Planner</Link>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
