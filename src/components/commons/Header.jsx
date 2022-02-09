import logo from '../../assets/images/logo.png'
import menu_burger from '../../assets/images/Menú-hamburguesa900x753.png'
import lupa from '../../assets/images/lupa-de-busqueda.png'
import { NavBar } from './NavBar';

export function Header(){
return(
        <header>
            <img src={logo} alt="Logo Decoupage Online"></img>
            <img className="menu_burger" src={menu_burger} alt="categorias"></img>
            <NavBar />
            <div className="search">
                <img src={lupa} alt="Ingrese codigo de servilleta"></img>
                <input name="buscar" type="text"></input>
            </div>
            <div className="search">Login</div>
        </header>
    );
}