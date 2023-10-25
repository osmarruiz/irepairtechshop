import React from 'react';
import {useState} from 'react';
const CardPhone = (props) => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const starColorClass = isHovered ? "text-warning" : "text-danger";

    return (
        <div className="card m-auto" style={{width:"18rem", border:"none", position: "relative"}}  >
            <img src={props.img} className="card-img" alt="..." style={{height:"300px"}} />     
           <i title="Añadir a Favoritos "className={`fa fa-star btn ${starColorClass}`} style={{ fontSize: "2em", position: "absolute", top: "240px", left: "210px", border:"none" }}onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={()=>props.addFavorites(props)}></i>
                   
                    <h5 className="card-title text-center">{props.title}</h5>
        </div>
    );
}

export default CardPhone;