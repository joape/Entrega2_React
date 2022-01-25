import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeaderSeccion } from "./components/HeaderSeccion";
import { SeccionPromociones } from "./components/SeccionPromociones";
import { ArtContainer } from "./components/ArtContainer";
//import { ArtContainer2 } from "./components/ArtContainer2";

export function App(){
    return(
        <div className="contenedor">
            <Header />
            <main>
                <HeaderSeccion />
                <SeccionPromociones />
                <ArtContainer />
            </main>
            <Footer />
        </div>
    );
}