export function ArtItem(props){
    return(
        <>
            <a href="prod_detail.html"><img src={props.ruta} alt="Servilleta1"></img></a>
            <h2>Codigo: {props.codigo}</h2>
            <input type="button" value="Ver Mas"></input>
        </>
    );
}