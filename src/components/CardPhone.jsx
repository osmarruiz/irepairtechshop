import { useState } from 'react';
import { Link } from "react-router-dom";

function CardPhone(props) {
  //componente cardPhone retorna una carta de telefono con los datos pasados por props

  //se pasa encima de la etiqueta i cambia de color
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    

  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const starColorClass = isHovered ? "text-warning" : "text-danger";

  return (
    <div className="card m-auto mb-5 " style={{ width: "18rem", border: "none", position: "relative" }} >
      <img src={props.img} className="card-img " alt="..." style={{ height: "300px" }} />
      <i title="Añadir a Favoritos " className={`fa fa-star btn ${starColorClass}`} style={{ fontSize: "2em", position: "absolute", top: "240px", left: "210px", border: "none" }} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={() => props.addFavorites(props)}></i>
      <h5 className="card-title text-center">{props.model}</h5>
      <h6 className="card-text text-center">${props.price}</h6>
      <Link className="btn btn-danger w-50 m-auto " to={`/irepairtechshop/Details/${props.id}` }>Ver Detalles</Link>
    </div>
  );
}

export default CardPhone;