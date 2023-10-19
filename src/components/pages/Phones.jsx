import React from "react";
import CardPhone from "../CardPhone";
import IphoneLogo from '../../img/iPhone-logo.jpg';
import SamsungLogo from '../../img/samsung-logo.png';
import XiaomiLogo from '../../img/Xiaomi-Logo.png';
import iphone15 from '../../img/iphone15.jpg';
import iphone15pro from '../../img/iphone15pro.jpg';
import iphone15promax from '../../img/iphone15promax.jpg';
import iphone14 from '../../img/iphone14.webp'
import s23 from '../../img/s23.jpg';
import s23ultra from '../../img/s23ultra.jpg';
import note20 from '../../img/note20.jpg';
import a54 from '../../img/a54.jpg';

import note12pro from '../../img/note12pro.webp';
import note12s from '../../img/note12s.jpg';
import note11pro from '../../img/note11pro.jpg';
import note11 from '../../img/note11.png';


function Phones() {
    return (
        <div className="container mt-5 mb-5 text-center">
            <div className="row mb-3">
                <h1>Marcas disponibles</h1>
                <div className="col">
                    <img src={IphoneLogo} alt="" width="300px" />
                </div>
                <div className="col">
                    <img src={SamsungLogo} alt="" width="300px" />
                </div>
                <div className="col">
                    <img src={XiaomiLogo} alt="" width="300px" />
                </div>
            </div>
            <br/>
            <h1 className="text-center">Modelos Disponibles en Iphone</h1>
            <br />
            <hr />
            <div className="row mb-3">
                
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={iphone15} title="Iphone 15"  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={iphone15pro} title="Iphone 15 Pro "  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={iphone15promax} title="Iphone 15 Pro Max"  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={iphone14} title="Iphone 14 "  />
                </div>
            </div>
            <div className="row mb-3 text-center">
                <br />
                <h1>Modelos Disponibles en Samsung</h1>
                <br />
                <hr />
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={s23} title="Samsung Galaxy S23 "  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={s23ultra} title="Samsung Galaxy S23 Ultra "  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={note20} title="Samsung Galaxy Note 20 "  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={a54} title="Samsung Galaxy A54 "  />
                </div>
            </div>
            <div className="row mb-3">
                <h1>Modelos Disponibles en Xiaomi</h1>
                <br />
                <hr />
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={note12pro} title="Xiaomi Note 12 Pro"  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={note12s} title="Xiaomi Note 12s "  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={note11pro}title="Xiaomi Note 11 Pro "  />
                </div>
                <div className="col col-xl-3 col-lg-6">
                    <CardPhone img={note11} title="Xiaomi Note 11 "  />
                </div>
            </div>
        </div>
    );
}

export default Phones;