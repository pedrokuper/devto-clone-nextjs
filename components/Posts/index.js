import Post from "../Post";

export default function Posts({
  data,
  link,
  title,
  description,
  multiplePost,
}) {
  return (
    <>
      {multiplePost ? (
        data.map((post, key) => {
          return (
            <div>
              <Post key={key} title={post.title} id={post.id} link={link} />
            </div>
          );
        })
      ) : (
        <>
          <Post description={description} title={title} />
        </>
      )}
    </>
  );
}
