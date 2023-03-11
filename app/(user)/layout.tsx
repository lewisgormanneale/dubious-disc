import "@/styles/globals.css";
import { PropsWithChildren } from "react";
import { GlobalNav } from "@/components/GlobalNav/GlobalNav";
import Byline from "@/components/Byline";

export const metadata = {
  title: "Home",
  description: "Your source for Pokémon Tools, Resources and News",
};

export default function IndexLayout({ children }: PropsWithChildren) {
  return (
    <div className="overflow-y-scroll bg-zinc-800 bg-cobalt_coastlands bg-center bg-no-repeat bg-cover bg-blend-multiply bg-fixed">
      <GlobalNav />
      <div className="lg:pl-72">
        <div className="mx-auto max-w-6xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="flex flex-col rounded-lg bg-zinc-900 border-rose-400 border">
              {children}
            </div>
          </div>
          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-zinc-900 border-rose-400 border">
              <Byline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
