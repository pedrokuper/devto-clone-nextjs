import Post from "../Post";

export default function Posts({ data, link }) {
  return (
    <>
      {data.map((post, key) => {
        return (
          <div>
            <Post key={key} title={post.title} id={post.id} link={link} />
          </div>
        );
      })}
    </>
  );
}
