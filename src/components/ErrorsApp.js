import React, { useEffect, useReducer, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { todoReducer } from './todoReducer';
import Footer from './Footer';
// import FormError from './FormError';
import { FormErrorAdd } from './FormErrorAdd';


const init = () => {
    return [{
        id: new Date().getTime(),
        errorPorcentual: 'Sin valor'
    }];
}

const ErrorsApp = () => {

  const [respErrors, dispatch] = useReducer(todoReducer, [], init);
 
  const handleAddTodo = (newTodo) => {
    dispatch({
        type: 'add',
        payload: newTodo
    })
  }

  return (
    <>
        <h1>Errores Practica-01</h1>
        <hr/>

        <div className="row">
           <div className="col-12">
            <FormErrorAdd handleAddTodo={ handleAddTodo } valueErrors = {respErrors}/>

           </div>
        </div>
        
        <Footer/>
    </>
  )
}

export default ErrorsApp;