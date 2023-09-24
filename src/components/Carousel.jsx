import React from "react";

function Carousel() {
    return (
 
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    < button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active " data-bs-interval="2000">
                        <img src="/carousel1.jpg" className="d-block w-100" alt="..."  />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/carousel2.jpg" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/carousel3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/carousel4.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            );
}
export default Carousel;