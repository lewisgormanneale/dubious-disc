import React from "react";
import PreventTypeOverlapFilter from "./PreventTypeOverlapFilter";
import NativeRegionOnlyFilter from "./NativeRegionOnlyFilter";

export default function Filters() {
  return (
    <div className="flex flex-col gap-2 justify-between items-center w-full px-2 border-b border-zinc-700 text-white  md:flex-row">
      <div className="flex w-full justify-center items-center gap-2 my-2">
        <NativeRegionOnlyFilter />
        <PreventTypeOverlapFilter />
      </div>
    </div>
  );
}
