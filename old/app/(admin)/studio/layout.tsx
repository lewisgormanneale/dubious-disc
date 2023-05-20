import type { PropsWithChildren } from "react";

/**
 * Temporary workaround for setting metadata for the Studio.
 * implemented necessary data according to the following source code: https://github.com/sanity-io/next-sanity/blob/main/src/studio/head/NextStudioHead.tsx
 * @todo remove this workaround when the issue is fixed
 * @see https://github.com/sanity-io/next-sanity/issues/333
 */
export const metadata = {
  title: "Studio",
  robots: "noindex",
};

export default function StudioLayout({ children }: PropsWithChildren) {
  return children;
}
