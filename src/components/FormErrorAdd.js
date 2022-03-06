import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { alertQuestion } from '../helpers/alerts';
import { errorAbsoluto, errorPorcentual, errorRelativo } from '../helpers/calcularErrores';
import { FormErrorList } from './FormErrorList';

export const FormErrorAdd = ({ handleAddTodo, valueErrors: respErrors }) => {

    const [{valorTeorico, valorExperimental}, handleInputChange, reset] = useForm({
        valorTeorico: '',
        valorExperimental: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(valorTeorico === '' || valorExperimental === '') return alertQuestion('Debes ingresar un valor teórico y experimental para continuar', 'Debe ser diferente de 0', 'warning');
        const errorAbs = errorAbsoluto(Number(valorTeorico), Number(valorExperimental));
        const errorRel = errorRelativo(Number(valorTeorico), Number(valorExperimental));
        const errorPorc = errorPorcentual( errorRel );

        const newTodo = {
            id: new Date().getTime(),
            errorPorcentual: `Ea= ${errorAbs.toFixed(6)} || Er= ${errorRel.toFixed(6)} || E%= ${errorPorc.toFixed(6)} `,
        }

        handleAddTodo( newTodo );
        reset();
    }

    return (
        <>
                <form onSubmit={handleSubmit}>
                    <h6 className="text text-secondary font-itali">Programa para calcular el error porcentual</h6>
                    <hr/>

                    <label className="fs-5">Ingresa el valor teórico</label>
                    <input
                        type="text"
                        className="form form-control mt-1"
                        name="valorTeorico"
                        autoComplete = "off"
                        step="any"
                        pattern="[0-9-]+([.][0-9]+)?$"
                        value = {valorTeorico}
                        onChange = { handleInputChange}
                    />

                    <label className="fs-5 mt-2">Ingresa el valor experimental</label>
                    <input
                        type="text"
                        className="form form-control mt-1"
                        name="valorExperimental"
                        autoComplete = "off"
                        pattern="[0-9-]+([.][0-9]+)?$"
                        value = {valorExperimental}
                        onChange = { handleInputChange}
                
                    />

                    <button
                        disabled={(valorTeorico === '' || valorTeorico === '0')? true: false}
                        id="btnCalcular"
                        type="submit"
                        className="btn btn-primary mt-2"
                    >Calcular</button>
                    <hr/>

                    <FormErrorList respErrors={respErrors}/>

                </form>
        </>
    )
}
