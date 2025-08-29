import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const useFormularioEmpelado = (empleadoEditar, setEmpleadoEditar, agregarActualizarEmpleado) => {

    const [formularioDatos, setFormularioDatos] = useState({ nombre: '', cargo: '', deprtamento: ''});

    useEffect(() => {
        if (empleadoEditar) {
            setFormularioDatos(empleadoEditar);
        } else {
            setFormularioDatos({ nombre: '', cargo: '', deprtamento: ''});
        }
    }, [empleadoEditar]);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormularioDatos({...formularioDatos, [name]: value});
    }

    const manejarEnvio = () => {
        if (!formularioDatos.nombre || !formularioDatos.cargo || formularioDatos.deprtamento) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Complete todos los campos.'
            });
            return;
        }

        agregarActualizarEmpleado(formularioDatos);
        setFormularioDatos({ nombre: '', cargo: '', deprtamento: ''});
    }

    const manejarCancelacion = () => {
        setEmpleadoEditar(null);
        setFormularioDatos({ nombre: '', cargo: '', deprtamento: ''});
    }

    return {
        formularioDatos,
        manejarCambio,
        manejarEnvio,
        manejarCancelacion,
    }
}

export default useFormularioEmpelado;