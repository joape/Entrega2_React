import { ArtItem } from "./ArtItem";

export function ArtList(){
    return(
        <>
            <article className="articulo">
                <ArtItem codigo="INS400" />
            </article>
            <article className="articulo">
                <ArtItem codigo="FLO400" />
            </article>
            <article className="articulo">
                <ArtItem codigo="ANI400" />
            </article>
            <article className="articulo">
                <ArtItem codigo="ANI500" />
            </article>
        </>
    );
}