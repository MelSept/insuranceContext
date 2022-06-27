import { useState, createContext } from "react";

// children son todos los componentes hijos de la aplicacion

const InsuranceContext = createContext();
const InsuranceProvider = ({ children }) => {
  return (
    <InsuranceContext.Provider value={{}}>
      {" "}
      {children}
    </InsuranceContext.Provider>
  );
};

//El provider es de donde salen los datos

export { InsuranceProvider };

export default InsuranceContext;
