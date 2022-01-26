import { ArtItem } from "./ArtItem";
import imagen1 from '../assets/images/servilleta1.jpg'
import imagen2 from '../assets/images/servilleta2.jpg'
import imagen3 from '../assets/images/servilleta3.jpg'
import imagen4 from '../assets/images/servilleta4.jpg'

export function ArtList(){
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