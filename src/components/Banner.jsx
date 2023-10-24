import React from 'react';

const Banner = (props) => {
    return (
        <div className="p-5 text-center bg-image rounded-3" style={{
            backgroundImage: `url(${props.img})`,
            height: "700px",
            position: "relative", 
        }}>
            <div className="mask"
                 style={{
                     backgroundColor: "rgba(0, 0, 0, 0.6)",
                     position: "absolute", 
                     top: 0, 
                     left: 0, 
                     width: "100%", 
                     height: "100%" 
                 }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">{props.text}</h1>
                        <h5 className='mb-3'>{props.secondary}</h5>
                        <a className="btn btn-outline-danger btn-lg" href="/irepairtechshop/contact" role="button">{props.textButton}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
