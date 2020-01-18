import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Error from './Error';

const Form = ({guardarGasto, guardarCrearGasto}) => {

  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);

  const [ error, guardarError ] = useState(false);

  const actualizarNombre = e => {
    guardarNombre(e.target.value)
  }

  const actualizarCantidad = e => {
    guardarCantidad(parseInt(e.target.value, 10));
  }

  const agregarGasto = e => {
    e.preventDefault();
    
    const validacion = cantidad < 1 || isNaN(cantidad) || nombre.trim() === '';
    // validar
    if (validacion) {
      guardarError(true);
    } else {
      guardarError(false);
    }

    // objeto gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    if (validacion) {
       guardarError(true);
    } else {
      guardarError(false);
        // pasar el gasto al componente principal 
      guardarGasto(gasto);
      guardarCrearGasto(true);
      console.log(gasto);
      // resetear el form
      guardarNombre('');
      guardarCantidad(0);
    }
    
  }

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      { error ? <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto" /> : null }

      <div className="campo">
        <label>Nombre Gasto</label>
        <input 
          name="nombre"
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={actualizarNombre}
          value={nombre}
        />
      </div>
      <div className="campo">
        <label>Cantidad / Precio </label>
        <input 
          name="cantidad"
          type="number"
          className="u-full-width"
          placeholder="Ej. $2,300"
          onChange={actualizarCantidad}
          value={cantidad}
        />
      </div>
      <button 
        type="submit"
        className="button btn-blue2 u-full-width"
      >Agregar Gasto <i className="fas fa-plus"></i></button>
    </form>
  )
};

Form.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Form;