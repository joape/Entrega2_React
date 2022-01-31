import logo from '../../assets/images/logo.png'
import menu_burger from '../../assets/images/Menú-hamburguesa900x753.png'
import lupa from '../../assets/images/lupa-de-busqueda.png'

export function Header(){
return(
        <header>
            <img src={logo} alt="Logo Decoupage Online"></img>
            <img className="menu_burger" src={menu_burger} alt="categorias"></img>
            <nav>
                <ul>
                    <li><a href="#">COCINA,FRUTAS Y VERDURAS</a></li>
                    <li><a href="#">FLORES</a></li>
                    <li><a href="#">ANIMALES Y INSECTOS</a></li>
                    <li><a href="#">VINTAGE</a></li>
                    <li><a href="#">NAVIDAD</a></li>
                    <li><a href="#">HOJAS</a></li>
                    <li><a href="#">ARABESCOS Y PUNTOS</a></li>                    
                </ul>                
            </nav>
            <div className="search">
                <img src={lupa} alt="Ingrese codigo de servilleta"></img>
                <input name="buscar" type="text"></input>
            </div>
            <div className="search">Login</div>
        </header>
    );
}