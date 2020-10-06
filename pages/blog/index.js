import Layout from "../../components/Layout";
import MoreStories from '../../components/blog/more-stories'
import HeroPost from '../../components/blog/hero-post'
import { getAllPostsForHome } from "../../lib/api";

const Blog = ({ allPosts: { edges }, preview }) => {
    const heroPost = edges[0]?.node,
    morePosts = edges.slice(1)

  return (
    <Layout className="container" title="Blog">
        <img src="/blog.jpg" alt="Bienvenido" className="w-100"/>
      
      {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              author={heroPost.author.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}

    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
