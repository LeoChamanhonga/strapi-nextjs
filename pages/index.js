export default function Home({posts}) {
  return (
    <div>
      {/*Loop dos Posts*/}
      {posts &&
        posts.map((post) =>(
          <div key={post.id}>
            <h2>{post.Titulo}</h2>
            <div>{post.Users.username}</div>
          </div>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  //Carregar dados da nossa API
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  
  return {
    props: { posts },
  };
}
