import React from 'react'
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { errorAbsoluto, errorPorcentual, errorRelativo } from '../helpers/calcularErrores';

const FormError = () => {


    const [formValues, handleInputChange, setValues] = useForm({
        vTeorico: 0,
        vExperimental: 0
    })

    const {vTeorico, vExperimental} = formValues;

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (vExperimental === 0 || vExperimental === '0') return Swal.fire('El valor experimental es 0', 'ingresa un numero diferente de 0', 'question');
        
        const errorAbs   = errorAbsoluto(vTeorico, vExperimental).toFixed(6);
        const errorRelat = errorRelativo(vTeorico, vExperimental).toFixed(6);
        const errorPorce = errorPorcentual(Number(errorRelat)).toFixed(6);

        Swal.fire(
            `Error Absoluto: ${errorAbs}, Error Relativo: ${errorRelat}`,
            `Error Porcentual: ${errorPorce}`,
            'success'
        ).then( (result) => {
            if(result.value){
                setValues({
                    vTeorico: 0,
                    vExperimental: 0
                })

            }
        })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h6 className="text text-secondary font-itali">Programa para calcular el error porcentual</h6>
            <hr/>
            <label className="fs-5">Ingresa el valor teórico</label>
            <input
                type="text"
                className="form form-control mt-1"
                name="vTeorico"
                autoComplete = "off"
                step="any"
                value={vTeorico}
                onChange = { handleInputChange }
            />

            <label className="fs-5 mt-2">Ingresa el valor experimental</label>
            <input
                type="text"
                className="form form-control mt-1"
                name="vExperimental"
                autoComplete = "off"
                value={vExperimental}
                onChange = { handleInputChange}
            />

            <button
                disabled = {((vTeorico === 0 ) || (vTeorico === '0')) && true}
                id="btnCalcular"
                type="submit"
                className="btn btn-primary mt-2"
            >Calcular</button>

        </form>
    )
}


export default FormError;