import React from "react";

export const MyContext = React.createContext();

const GetNombre = ({ children }) => {
  const [nombre, setNombre] = React.useState("");

  return (
    <MyContext.Provider
      value={{
        nombre
      }}
    >
      <input onChange={(e) => setNombre(e.target.value)} value={nombre} />
      {children}
    </MyContext.Provider>
  );
};

export default GetNombre;
