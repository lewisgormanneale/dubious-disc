import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return { title: params.slug };
}

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col w-full gap-5">
      <p className="text-2xl font-bold text-center text-green-300 mt-5">
        {params.slug}
      </p>
      <p className="text-1xl font-bold text-center text-green-300">
        Game Tools And Resources
      </p>
      <div className="flex justify-center items-center">
        <Link
          href={`/teamplanner/${params.slug}`}
          className="flex justify-center items-center text-center w-56 h-14 rounded-md px-3 py-2 text-m  font-medium text-white bg-[#232323] border border-zinc-700 hover:bg-emerald-800"
        >
          Team Planner
        </Link>
      </div>
      <p className="text-1xl font-bold text-center text-green-300">News</p>
    </div>
  );
}
