import { BRANDS, YEARS, PLANS } from "../constants";
import { Fragment } from "react";
import useInsurance from "../hooks/useInsurance";
import Error from "./Error";

const Form = () => {
  const { data, handleChangeDatos, setError, error, insuranceProvider } =
    useInsurance();

  const handleSubmit = (e) => {
    e.preventDefault();

    // si los campos estan vacios, arroja un msj de error
    if (Object.values(data).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");
    insuranceProvider();
  };

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeDatos(e)}
            value={data.marca}
          >
            <option value="">-- Selecciona Marca --</option>

            {BRANDS.map((brands) => (
              <option key={brands.id} value={brands.id}>
                {brands.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeDatos(e)}
            value={data.year}
          >
            <option value="">-- Selecciona Año --</option>

            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeDatos(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer
            p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Form;
