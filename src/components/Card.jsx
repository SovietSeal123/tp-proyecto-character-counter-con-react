import "../styles/card.css";

const Card = ({ titulo, cantidad, clase, icono }) => {
    return (
        <div
            className={`card ${clase}`}
            style={{ backgroundImage: `url(${icono})` }}
        >
            <h3>{cantidad}</h3>
            <p>{titulo}</p>
        </div>
    );
};

export { Card };