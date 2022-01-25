import { ArtItem } from "./ArtItem";

export function ArtList(){
    return(
        <>
            <article className="articulo">
                <ArtItem codigo="INS400" ruta="images/servilleta1.jpg" />
            </article>
            <article className="articulo">
                <ArtItem codigo="FLO400" ruta="images/servilleta2.jpg"/>
            </article>
            <article className="articulo">
                <ArtItem codigo="ANI400" ruta="images/servilleta3.jpg"/>
            </article>
            <article className="articulo">
                <ArtItem codigo="ANI500" ruta="images/servilleta4.jpg"/>
            </article>
        </>
    );
}