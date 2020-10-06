
export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="my-2">
        Más entradas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => (
          <li
            key={node.slug}
            title={node.title}
            date={node.date}
            author={node.author.node}
            slug={node.slug}
            excerpt={node.excerpt}
        >{node.title}</li>
        ))}
      </div>
    </section>
  )
}
