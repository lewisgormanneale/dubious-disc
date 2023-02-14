interface TypeBoxProps {
  type_id: number;
}

const typeInfo: Record<
  number,
  { name: string; bg_color: string; text_color: string }
> = {
  1: { name: "Normal", bg_color: "bg-normal", text_color: "text-white" },
  2: { name: "Fighting", bg_color: "bg-fighting", text_color: "text-white" },
  3: { name: "Flying", bg_color: "bg-flying", text_color: "text-white" },
  4: { name: "Poison", bg_color: "bg-poison", text_color: "text-white" },
  5: { name: "Ground", bg_color: "bg-ground", text_color: "text-white" },
  6: { name: "Rock", bg_color: "bg-rock", text_color: "text-white" },
  7: { name: "Bug", bg_color: "bg-bug", text_color: "text-white" },
  8: { name: "Ghost", bg_color: "bg-ghost", text_color: "text-white" },
  9: { name: "Steel", bg_color: "bg-steel", text_color: "text-white" },
  10: { name: "Fire", bg_color: "bg-fire", text_color: "text-white" },
  11: { name: "Water", bg_color: "bg-water", text_color: "text-white" },
  12: { name: "Grass", bg_color: "bg-grass", text_color: "text-white" },
  13: { name: "Electric", bg_color: "bg-electric", text_color: "text-white" },
  14: { name: "Psychic", bg_color: "bg-psychic", text_color: "text-white" },
  15: { name: "Ice", bg_color: "bg-ice", text_color: "text-white" },
  16: { name: "Dragon", bg_color: "bg-dragon", text_color: "text-white" },
  17: { name: "Dark", bg_color: "bg-dark", text_color: "text-white" },
  18: { name: "Fairy", bg_color: "bg-fairy", text_color: "text-white" },
  10001: { name: "Unknown", bg_color: "bg-unknown", text_color: "text-white" },
  10002: { name: "Shadow", bg_color: "bg-shadow", text_color: "text-white" },
};

export default function TypeBox({ type_id }: TypeBoxProps) {
  const info = typeInfo[type_id];
  const { name, bg_color, text_color } = info ?? {
    name: "",
    bg_color: "",
    text_color: "",
  };
  return (
    <div
      className={`flex justify-center items-center rounded-sm ${bg_color} w-5/12`}
    >
      <p
        className={`text-stroke text-xxs px-1 py-0 by-0 ${text_color} outline-1`}
      >
        {name}
      </p>
    </div>
  );
}
