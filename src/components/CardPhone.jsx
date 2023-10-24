import React from 'react';

const CardPhone = (props) => {
    return (
        <div className="card m-auto" style={{width:"18rem", border:"none"}}  >
            <img src={props.img} className="card-img " alt="..." style={{height:"300px"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
        </div>
    );
}

export default CardPhone;