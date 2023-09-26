import React from "react";
import Personal from "../Personal";
import Osmar from "../../img/osmar.webp";
import Aurelio from "../../img/aurelio.webp"
import Ubication from '../Ubication';
function Contact() {
    return (
        <div>
            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <Personal img={Osmar} title="Osmar Ruiz" text="Tecnico en reparacion de Software" number="+505 8222 8647" />
                    </div>
                    <div className="col-sm-6">
                        <Personal img={Aurelio} title="Aurelio Bucardo" text="Tecnico en reparacion de Hardware" number="+505 8714 2059"/>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <hr/>
                    <Ubication/>
                </div>
            </div>
        </div>
    );
}

export default Contact;