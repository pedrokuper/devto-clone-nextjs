import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Posts from "../components/Posts";

export default function Home({ json, id }) {
  return (
    <>
      <Posts data={json} link={true} />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1");
  const json = await data.json();
  const id = json.map((post) => {
    return post.id;
  });

  return {
    props: {
      json: json,
      postId: id,
    },
  };
}
