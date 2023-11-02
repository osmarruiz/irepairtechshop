import { useContext } from "react";
import { PhoneContext } from "../data/PhoneContext";

function useContextPhone(){
    const phoneContext = useContext(PhoneContext);

    if(phoneContext === undefined){
        throw new Error("Contexto Phone no creado")
    }
    return phoneContext;
}
export default useContextPhone;