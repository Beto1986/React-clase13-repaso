const Parrafo = ({ contenido, color, alineacion = "left" }) => {
  // En la desestructuracion anterior, puede no venir por prop la alineacion pero sin embargo asigno el textAlign="left" por defecto
  // return <p style={{ color, textAlign: "left" }}>{contenido}</p>; // textAlign por defecto

  return <p style={{ color, textAlign: alineacion }}>{contenido}</p>; // asigno textAlign por defecto
};

export default Parrafo;
