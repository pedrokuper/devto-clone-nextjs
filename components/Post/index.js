import Link from "next/link";

export default function Post({ title, id, link }) {
  return (
    <>
      {link ? (
        <Link href={`post/${id}`}>
          <h2>{title}</h2>
        </Link>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>asdkjaskd</p>
        </div>
      )}
    </>
  );
}
