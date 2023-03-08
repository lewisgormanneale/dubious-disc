import "@/styles/globals.css";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5 bg-black">
        <Link href="/" className="text-rose-400 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-rose-400 mr-2" />
          Go To Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-rose-400">
          <h1 className="font-bold text-white">Go to Deployment</h1>
          <Link
            href="https://gracidea.com/"
            className="text-rose-400 font-bold ml-2"
          >
            https://gracidea.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
