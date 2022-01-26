import { ArtItemDetail } from "./ArtItemDetail";
import imagen from '../assets/images/servilleta1.jpg'

export function ArtContainer2(){
    return(
        <div className="articulos">
            <ArtItemDetail 
                codigo="INS400" 
                ruta={imagen} 
                origen="China" 
                tamaño="30x30 cm" 
                stock="20 uni"
                precio="$U15"
            />
        </div>
    );
}