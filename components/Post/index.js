import Link from "next/link";

export default function Post({ title, id, link, description }) {
  return (
    <>
      {link ? (
        <Link href={`post/${id}`}>
          <h2>{title}</h2>
        </Link>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}
