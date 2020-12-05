import Posts from "../../components/Posts";

//~ Componente
export default function DynamicRoute({ json, description, title }) {
  return (
    <>
      <Posts
        data={json}
        link={false}
        multiplePost={false}
        description={description}
        title={title}
      />
    </>
  );
}

//*Server side rendering - SSR
export async function getServerSideProps({ params }) {
  const data = await fetch(`https://dev.to/api/articles/${params.id}`);
  const json = await data.json();

  return {
    props: {
      title: json.title,
      description: json.description,
    },
  };
}

//https://dev.to/api/articles?tag=javascript&top=1

//Main page con static
// posts con ssr
