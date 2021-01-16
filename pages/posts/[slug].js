import { useEffect } from "react";
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Prism from "prismjs";
import "../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min";
import Layout from "../../components/Layout";

export default function Post({ post, posts, preview }) {


  useEffect(() => {
    document.querySelector("body").classList.add("line-numbers");
    Prism.highlightAll();
  }, []);


  const router = useRouter()
  const morePosts = posts?.edges
  //console.log(post)

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout className="container" title="Blog">
        <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
    
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: false,
  }
}
