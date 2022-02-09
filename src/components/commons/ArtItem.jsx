import { Link } from "react-router-dom";

export function ArtItem(props){
 const producto = props.producto; //aca paso TODO el objeto a la variable producto
 const id = producto.id //obtengo el ID para pasar al JSON
 const codigo = producto.codigo // aca llamo al atributo codigo del objeto producto
 const imagen = producto.imagen // aca llamo al atributo imagen del objeto producto
 const ruta = './images/' + imagen

    return(
        <article className="articulo">
            <Link to={`/detail/${id}`} ><img src={ruta} alt="Servilleta1"></img></Link>
            <h2>Codigo: {codigo}</h2>            
            <a href="#" className="vermasbtn" >Ver Mas</a>
        </article>
    );
}