import React from 'react'

export const FormErrorList = ({respErrors}) => {
  return (
    <ul >
    {
        respErrors.map( (error, i) => (
            <li
                key= { error.id }
            > 
            <p >{i + 1}. { error.errorPorcentual} </p>

            </li>
        ))
    }

    </ul>
  )
}
