import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import "./Estilos/Navegador.css";
import RickAndMortyImage from './Imagenes/rick.png';

function Navegador({verificador}){
return (
    <nav className="Navegador">

        <div className="Izquierda">
            <img className="rick" src={RickAndMortyImage}/>
            <span className="Rick-Morty">Rick y Morty</span>
        </div>

        <SearchBar verificador={verificador}/>

        <div className="Derecha">
            <NavLink className="Botones-Guia" to='/SobreMi'>Sobre Mi</NavLink><br/>

            <NavLink className="Botones-Guia" to='/Principal'>Principal</NavLink><br/>

            <NavLink className="Botones-Guia" to='/Favoritos'>Favoritos</NavLink><br/>

            <NavLink className="Boton-Cerrar" to='/'>Cerrar Sesion</NavLink><br/>
        </div>
    </nav>
)}

export default Navegador;