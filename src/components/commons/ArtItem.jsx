import { Link } from "react-router-dom";

export function ArtItem(props){
 const ruta = props.ruta
    return(
        <>
            <Link to={`/detail/${ruta}`} ><img src={ruta} alt="Servilleta1"></img></Link>
            <h2>Codigo: {props.codigo}</h2>
            <input type="button" value="Ver Mas"></input>
        </>
    );
}