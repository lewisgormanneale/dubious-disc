import PostPage from "components/Sanity/PostPage";
import { getPostAndMoreStories, getSettings } from "lib/sanity.client";
import { Post, Settings } from "lib/sanity.queries";

interface PostAndMoreStories {
  post: Post;
  morePosts: Post[];
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return { title: params.slug };
}

// to do = generate meta data from sanity to replace removed indexpagehead component

export default async function ProjectSlugRoute({
  params,
}: {
  params: { slug: string };
}) {
  const settings: Settings = await getSettings();
  const { post, morePosts }: PostAndMoreStories = await getPostAndMoreStories(
    params.slug
  );
  return <PostPage post={post} morePosts={morePosts} settings={settings} />;
}
