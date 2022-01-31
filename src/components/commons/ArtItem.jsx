import { Link } from "react-router-dom";

export function ArtItem(props){
 const codigo = props.codigo
 //console.log(codigo)
    return(
        <>
            <Link to={`/detail/${codigo}`} ><img src={props.ruta} alt="Servilleta1"></img></Link>
            <h2>Codigo: {codigo}</h2>            
            <a href="#" className="vermasbtn" >Ver Mas</a>
        </>
    );
}