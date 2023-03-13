"use client";

import { type Item } from "../../lib/pages";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

export function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const pathname = usePathname();
  const isActive = `/${item.slug}` === pathname;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 mx-2 text-sm font-medium hover:text-rose-400",
        {
          "text-white hover:bg-gray-800": !isActive,
          "text-white bg-rose-500 hover:text-white": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}
