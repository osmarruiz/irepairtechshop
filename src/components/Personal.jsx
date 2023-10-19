import React from 'react';

const Personal = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card text-center bg-danger text-light" style={{ width: '80%', border:'none' }}>
                <img src={props.img} className="card-img-top m-auto mt-3 rounded" alt="..." style={{width:'92%'}} height={350} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <p className="card-text"><b>{props.number}</b></p>
                    <div className='contact'>
                        <a href={props.whatsapp} className='btn btn-success btn-lg rounded-circle mx-2'><i className="fab fa-whatsapp"></i></a>
                        <a href={props.telegram} className='btn btn-info text-light btn-lg rounded-circle mx-2'><i className="fab fa-telegram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal;
