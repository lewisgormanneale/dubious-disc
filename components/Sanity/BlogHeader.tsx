import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string;
  description?: any[];
  level: 1 | 2;
}) {
  switch (level) {
    case 1:
      return (
        <header className="hidden lg:flex lg:flex-row lg:justify-between items-center lg:mb-12 mt-2 mb-10  flex-col ">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl text-green-300">
            {title}
          </h1>
          <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left text-white`}
          >
            <PortableText value={description} />
          </h4>
        </header>
      );

    case 2:
      return (
        <header>
          <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      );

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      );
  }
}
