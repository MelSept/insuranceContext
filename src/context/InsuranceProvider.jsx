import { useState, createContext } from "react";
import {
  getDifferenceYear,
  calculateMarca,
  calculatePlan,
  moneyFormat,
} from "../helpers";

// children son todos los componentes hijos de la aplicacion

const InsuranceContext = createContext();
const InsuranceProvider = ({ children }) => {
  const [data, setData] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState(0);

  const handleChangeDatos = (e) => {
    setData({
      //toma una copia de lo que hay en data y lo sobre escribe
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const insuranceProvider = () => {
    //base
    let result = 2000;
    //obtener diferencia de años
    const difference = getDifferenceYear(data.year);

    console.log(difference);

    //Hay que restar el 3% por cada año
    result -= (difference * 3 * result) / 100;
    //Americano +15%
    //Europeo +30%
    //Asiatico +5%
    result *= calculateMarca(data.marca);

    //Basico +20%
    //Completo +50%
    result *= calculatePlan(data.plan);

    //Formatear dinero
    result = moneyFormat(result);
    setResult(result);
  };

  return (
    <InsuranceContext.Provider
      value={{
        data,
        handleChangeDatos,
        error,
        setError,
        insuranceProvider,
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
