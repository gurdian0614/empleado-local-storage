
const FormularioEmpleado = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Empleado
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Nombre" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

                <input type="text" placeholder="Cargo" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

                <input type="text" placeholder="Departamento" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="mt-4 flex space-x-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">Agregar/Editar</button>

                <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300" >Cancelar</button>
            </div>
        </div>
    )
}

export default FormularioEmpleado;