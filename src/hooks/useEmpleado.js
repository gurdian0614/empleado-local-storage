import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const useEmpleado = () => {

    const [empleados, setEmpleados] = useState(() => {
        const empleadosGuardados = localStorage.getItem('empleados');
        return empleadosGuardados ? JSON.parse(empleadosGuardados) : []
    });

    const [empleadoEditar, setEmpleadoEditar] = useState(null);

    useEffect(() => {
        localStorage.setItem('empleados', JSON.stringify(empleados))
    }, [empleados]);

    const agregarActualizarEmpleado = (empleado) => {
        if (empleado.id) {
            setEmpleados(empleados.map(emp => emp.id === empleado.id ? empleado : emp));
            setEmpleadoEditar(null);
        } else {
            const nuevoEmpleado = {...empleado, id: Date.now()};
            setEmpleados([...empleados, nuevoEmpleado]);
        }
    }
}