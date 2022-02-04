import { ArtItem } from "./ArtItem";
//aca se va a conectar a la BBDD y traera los productos

export function ArtList(){
    const imagen1 = 'servilleta1.jpg'
    const imagen2 = 'servilleta2.jpg'
    const imagen3 = 'servilleta3.jpg'
    const imagen4 = 'servilleta4.jpg'
    return(
        <div className="articulos">            
                <ArtItem codigo="INS400" ruta={imagen1}/>         
                <ArtItem codigo="FLO400" ruta={imagen2}/>
                <ArtItem codigo="ANI400" ruta={imagen3}/>
                <ArtItem codigo="ANI500" ruta={imagen4}/>           
        </div>
    );
}