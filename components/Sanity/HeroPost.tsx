import CoverImage from "@/components/Sanity/CoverImage";
import Date from "@/components/Sanity/PostDate";
import type { Post } from "lib/sanity.queries";
import Link from "next/link";

export default function HeroPost(
  props: Pick<
    Post,
    "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
  >
) {
  const { title, coverImage, date, excerpt, author, slug } = props;

  return (
    <section className="flex flex-col bg-zinc-800 text-white rounded-lg mb-8">
      {title && (
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      )}
      <div className="flex flex-col m-4 gap-2">
        {date && (
          <div className="text-lg">
            <Date dateString={date} />
          </div>
        )}
        <h3 className="mb-4 text-4xl text-green-300 leading-tight lg:text-6xl">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title || "Untitled"}
          </Link>
        </h3>
        {excerpt && <p className="text-lg leading-relaxed">{excerpt}</p>}
      </div>
    </section>
  );
}
