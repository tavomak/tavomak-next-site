import Layout from "../../components/Layout";
import { useRouter } from 'next/router'

const BehanceProject = ({project}) => {
  //console.log(project.project)
  const {name, modules} = project.project,
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
  const res = await fetch(
    `https://api.behance.net//v2/projects/${id}?client_id=yR0kreJuPSelu18eSP0i5SCh1nzH1FUP`
    );
    const project = await res.json();
  return {
    props: {
      project,
      id
    },
  };
}

export function getStaticPaths() {
    const allPosts = [1,2,3]
  
    return {
      paths: [],
      fallback: true,
    }
  }