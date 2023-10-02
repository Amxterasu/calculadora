import './App.css';
import Boton from './componentes/boton.js'
import Pantalla from './componentes/pantalla.js'
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const cambiarSigno = () => {
    setInput(input => -input)
  };

  const calcularResultado = () => {

    const expresionRegular = /[+\-*/]{2,}|[A-Za-z]/;
    
    if (expresionRegular.test(input)) {
      setInput("Error");
      } else if (input) {
        const resultado = evaluate(input);
        if (resultado === Infinity || resultado === -Infinity) {
          setInput(0);
        } else {
          setInput(parseFloat(resultado.toFixed(2)));
        }
        } else {
          alert("Por favor ingrese valores antes");
        }
  };

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={() => setInput('')}>Clear</Boton>
          <Boton manejarClick={cambiarSigno}>±</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
