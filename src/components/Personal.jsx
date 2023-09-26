import React from 'react';

const Personal = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card text-center" style={{ width: '80%' }}>
                <img src={props.img} className="card-img-top" alt="..." height={400} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <p className="card-text"><b>{props.number}</b></p>
                </div>
            </div>
        </div>
    );
}

export default Personal;
