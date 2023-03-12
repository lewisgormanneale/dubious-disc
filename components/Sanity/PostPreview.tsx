import Avatar from "./AuthorAvatar";
import CoverImage from "./CoverImage";
import Date from "./PostDate";
import type { Post } from "lib/sanity.queries";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, "_id">) {
  return (
    <div className="flex flex-col bg-zinc-800 text-white rounded-lg">
      {title && (
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      )}
      <div className="flex flex-col m-2 gap-1">
        {date && <Date dateString={date} />}
        <h3 className="mb-1 text-3xl leading-snug text-green-300">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        {excerpt && <p className="text-lg leading-relaxed">{excerpt}</p>}
      </div>
    </div>
  );
}
