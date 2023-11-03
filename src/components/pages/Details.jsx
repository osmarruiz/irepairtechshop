import { useParams } from 'react-router-dom';
import useContextPhone from "../../hooks/useContextPhone";
import Banner from '../Banner';

function Details(){
    const PhoneContext = useContextPhone();
    const {id} = useParams();
    const phone = PhoneContext.filterPhoneById(id);
    const img = PhoneContext.imgMap[phone.img]
    return(
        <Banner img={img} text={phone.brand +" "+ phone.model} secondary={phone.info} textButton="Contactar"/>

    );
}
export default Details;