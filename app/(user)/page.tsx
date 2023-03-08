import { schemaTypes } from "@/schemas";
import { fetchPosts } from "@/utils/fetchPosts";
import Post from "@/components/Post/Post";

export default async function Home() {
  const posts: any[] = await fetchPosts();
  return (
    <div className="flex flex-col justify-start items-center">
      <section className="flex flex-col justify-start items-center text-white my-5">
        <h1 className="text-green-300 text-2xl text-center font-bold">
          Welcome to Gracidea.com
        </h1>
        <p>Your source for Pokémon Tools, Resources and News</p>
      </section>
      <section className=" flex flex-col w-full h-96 items-center">
        <h2 className="text-xl font-bold text-center text-green-300 mb-2">
          News
        </h2>
        <div className="flex flex-col w-11/12 items-center justify-start">
          {posts.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
