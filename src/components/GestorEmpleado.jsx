import FormularioEmpleado from "./FormularioEmpleado";
import ListaEmpleado from "./ListaEmpleado";

const GestorEmpleado = () => {

    return (
      <>
        <h1 className="text-4xl font-bold text-center my-6 text-gray-800">
          Gestión de Empleados
        </h1>

        <FormularioEmpleado />

        <hr className="my-8" />

        <ListaEmpleado />
      </>
    );
}

export default GestorEmpleado;