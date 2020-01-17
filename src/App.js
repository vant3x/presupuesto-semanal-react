import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Form from './components/Form';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import Logo  from './saturn2.png';

function App() {
  const gastosStore = JSON.parse(localStorage.getItem("gastos") || "[]");
  const presupuestoStore = localStorage.getItem("presupuesto");
  const restanteStore = localStorage.getItem("restante");
  // state
  const [ presupuesto, guardarPresupuesto ] = useState(presupuestoStore ? presupuestoStore : 0);
  const [ restante, guardarRestante ] = useState(restanteStore ? restanteStore : 0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(gastosStore.length > 0  ? false : true);
  const [ gastos, guardarGastos ] = useState(gastosStore ? gastosStore : []);
  const [ gasto, guardarGasto ] = useState({});

  // Guardar gastos en loalstorage
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos)) 
   }, [gastos]);
  
  // useEffect que actualiza el restante
  useEffect(() => {
   if (gasto.nombre && gasto.nombre !== '') {
      guardarGastos([
        ...gastos,
        gasto
      ])
   }
  }, [gasto]

);


  
  return (
    <div className="container">
      <header>
        <h2 className="white-title"> 
          <img width="60" 
          className="logo-saturn1" src={Logo} alt=""/>
          <span 
            className="lobster"
          >Saturn8 </span> | <span className="md-size-h2"> Gastos Semanales
          </span>  
        </h2>
        <div className="contenido-principal contenido">
          { mostrarPregunta && !presupuestoStore  ? (
               <Pregunta
               guardarPresupuesto={guardarPresupuesto} 
               guardarRestante={guardarRestante} 
               actualizarPregunta={actualizarPregunta}
              />
          ) :
            (
              
            <div className="row">
              <div className="one-half column">
                <Form 
                 guardarGasto={guardarGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
            )
          }
       
        </div>
      </header>
    </div>
  );
}

export default App;
