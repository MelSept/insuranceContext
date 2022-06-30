import { useCallback, useRef } from "react";
import useInsurance from "../hooks/useInsurance";
import { BRANDS, PLANS } from "../constants";

const Result = () => {
  const { result, data } = useInsurance();
  const { marca, plan, year } = data;
  //congelamos el valor de year
  const yearRef = useRef(year);
  //con useCallback evitamos que se renderice, esto lo hace solo cuando cambia resultado
  const [nameBrands] = useCallback(
    BRANDS.filter((m) => m.id === Number(marca)),
    [result]
  );
  const [namePlans] = useCallback(
    PLANS.filter((p) => p.id === Number(plan)),
    [result]
  );

  if (result === 0) return null;

  return (
    <div className=" bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-500 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca:</span>
        {nameBrands.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan:</span>
        {namePlans.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del auto:</span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotizacion:</span>
        {result}
      </p>
    </div>
  );
};

export default Result;
