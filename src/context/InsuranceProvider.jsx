import { useState, createContext } from "react";

// children son todos los componentes hijos de la aplicacion

const InsuranceContext = createContext();
const InsuranceProvider = ({ children }) => {
  const [data, setData] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const handleChangeDatos = (e) => {
    setData({
      //toma una copia de lo que hay en data y lo sobre escribe
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <InsuranceContext.Provider
      value={{
        data,
        handleChangeDatos,
      }}
    >
      {" "}
      {children}
    </InsuranceContext.Provider>
  );
};

//El provider es de donde salen los datos

export { InsuranceProvider };

export default InsuranceContext;
