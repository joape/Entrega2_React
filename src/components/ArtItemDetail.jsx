export function ArtItemDetail(props){
    return (
    <>
        <article className="articulo">
            <img src={props.ruta} alt="servilleta1"></img>
            <h2>Codigo: {props.codigo}</h2>
            <input type="button" value="Agregar al Carro"></input>
        </article>               
        <article className="detalle">
            <ul>
                <li>Origen: {props.origen}</li>
                <li>Tamaño: {props.tamaño}</li>
                <li>Cantidad Stock: {props.stock}</li>
                <li>Precio: {props.precio}</li>
            </ul>
        </article> 
    </>       
    );
}