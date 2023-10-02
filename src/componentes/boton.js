import React from 'react'
import '../hojas-de-estilo/Boton.css'

function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != 'Clear') && (valor != '=');
  };

  const esClear = valor => {
    return isNaN(valor) && (valor === 'Clear');
  };

  const esIgual = valor => {
    return isNaN(valor) && (valor === '=')
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}${esClear(props.children) ? 'clear' : ''}${esIgual(props.children) ? 'igual' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
};

export default Boton