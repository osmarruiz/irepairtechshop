import { useState } from "react";

import s22ultra from '../img/s22ultra.webp';
function Hero() {
  //componente hero, retorna el telefono estrella de la pagina
  var lead = "El Samsung Galaxy S22 Ultra es el verdadero flagship de la serie Galaxy S22. Disponible en iRepairTechShop. Es un smartphone de alta gama con un diseño elegante, alto rendimiento y capacidades fotográficas avanzadas. Viene con el sistema operativo One UI 5.1 basado en Android 13.";

  const [showMore, setShowMore] = useState(false);
  let sectionShowMore = <button onClick={() => setShowMore(true)} type="button" className="btn btn-danger btn-lg px-4 me-md-2">Ver mas</button>
  if (showMore) {
    sectionShowMore = <div >{lead.substring(107)} <br /><br /> <div className="d-grid gap-2 d-md-flex justify-content-md-start lead"><button onClick={() => setShowMore(false)} type="button" className="btn btn-danger btn-lg px-4 me-md-2">Ocultar</button></div></div>

  }

  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6 m-auto">
          <img src={s22ultra} class="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Samsung galaxy S22 ultra</h1>
          <p class="lead">{lead.substring(0, 107)}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start lead">
            {sectionShowMore}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
