import Posts from "../../components/Posts";

//~ Componente
export default function DynamicRoute({ json }) {
  return (
    <>
      <Posts data={json} link={false} />
    </>
  );
}

//*Server side rendering - SSR
export async function getServerSideProps({ params }) {
  const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1");
  const json = await data.json();
  const result = json.map((item) => {
    return item.id;
  });

  return {
    props: {
      id: params.id,
      json: json,
    },
  };
}

//https://dev.to/api/articles?tag=javascript&top=1

//Main page con static
// posts con ssr
