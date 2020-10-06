import Layout from "../../components/Layout";
import { useRouter } from 'next/router'
import useSWR from 'swr'


const BehanceProject = ({posts, id}) => {
  
  const fetcher = x => fetch(`https://api.behance.net//v2/projects/${id}?client_id=yR0kreJuPSelu18eSP0i5SCh1nzH1FUP`,
  { mode: 'no-cors'}
  ).then(res => res.json())

  const { data } = useSWR(id , fetcher, { initialData: posts })

  console.log(data)

  const {name, modules} = data.project,
  soloImagenes = modules.filter(img => (typeof(img.sizes)) ? img.sizes : img.src )


  return (
    <Layout
      className="container"
    >
      <h2>
        {name}
      </h2>
      <div className="row">
        <div className="col-12">
          {soloImagenes.map((img, i) =>(
            <img src={img.sizes.max_1240} alt="" key={i} className="w-100"/>
          ))}
        </div>
      </div>
      </Layout>
  )
};

export default BehanceProject;

export async function getStaticProps({ params }) {
  const {
    id,
  } = params
  
  const fetcher = x => fetch(`https://api.behance.net//v2/projects/${id}?client_id=yR0kreJuPSelu18eSP0i5SCh1nzH1FUP`,
  { mode: 'no-cors'}
  ).then(res => res.json())
  
  const posts = await fetcher(`https://api.behance.net//v2/projects/${id}?client_id=yR0kreJuPSelu18eSP0i5SCh1nzH1FUP`)
  return { props: { posts, id } }
}
export function getStaticPaths() {
  const allPosts = [1,2,3]

  return {
    paths: [],
    fallback: true,
  }
}