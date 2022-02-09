import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { ArtItem } from "./ArtItem";
//aca se va a conectar a la BBDD y traera los productos

export function ArtList(){
    
    const [listadoProds, setListadoProds] = useState([]);
    const [error, setError] = useState("");

    //Voy a buscar la informacion al servidor
    useEffect(() => {
        //Fetch / GET a JSON Servilletas
        api.get("/servilletas").then(function (response) {
        const prods = response.data;
        //console.log(prods);    
        //Cambiamos el estado para que react lo re dibuje
        setListadoProds(prods);
        });
    }, []);
    
    const artItems = listadoProds.map(function (prod) {
        return(
        <ArtItem key={prod.id} producto={prod} />);
    });
   
    return(
        <div className="articulos">
                <p>{error}</p>             
                {artItems}           
        </div>
    );  
}