import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => (
  <li className="gastos">
    <p>
    <span className="gasto-nombre">
     {
        gasto.nombre && gasto.nombre != '' ?  gasto.nombre[0].toUpperCase() + gasto.nombre.slice(1) : null
     } </span>
     <span className="gasto">$ {gasto.cantidad}</span>
    </p>
    
  </li>
);

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired
}

export default Gasto;