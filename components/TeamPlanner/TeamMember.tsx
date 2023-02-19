import React from "react";
import Image from "next/image";
import { typeInfo } from "@/lib/typeinfo";
import TypeBox from "../TypeBox";
import { ImCross } from "react-icons/im";
import { IoSparkles } from "react-icons/io5";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { TbGenderNeutrois } from "react-icons/tb";

export default function TeamMember({
  pokemon,
  showAdditionalInfo,
  toggleShiny,
  toggleGender,
  removeFromTeam,
}: any) {
  const primaryTypeInfo = typeInfo[pokemon.pokemon.type_id_slot_1];
  const { type_color } = primaryTypeInfo ?? {
    type_color: "",
  };
  return (
    <div
      className={`flex flex-col w-[90px] justify-start items-center flex-none rounded bg-[#232323] border border-zinc-700 text-black text-m font-medium overflow-hidden ${
        showAdditionalInfo ? "h-[180px]" : "h-auto"
      }`}
    >
      {showAdditionalInfo ? (
        <div className="flex justify-center items-center w-full flex-none box-border bg-[#232323] rounded border-b border-zinc-700 py-2">
          <p className="text-white text-xs font-semibold">
            {pokemon.pokemon_species.name}
          </p>
        </div>
      ) : null}
      <div className="relative w-full h-full">
        <Image
          src={pokemon.sprite}
          key={pokemon.pokemon.id}
          quality={100}
          width={200}
          height={200}
          alt={pokemon.pokemon_species.name}
          className={`${type_color} object-cover`}
        />
      </div>
      <div
        className={`transition-height duration-500 ease-in-out flex flex-col w-full ${
          showAdditionalInfo ? "h-auto" : "h-0"
        }`}
      >
        <div className="flex justify-evenly w-full my-2">
          <TypeBox
            key={pokemon.pokemon.type_id_slot_1}
            type_id={pokemon.pokemon.type_id_slot_1}
          />
          {pokemon.pokemon.type_id_slot_2 ? (
            <TypeBox
              key={pokemon.pokemon.type_id_slot_2}
              type_id={pokemon.pokemon.type_id_slot_2}
            />
          ) : null}
        </div>
        <div className="flex justify-evenly w-full border-t border-zinc-700 rounded-b">
          <div
            onClick={removeFromTeam}
            className="flex justify-center items-center w-1/3 h-7 text-xs border-r border-zinc-700 rounded-bl cursor-pointer bg-red-500"
          >
            <ImCross />
          </div>

          <div
            onClick={toggleShiny}
            className={`flex justify-center items-center w-1/3 h-7 text-xs  cursor-pointer ${
              pokemon.sprite.includes("shiny")
                ? "bg-orange-400"
                : "bg-yellow-300"
            }`}
          >
            <IoSparkles />
          </div>
          <div
            onClick={toggleGender}
            className={`flex justify-center items-center w-1/3 h-7 text-xs border-l border-zinc-700 rounded-br cursor-pointer ${
              pokemon.gender === "male" || pokemon.gender === "always-male"
                ? "bg-blue-300"
                : pokemon.gender === "female" ||
                  pokemon.gender === "always-female"
                ? "bg-pink-300"
                : "bg-green-300"
            }`}
          >
            {pokemon.gender === "male" || pokemon.gender === "always-male" ? (
              <IoMdMale />
            ) : pokemon.gender === "female" ||
              pokemon.gender === "always-female" ? (
              <IoMdFemale />
            ) : (
              <TbGenderNeutrois />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
