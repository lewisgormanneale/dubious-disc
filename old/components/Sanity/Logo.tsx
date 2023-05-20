import Image from "next/image";
import "@/styles/globals.css";
import studioLogo from "@/public/shaymin-land.png";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center ml-2">
      <Image
        src={studioLogo}
        alt="logo"
        className="rounded-full"
        width={40}
        height={40}
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
