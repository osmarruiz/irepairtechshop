import carousel1 from '../img/carousel1.jpg';
import carousel2 from '../img/carousel2.jpg';
import carousel3 from '../img/carousel3.jpg';
import carousel4 from '../img/carousel4.jpg';
function Carousel() {
  //componente carousel, retorna un carousel con imagenes de los clientes
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;