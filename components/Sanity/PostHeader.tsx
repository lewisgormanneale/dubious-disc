import Avatar from "./AuthorAvatar";
import CoverImage from "./CoverImage";
import Date from "./PostDate";
import PostTitle from "./PostTitle";
import type { Post } from "lib/sanity.queries";

export default function PostHeader(
  props: Pick<Post, "title" | "coverImage" | "date" | "author" | "slug">
) {
  const { title, coverImage, date, author, slug } = props;
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {title && (
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={title} image={coverImage} priority slug={slug} />
        </div>
      )}
      <div className="flex justify-between items-center mx-auto max-w-2xl">
        <div className="mb-6 block text-white">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        {date && (
          <div className="mb-6 text-lg text-white">
            <Date dateString={date} />
          </div>
        )}
      </div>
    </>
  );
}
