import { ArtItem } from "./ArtItem";
//aca se va a conectar a la BBDD y traera los productos

export function ArtList(){
    const imagen1 = 'servilleta1.jpg'
    const imagen2 = 'servilleta2.jpg'
    const imagen3 = 'servilleta3.jpg'
    const imagen4 = 'servilleta4.jpg'
    return(
        <div className="articulos">
            <article className="articulo">
                <ArtItem codigo="INS400" ruta={imagen1} />
            </article>
            <article className="articulo">
                <ArtItem codigo="FLO400" ruta={imagen2}/>
            </article>
            <article className="articulo">
                <ArtItem codigo="ANI400" ruta={imagen3}/>
            </article>
            <article className="articulo">
                <ArtItem codigo="ANI500" ruta={imagen4}/>
            </article>
        </div>
    );
}