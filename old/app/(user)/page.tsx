import { PreviewSuspense } from "@sanity/preview-kit";
import IndexPage from "@/components/Sanity/IndexPage";
import { getAllPosts, getSettings } from "lib/sanity.client";
import { Post, Settings } from "lib/sanity.queries";

// interface PreviewData {
//   token?: string;
// }

export default async function Home() {
  const settings: Settings = await getSettings();
  const posts: Post[] = await getAllPosts();
  const preview = false;
  const previewToken = null;

  // let previewInfo = previewData();
  // console.log(previewInfo);
  // const preview = false;
  // const previewX = {
  //   token: "123",
  // };
  // let token = previewX?.token;

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
