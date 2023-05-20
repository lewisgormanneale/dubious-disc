"use client";

import { pages } from "../../lib/pages";
import Image from "next/image";
import { GlobalNavItem } from "./GlobalNavItem";
import Gracidea from "../../public/gracidea.png";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-20 flex w-full flex-col border-b border-rose-400 bg-zinc-900 lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-b-0 ">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto bg-green-400">
        <Link
          href="/"
          className="group flex items-center gap-x-1"
          onClick={close}
        >
          <h3 className="font-bold text-3xl leading-tight tracking-tight text-black pl-2 group-hover:text-rose-400">
            Gracidea
          </h3>
          <Image src={Gracidea} alt="gracidea" height={40} width={40} />
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-semibold text-black group-hover:text-rose-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-black group-hover:text-rose-400" />
        ) : (
          <Bars3Icon className="block w-6 text-black group-hover:text-rose-400" />
        )}
      </button>

      <div
        className={clsx(
          "overflow-y-auto lg:static lg:block scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-green-400",
          {
            "fixed inset-x-0 bottom-0 top-14 mt-px bg-zinc-900": isOpen,
            hidden: !isOpen,
          }
        )}
      >
        <nav className="space-y-6 px-2 py-5">
          {pages.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-m font-bold leading-tight tracking-tight text-green-400">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.pages.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
