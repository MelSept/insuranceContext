import Form from "./Form";
import useInsurance from "../hooks/useInsurance";

// Creamos un componente para el titulo y contenido
const AppInsurance = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros de Auto
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w2/4 mx-auto shadow rounded-lg p-10">
        <p>Contenido Principal</p>
        <Form />
      </main>
    </>
  );
};

export default AppInsurance;
