import { Link } from "react-router-dom";

export function ArtItem(props){
 const codigo = props.codigo
 const ruta = './images/' + props.ruta

    return(
        <article className="articulo">
            <Link to={`/detail/${codigo}/${props.ruta}/China/30x30/20/15`} ><img src={ruta} alt="Servilleta1"></img></Link>
            <h2>Codigo: {codigo}</h2>            
            <a href="#" className="vermasbtn" >Ver Mas</a>
        </article>
    );
}