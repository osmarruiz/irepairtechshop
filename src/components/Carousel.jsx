import React from "react";
import carousel1 from '../img/carousel1.jpg';
import carousel2 from '../img/carousel2.jpg';
import carousel3 from '../img/carousel3.jpg';
import carousel4 from '../img/carousel4.jpg';
function Carousel() {
    return (
 
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={carousel2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={carousel3} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={carousel4} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
            );
}
export default Carousel;