import { useDispatch } from "react-redux";
import { useState} from 'react';
import { useSelector } from "react-redux";
import "./Estilos/SearchBar.css";
import Buscador from "./Imagenes/2202246_loupe_search_icon.svg";
import { addPersonaje } from "../../Redux/actions";
function SearchBar(){

    const dispatch = useDispatch();
    const [id,setId] = useState("");
    const user = useSelector((state) => state.usuario);

    function handleChange(event) {
        setId(event.target.value)}
    return(
        <div className="Centro">

            <input className="Buscador" placeholder="Buscar" type="text" value={id} onChange={handleChange}/>
            <button className="Agregar" onClick={()=>{dispatch(addPersonaje(id,user))}}>
                <img className="Agregar-dos" src={Buscador} alt="Buscar" />
            </button>

        </div>
    )
}

export default SearchBar;