import { useState } from 'react';
import Head from 'next/head'
import { getAllPostsForHome } from '../lib/api'

import Layout from '../components/Layout';
import About from '../pages/about';

export default function Home({ allPosts: { edges }, preview }) {
  const [state, setState] = useState([])
  //console.log(edges)
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
/*{ <Layout 
    className="container"
      preview={preview}
    >
      <img src="/home.jpg" alt="" className="w-100"/>
      <div className="row">
        <div className="col-12 text-center">
          
        </div>
      </div>
    </Layout> }*/
  return (
    <About></About>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}