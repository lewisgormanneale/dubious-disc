import Container from "./BlogContainer";
import BlogHeader from "./BlogHeader";
import Layout from "./BlogLayout";
import MoreStories from "./MoreStories";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";
import SectionSeparator from "./SectionSeparator";
import type { Post, Settings } from "lib/sanity.queries";
import { notFound } from "next/navigation";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings: Settings;
}

const NO_POSTS: Post[] = [];

//to do  - meta data. this was postpage head page:

// export default function PostPageHead({ settings, post }: PostPageHeadProps) {
//   const title = settings.title ?? "Untitled";
//   return (
//     <Head>
//       <title>{post.title ? `${post.title} | ${title}` : title}</title>
//       <BlogMeta />
//       {post.coverImage?.asset?._ref && (
//         <meta
//           property="og:image"
//           content={urlForImage(post.coverImage)
//             .width(1200)
//             .height(627)
//             .fit("crop")
//             .url()}
//         />
//       )}
//     </Head>
//   );
// }

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props;
  const { title = "" } = settings || {};

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
