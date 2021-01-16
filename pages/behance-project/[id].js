import Layout from "../../components/Layout";

const BehanceProject = ({ post }) => {
  const { modules } = post.project

  //console.log(post);
  console.log(modules);
  const soloImagenes = modules.filter(img => (typeof(img.sizes)) ? img.sizes : img.src )

  return (
    <Layout className="container">
      <div className="row">
        <div className="col-12">
        {soloImagenes.map((img, i) =>(
            <img src={img.sizes.max_1240} alt="" key={i} className="w-100"/>
          ))
        }
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.behance.net/v2/users/raskatafat/projects?client_id=yR0kreJuPSelu18eSP0i5SCh1nzH1FUP"
  );
  const posts = await res.json();

  const paths = Object.values(posts.projects).map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const fetcher = () =>
    fetch(
      `https://api.behance.net//v2/projects/${id}?client_id=yR0kreJuPSelu18eSP0i5SCh1nzH1FUP`,
      { mode: "no-cors" }
    ).then((res) => res.json());

  const post = await fetcher();
  return { props: { post } };
}

export default BehanceProject;
