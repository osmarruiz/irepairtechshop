import Personal from "../Personal";
import Ubication from '../Ubication';

import Osmar from "../../img/osmar.webp";
import Aurelio from "../../img/aurelio.webp"

function Contact() {
    //esta es la pagina de contactos lo cual retorna dos componentes personal con datos pasados por props y un componente 
    //ubicacion
    return (
        <div className="container mb-5 mt-5">
            <div className="row">
                <div className="col-sm-6">
                    <Personal img={Osmar} title="Osmar Ruiz" text="Tecnico en reparacion de Software" number="+505 8222 8647" whatsapp="https://wa.me/+50582228647?text=Hola,%20necesito%20mas%20informaci%C3%B3n" telegram="https://t.me/kakash111111" />
                </div>
                <div className="col-sm-6">
                    <Personal img={Aurelio} title="Aurelio Bucardo" text="Tecnico en reparacion de Hardware" number="+505 8714 2059" whatsapp="https://wa.me/+50587142059?text=Hola,%20necesito%20mas%20informaci%C3%B3n" telegram="https://t.me/AurelioSalgado" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="ubication">
                <hr />
                <Ubication />
            </div>
        </div>

    );
}

export default Contact;