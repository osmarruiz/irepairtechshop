import Banner from "../Banner";

import Reparacion from "../../img/Reparacion.jpeg"
import DownloadMode from "../../img/downloadmode.jpg"
function Services() {
    //pagina de servicios retorna dos banner software y hardware
    return (
        <div>
            <Banner img={Reparacion} text="Reparamos todos los modelos de telefonos" secondary="Cambio de pantalla - cambio de bateria - radiofrecuencia - microsoldadura - puerto de carga" textButton="Contactar"/>
            <Banner img={DownloadMode} text="Software a todos los modelos de telefonos" secondary="Flasheo - FRP - Bypass cuenta mi - Desbloqueo de red - Reparacion de certificados" textButton="Contactar"/>
        </div>
    );
}

export default Services;