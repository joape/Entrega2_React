import { useParams } from "react-router-dom";

export function ArtItemDetail(props){

    //aca se va a conectar a la BBDD y traera los productos
    //Preguntarle a profesor paso de parametros (al menos un ID)
    const {codigo, ruta, origen, tam, cant, precio} = useParams();
    console.log(codigo, ruta, origen, tam, cant, precio)
    const imagen = <img src={"/images/" + ruta} alt="servilleta1"></img>;

    return (
    <div className="articulos">
        <article className="articulo">
            {imagen}
            <h2>Codigo: {codigo}</h2>
            <a href="#" className="agregarCarroBtn" >Agregar al Carro</a>
        </article>               
        <article className="detalle">
            <ul>
                <li>Origen: {origen}</li>
                <li>Tamaño: {tam} cm</li>
                <li>Cantidad Stock: {cant} uni</li>
                <li>Precio: $U{precio}</li>
            </ul>
        </article> 
    </div>       
    );
}