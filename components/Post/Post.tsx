import CoverImage from "./CoverImage";

interface PostProps {
  post: any;
}

export default function Post({ post }: PostProps) {
  console.log(post);
  return (
    <div className="flex flex-wrap flex-shrink gap-3 p-3 justify-center bg-neutral-700 w-full rounded">
      <div className="flex flex-col justify-center items-center w-1/2">
        <CoverImage title={post.title} image={post.mainImage} />
        <h3 className="text-xl font-bold text-center text-green-300">
          {post.title}
        </h3>
        <p className="text-center">{post.description}</p>
        <p className="text-center">{post.author.name}</p>
        <p className="text-center">{post.publishedAt}</p>
      </div>
    </div>
  );
}
