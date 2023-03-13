import { PropsWithChildren } from "react";

export default function PostTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-4 text-center text-6xl leading-tight text-green-400 tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
      {children}
    </h1>
  );
}
