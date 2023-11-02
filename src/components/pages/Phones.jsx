
import SearchBar from "../SearchBar";
import useContextPhone from "../../hooks/useContextPhone";
import IphoneLogo from '../../img/iPhone-logo.jpg';
import SamsungLogo from '../../img/samsung-logo.png';
import XiaomiLogo from '../../img/Xiaomi-Logo.png';


function Phones() {
    const PhoneContext = useContextPhone();
    
    return (
        <div className="container mt-5 mb-5 text-center">
            <div className="row mb-3">
                <div className="bg-danger rounded text-light">
                    <h1 className="">Marcas disponibles</h1>
                </div>
                <div className="col">
                    <button className="btn" onClick={() => PhoneContext.filterPhone("iPhone")}><img src={IphoneLogo} alt="" width="300px" /></button>
                </div>
                <div className="col">
                    <button className="btn" onClick={() => PhoneContext.filterPhone("Samsung")}><img src={SamsungLogo} alt="" width="300px" /></button>
                </div>
                <div className="col">
                    <button className="btn" onClick={() => PhoneContext.filterPhone("Xiaomi")}><img src={XiaomiLogo} alt="" width="300px" /></button>
                </div>
            </div>
            <br />
            <br />
            <div className="bg-danger rounded text-light">
                <h1 className=" pb-2">Modelos Disponibles en IRepairTechShop</h1>
            </div>
            <SearchBar handlerSearch={PhoneContext.HandlerSearch} search={PhoneContext.search} />
            <br />
            {PhoneContext.dataMain}
            <br />
            <br />
            {PhoneContext.favorites}
        </div>
    );
}

export default Phones;