import React, { useState } from "react";
import DataPhone from "./DataPhone";
import CardPhone from "../components/CardPhone";


import iphone15 from '../img/iphone15.jpg';
import iphone15pro from '../img/iphone15pro.jpg';
import iphone15promax from '../img/iphone15promax.jpg';
import iphone14 from '../img/iphone14.webp'
import s23 from '../img/s23.jpg';
import s23ultra from '../img/s23ultra.jpg';
import note20 from '../img/note20.jpg';
import a54 from '../img/a54.jpg';
import note12pro from '../img/note12pro.webp';
import note12s from '../img/note12s.jpg';
import note11pro from '../img/note11pro.jpg';
import note11 from '../img/note11.png';

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

const PhoneContext = React.createContext();

function PhoneContextProvider({ children }) {
    //listas de telefonos y favoritos
    const [ListPhone] = useState(DataPhone);
    const [ListFavorites, setDataFavorites] = useState([]);

  

    function addToFavorite(phone) {
        let tempList = [...ListFavorites];
        let isAlreadyAdded = ListFavorites.some((item) => item.model === phone.model);
    
        if (!isAlreadyAdded) {
          tempList.push(phone);
          setDataFavorites(tempList);
        }
        else {
          let i = tempList.findIndex(obj => JSON.stringify(obj) === JSON.stringify(phone));
          tempList.splice(i, 1);
          setDataFavorites(tempList);
        }
      }

    //Recupera todos los datos de los telefonos y los emplea en cardPhone 
    let dataPhone = ListPhone.map(phone => {
        const imgSrc = imgMap[phone.img];
        return (
            <div className="col col-xl-3 col-lg-6" key={phone.id}>
                <CardPhone id={phone.id} img={imgSrc} model={phone.model} price={phone.price} addFavorites={addToFavorite} />
            </div>
        );
    }
    )
    function filterPhoneById(id){
        let phone = DataPhone.filter(phone => phone.id === parseInt(id));
        return (
            phone[0]
        )
    }
    //filtra por marca de telefono y renderiza
    const [filteredData, setFilteredData] = useState([]);

    function filterPhone(brand) {
        const filteredPhones = brand === "" ? [] : DataPhone.filter(phone => phone.brand === brand);
        setFilteredData(filteredPhones);
    }

    const dataFilter = filteredData.map(phone => (
        <div className="col col-xl-3 col-lg-6" key={phone.id}>
            <CardPhone id={phone.id} img={imgMap[phone.Img]} model={phone.model} price={phone.price} addFavorites={addToFavorite} />
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
    const favorites = ListFavorites.length > 0 ? (
        <div>
            <div className="bg-danger rounded text-light">
                <h1 className="pb-2">Favoritos</h1>
            </div>
            <br />
            <div className="row mb-3">
                {ListFavorites.map((phone) => (
                    <div className="col col-xl-3 col-lg-6" key={phone.id}>
                        <CardPhone id={phone.id} img={phone.img} model={phone.model} price={phone.price} addFavorites={addToFavorite} />
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
        const result = ListPhone.filter((phone) => {
            const brandAndModel = phone.brand.toString().toLowerCase() + " " + phone.model.toString().toLowerCase();
            return brandAndModel.includes(search.toLowerCase());
        });
        setFilteredData(result);
    }
    return (
        <PhoneContext.Provider value={
            {
                ListPhone,
                dataMain,
                ListFavorites,
                addToFavorite,
                favorites,
                filterPhone,
                search,
                HandlerSearch,
                filterPhoneById,
                imgMap


            }
        }>
            {children}
        </PhoneContext.Provider>
    );
}
export { PhoneContext, PhoneContextProvider };