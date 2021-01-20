import Layout from '../../components/Layout'
import ProjectCard from '../../components/behance/ProjectCard'

export default function Index({ posts }) {
  const { projects } = posts;
  //console.log(projects);
  return (
    <Layout 
    className="container"
    >
      <div className="row" className="my-2">
          <img src="/behance.jpg" alt="" className="w-100"/>
          <div className="col-12 my-5">
              <h4 className="font-weight-light d-none">
                  Proyectos de diseño
              </h4>
          </div>
      </div>
      <ul className="row">
        {
          projects.length
            ? projects.map((post, i) => (
            
              <ProjectCard 
                post={post}
                key={i}
                id={post.id}
              />
          ))
          :
          <p>Cargando</p>
        }
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.behance.net/v2/users/raskatafat/projects?client_id=yR0kreJuPSelu18eSP0i5SCh1nzH1FUP"
  );
  const posts = await res.json();
  //console.log(posts);
  return {
    props: {
      posts,
    },
    revalidate: 1
  };
}