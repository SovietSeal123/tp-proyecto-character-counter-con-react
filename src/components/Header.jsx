import logo from "../assets/img/logo.png"
import cambioDeTema from "../assets/img/cambio-de-tema.png"
import '../styles/header.css'

const Header = ({cambiarTema}) => {
    return (
        <header className="header">
            <img className="imagenLogo" src={logo} alt="Logo" />
            <h2>Character Counter</h2>
            <button onClick={cambiarTema}><img className="imagenBoton" src={cambioDeTema} alt="boton de cambio de tema" /></button>
        </header>
    )
}

export {Header}