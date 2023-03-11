import { fetchPosts, query } from "@/utils/fetchPosts";
import type { Post, Settings } from "lib/sanity.queries";
import IndexPage from "@/components/Sanity/IndexPage";
import PreviewSuspense from "@/components/Sanity/PreviewSuspense";
import { fetchSettings } from "@/utils/fetchSettings";
import { usePreview } from "lib/sanity.preview";
import PreviewIndexPage from "@/components/Sanity/PreviewIndexPage";
import { previewData } from "next/headers";
import { client } from "lib/sanity.client";
import { cache } from "react";

// interface PreviewData {
//   token?: string;
// }

const clientFetch = cache(client.fetch.bind(client));

export default async function Home() {
  const posts: Post[] = await fetchPosts();
  const settings: Settings = await fetchSettings();

  // let previewInfo = previewData();
  // console.log(previewInfo);
  // const preview = false;
  // const previewX = {
  //   token: "123",
  // };
  // let token = previewX?.token;
  let token = "x";

  // if (previewData()) {
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <IndexPage loading preview posts={posts} settings={settings} />
  //       }
  //     >
  //       <PreviewIndexPage token={token} />
  //     </PreviewSuspense>
  //   );
  // }

  return <IndexPage posts={posts} settings={settings} />;
}
