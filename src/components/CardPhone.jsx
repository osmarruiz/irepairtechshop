import React from 'react';

const CardPhone = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.img} className="card-img-top" alt="..." height={300}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
        </div>
    );
}

export default CardPhone;