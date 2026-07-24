import "../styles/barrasprogreso.css";

const BarrasProgreso = ({ letra, porcentaje }) => {
    return (
        <div className="barra-letra">
            <span className="letra">{letra}</span>

            <div className="barra">
                <div
                    className="progreso"
                    style={{ width: `${porcentaje}%` }}
                ></div>
            </div>

            <span className="porcentaje">{porcentaje}%</span>
        </div>
    );
};

export { BarrasProgreso };