import React from "react";
import { typeInfo } from "@/lib/typeInfo";

interface TypeBoxProps {
  type_id: number;
}

export default function TypeBox({ type_id }: TypeBoxProps) {
  const info = typeInfo[type_id];
  const { name, type_color } = info ?? {
    name: "",
    type_color: "",
  };
  return (
    <div
      className={`flex justify-center items-center rounded-sm w-5/12 ${type_color}`}
    >
      <p className={`text-stroke text-xxs px-1 py-0 by-0 text-white outline-1`}>
        {name}
      </p>
    </div>
  );
}
