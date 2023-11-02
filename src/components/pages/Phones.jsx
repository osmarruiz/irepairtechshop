import {  useState, useContext } from "react";
import CardPhone from "../CardPhone";
import SearchBar from "../SearchBar";
import { PhoneContext } from "../../App";

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
import DataPhone from "../../data/DataPhone";

//diccionario de imagenes
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

function Phones(props) {
    const elements = useContext(PhoneContext);
    
    //Recupera todos los datos de los telefonos y los emplea en cardPhone 
    let dataPhone = elements.map(element => {
        const imgSrc = imgMap[element.Img];
        return (
            <div className="col col-xl-3 col-lg-6" key={element.Id}>
                <CardPhone img={imgSrc} title={element.Model} price={element.Price} addFavorites={props.addFavorites} />
            </div>
        );
    }
    )

    //filtra por marca de telefono y renderiza
    const [filteredData, setFilteredData] = useState([]);

    function filterPhone(brand) {
        const filteredPhones = brand === "" ? [] : DataPhone.filter(phone => phone.Brand === brand);
        setFilteredData(filteredPhones);
    }

    const dataFilter = filteredData.map(phone => (
        <div className="col col-xl-3 col-lg-6" key={phone.Id}>
            <CardPhone img={imgMap[phone.Img]} title={phone.Model} price={phone.Price} addFavorites={props.addFavorites} />
        </div>
    ));

    const dataMain = (
        <div className="row mb-3">
            {dataFilter.length > 0 ? (
                <>
                    {dataFilter}
                    <button className="btn btn-danger" onClick={() => filterPhone("")}> ver Todo</button>
                </>
            ) : dataPhone}
        </div>
    );

    //Recupera todos los datos de los favoritos y los emplea en cardPhone 
    const favorites = props.favorites.length > 0 ? (
        <div>
            <div className="bg-danger rounded text-light">
                <h1 className="pb-2">Favoritos</h1>
            </div>
            <br />
            <div className="row mb-3">
                {props.favorites.map((element) => (
                    <div className="col col-xl-3 col-lg-6" key={element.Id}>
                        <CardPhone img={element.img} title={element.title} price={element.price} addFavorites={props.addFavorites} />
                    </div>
                ))}
            </div>
        </div>
    ) : null;

    //emplea la busqueda desde la barra
    const [search, setSearch] = useState("");

    const HandlerSearch = (e) => {
        setSearch(e);
        filterSearch(e);
    }
    
    const filterSearch = (search) => {
        const result = props.elements.filter((element) => {
            const brandAndModel = element.Brand.toString().toLowerCase() + " " + element.Model.toString().toLowerCase();
            return brandAndModel.includes(search.toLowerCase());
        });
        setFilteredData(result);
    }

    return (
        <div className="container mt-5 mb-5 text-center">
            <div className="row mb-3">
                <div className="bg-danger rounded text-light">
                    <h1 className="">Marcas disponibles</h1>
                </div>
                <div className="col">
                    <button className="btn" onClick={() => filterPhone("iPhone")}><img src={IphoneLogo} alt="" width="300px" /></button>
                </div>
                <div className="col">
                    <button className="btn" onClick={() => filterPhone("Samsung")}><img src={SamsungLogo} alt="" width="300px" /></button>
                </div>
                <div className="col">
                    <button className="btn" onClick={() => filterPhone("Xiaomi")}><img src={XiaomiLogo} alt="" width="300px" /></button>
                </div>
            </div>
            <br />
            <br />
            <div className="bg-danger rounded text-light">
                <h1 className=" pb-2">Modelos Disponibles en IRepairTechShop</h1>
            </div>
            <SearchBar handlerSearch={HandlerSearch} search={search} />
            <br />
            {dataMain}
            <br />
            <br />
            {favorites}
        </div>
    );
}

export default Phones;