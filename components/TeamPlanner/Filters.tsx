import React from "react";

export default function Filters() {
  return (
    <div className="flex flex-col justify-between items-center w-full border-b border-zinc-700 text-white  md:flex-row">
      <div className="flex">
        <div className="text-center text-sm rounded px-3 py-2 ml-2 my-2 bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          Gen X Only
        </div>
        <div className=" text-center text-sm rounded px-3 py-2 ml-2 my-2 bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          Prevent Type Overlap
        </div>
      </div>
      <div className="flex">
        <div className=" text-center text-sm rounded px-3 py-2 mr-2 my-2 bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          Version Filter
        </div>
        <div className="text-center text-sm rounded px-3 py-2 mr-2 my-2 bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          Type Filter
        </div>
        <div className=" text-center text-sm rounded px-3 py-2 mr-2 my-2 bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          HM Filter
        </div>
      </div>
    </div>
  );
}
