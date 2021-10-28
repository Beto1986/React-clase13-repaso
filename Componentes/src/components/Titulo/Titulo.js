const Titulo = (props) => {
  const estilo = {
    textAlign: "center"
  };

  // Es un valor por default en caso de no tener valor de contenido en su padre
  const { contenido = "Esto es un titulo" } = props;

  return <h1 style={estilo}>{contenido}</h1>;
};

export default Titulo;
