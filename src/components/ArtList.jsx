import { ArtItem } from "./ArtItem";


export function ArtList(){
    const imagen1 = './images/servilleta1.jpg'
    const imagen2 = './images/servilleta2.jpg'
    const imagen3 = './images/servilleta3.jpg'
    const imagen4 = './images/servilleta4.jpg'
    return(
        <>
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
        </>
    );
}