import PostPreview from "./PostPreview";
import type { Post } from "lib/sanity.queries";

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter md:text-4xl text-green-400">
        More Updates
      </h2>
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
