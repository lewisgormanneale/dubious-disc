import Container from "./BlogContainer";
import BlogHeader from "./BlogHeader";
import Layout from "./BlogLayout";
import HeroPost from "./HeroPost";
import MoreStories from "./MoreStories";
import * as demo from "lib/demo.data";
import type { Post, Settings } from "lib/sanity.queries";

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props;
  const [heroPost, ...morePosts] = posts || [];
  const { title = demo.title, description = demo.description } = settings || {};

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          <h2 className="mt-8 mb-4 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter text-green-300">
            Latest Updates
          </h2>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}
