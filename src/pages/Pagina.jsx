import { useState } from 'react'
import { Header } from '../components/Header'
import { Card } from '../components/Card'
import cardVioleta from "../assets/img/card-1.png"
import cardNaranja from "../assets/img/card-2.png"
import cardCoral from "../assets/img/card-3.png"
import { BarrasProgreso } from '../components/BarrasProgreso'

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
      <div className="contenedor-cards">
        <Card
            titulo="Caracteres totales"
            cantidad="00"
            clase="violeta"
            icono={cardVioleta}

        />
        <Card
            titulo="Palabras contadas"
            cantidad="00"
            clase="naranja"
            icono={cardNaranja}
        />
        <Card
            titulo="Oraciones contadas"
            cantidad="00"
            clase="coral"
            icono={cardCoral}
        />
      </div>
      <h2 className="titulo-Densidad">Densidad de letras</h2>
      <div className="contenedor-barras">
        <BarrasProgreso letra="E" porcentaje={18} />
        <BarrasProgreso letra="A" porcentaje={13} />
        <BarrasProgreso letra="O" porcentaje={11} />
        <BarrasProgreso letra="S" porcentaje={8} />
        <BarrasProgreso letra="R" porcentaje={6} />
      </div>
    </>
  )
}

export default Pagina
