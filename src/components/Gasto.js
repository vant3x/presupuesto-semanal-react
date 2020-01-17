import React from 'react';

const Gasto = ({gasto}) => (
  <li className="gastos">
    <p>
      
     {
        gasto.nombre && gasto.nombre != '' ?  gasto.nombre[0].toUpperCase() + gasto.nombre.slice(1) : null
     } 
     <span className="gasto">$ {gasto.cantidad}</span>
    </p>
    
  </li>
);

export default Gasto;