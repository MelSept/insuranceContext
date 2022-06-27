import { useContext } from "react";
import InsuranceContext from "../context/InsuranceProvider";

//llama al context y lo monta para que lo podamos reutilizar

const useInsurance = () => {
  return useContext(InsuranceContext);
};

export default useInsurance;
