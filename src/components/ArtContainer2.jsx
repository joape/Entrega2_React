import { ArtItemDetail } from "./ArtItemDetail";

export function ArtContainer2(){
    return(
        <div className="articulos">
            <ArtItemDetail 
                codigo="INS400" 
                ruta="./images/servilleta1.jpg" 
                origen="China" 
                tamaño="30x30 cm" 
                stock="20 uni"
                precio="$U15"
            />
        </div>
    );
}