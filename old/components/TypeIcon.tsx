import Image from "next/image";
import bug from "../public/type-icons/bug.svg";
import dark from "../public/type-icons/dark.svg";
import dragon from "../public/type-icons/dragon.svg";
import electric from "../public/type-icons/electric.svg";
import fairy from "../public/type-icons/fairy.svg";
import fighting from "../public/type-icons/fighting.svg";
import fire from "../public/type-icons/fire.svg";
import flying from "../public/type-icons/flying.svg";
import ghost from "../public/type-icons/ghost.svg";
import grass from "../public/type-icons/grass.svg";
import ground from "../public/type-icons/ground.svg";
import ice from "../public/type-icons/ice.svg";
import normal from "../public/type-icons/normal.svg";
import poison from "../public/type-icons/poison.svg";
import psychic from "../public/type-icons/psychic.svg";
import rock from "../public/type-icons/rock.svg";
import steel from "../public/type-icons/steel.svg";
import water from "../public/type-icons/water.svg";

const typeIcons: { [key: string]: any } = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};

export interface TypeIconProps {
  type: string;
}

export default function TypeIcon({ type }: TypeIconProps) {
  const image = typeIcons[type] || normal;
  return <Image src={image} alt={type} width={50} height={50}></Image>;
}
