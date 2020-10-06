import Link from "next/link";
const ProjectCard = ({ post }) => {
  const { name, id, covers } = post;
  return (
    <li className="col-md-4 d-flex align-items-stretch">
      <div className="card shadow mb-md-4">
        <div className="card-body d-flex flex-column justify-content-between">
          <img src={covers["404"]} className="w-100" />
          {/* <p className="py-2">{name}</p> */}
          <div className="text-right mt-5">
            <Link as={`/behance-project/${id}`} href="/behance-project/[id]">
              <a className="btn btn-primary">Ver proyecto</a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
