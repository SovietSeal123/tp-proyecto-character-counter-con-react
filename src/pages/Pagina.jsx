import { useState } from 'react'
import { Header } from '../components/Header'

function Pagina() {
 

  return (
    <>
      <Header />
      <h1>Analyze your text in real-time</h1>
      <div className="contenedor-textarea">
        <textarea
        placeholder="Escribe tu texto..."
      ></textarea>
      </div>
      <div className="contenedor-checkbox">
        <label>
          <input type="checkbox" /> 
          <span>Excluir espacios</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Limite de caracteres</span>
        </label>
        <p>Lectura aproximada: </p>
      </div>

    </>
  )
}

export default Pagina
