// const Titulo = ({ data }) => data && data.map((d) => <h1>{d.title}</h1>);

const Titulo = ({ data }) => {
  console.log(data.title);
  return <h1>{data.title}</h1>;
};

export default Titulo;
