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

function Phones(props) {
    {/*dictionary of images*/ }
    const imgMap = {
        'iphone15': iphone15,
        'iphone15pro': iphone15pro,
        'iphone15promax': iphone15promax,
        'iphone14': iphone14,
        's23': s23,
        's23ultra': s23ultra,
        'note20': note20,
        'a54': a54,
        'note12pro': note12pro,
        'note12s': note12s,
        'note11pro': note11pro,
        'note11': note11,
    };

    let dataIphone = props.elements.map(element => {
        if (element.Brand === "iPhone") {
            const imgSrc = imgMap[element.Img];
            return (
                <div className="col col-xl-3 col-lg-6" key={element.Id}>
                    <CardPhone img={imgSrc} title={element.Model} addFavorites={props.addFavorites} />
                </div>
            )
        }
    }

    )

    let dataSamsung = props.elements.map(element => {
        if (element.Brand === "Samsung") {
            const imgSrc = imgMap[element.Img];
            return (
                <div className="col col-xl-3 col-lg-6" key={element.Id}>
                    <CardPhone img={imgSrc} title={element.Model} addFavorites={props.addFavorites} />
                </div>
            )
        }
    }
    )

    let dataXiaomi = props.elements.map(element => {
        if (element.Brand === "Xiaomi") {
            const imgSrc = imgMap[element.Img];
            return (
                <div className="col col-xl-3 col-lg-6" key={element.Id}>
                    <CardPhone img={imgSrc} title={element.Model} addFavorites={props.addFavorites} />
                </div>
            )
        }
    }
    )

    let dataFavorites = props.favorites.map(element => {
        return (
        <div className="col col-xl-3 col-lg-6" key={element.Id}> 
                <CardPhone img={element.img} title={element.title} addFavorites={props.addFavorites} /> 
        </div >
        )
})

return (
    <div className="container mt-5 mb-5 text-center">
        <div className="row mb-3">
            <div className="bg-danger rounded text-light">
                <h1 className="">Marcas disponibles</h1>
            </div>
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
        <br />
        <br />
        <div className="bg-danger rounded text-light">
            <h1 className=" pb-2">Modelos Disponibles en Iphone</h1>
        </div>
        <br />
        <div className="row mb-3">
            {dataIphone}
        </div>
        <br />
        <br />
        <div className="bg-danger rounded text-light ">
            <h1 className="pb-2">Modelos Disponibles en Samsung</h1>
        </div>
        <br />
        <div className="row mb-3 text-center">
            {dataSamsung}
        </div>
        <br />
        <br />
        <div className="bg-danger rounded text-light ">
            <h1 className="pb-2">Modelos Disponibles Xiaomi</h1>
        </div>
        <br />
        <div className="row mb-3">
            {dataXiaomi}
        </div>
        <br />
        <br />
        <div className="bg-danger rounded text-light ">
            <h1 className="pb-2">Favoritos</h1>
        </div>
        <br />
        <div className="row mb-3">
            {dataFavorites}
        </div>
    </div>
);
}

export default Phones;