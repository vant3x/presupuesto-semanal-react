import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = (props) => {

  const {guardarPresupuesto, guardarRestante, actualizarPregunta} = props;

  // definir el state
  const [ cantidad, guardarCantidad ] = useState(0);
  const [ error, guardarError ] = useState(false); 

  // Función que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10));
  }

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // validar
    if (cantidad < 1 || isNaN( cantidad )) {
      guardarError(true);
      return;
    }

    // si pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
    localStorage.setItem("presupuesto",cantidad);
    localStorage.setItem("restante", cantidad);
  }

  return (
    <Fragment>
      <h2>Agrega tu presupuesto máximo semanal</h2>
      { error ? <Error mensaje="El presupuesto es incorrecto" /> : null }

      <form onSubmit={agregarPresupuesto}>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ingresa el presupuesto"
          onChange={definirPresupuesto}
        />

        <input type="submit"
         className="button-primary u-full-width"
         value="Definir Presupuesto"
         />
      </form>
    </Fragment>
  )
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
   guardarRestante: PropTypes.func.isRequired, 
   actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;