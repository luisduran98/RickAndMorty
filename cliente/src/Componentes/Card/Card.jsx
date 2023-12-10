import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./Estilos/Card.css";
import Like from "./Imagenes/Like.png";
import LikeRed from "./Imagenes/LikeRojo.png";
import { eliminar } from "../../Redux/actions";
import { agregarFav } from '../../Redux/actions';
import { eliminarFav } from '../../Redux/actions';

function Card({id,nombre,estado,especie,origen,imagen,genero}){

    const [isFav, setIsFav] = useState(false);

    let estiloEstado = "";
    if(estado === "Dead"){
        estiloEstado = "Nombre-Rojo"
    }
    if(estado === "Alive"){
        estiloEstado = "Nombre-Verde"
    }
    if(estado === "unknown"){
        estiloEstado = "Nombre-Amarillo"
    }

    const user = useSelector((state) => state.usuario);
    const favU = useSelector((state) => state.favoritos);
    const dispatch = useDispatch();

    useEffect(() => {
      const verificador = favU.find((e) => e.id === id);
      if(verificador){setIsFav(true)}
    }, [favU, id]);

    function handleFavorite() {
        if (isFav) {
          setIsFav(false);
          dispatch(eliminarFav(id,user));
          
        } else {
          setIsFav(true);
          dispatch(agregarFav({  
              id: id,
              nombre: nombre,
              estado: estado,
              especie: especie,
              imagen: imagen,
              origen: origen,
              genero: genero,
              idUsuario:user
            })
          );
        }
      }
    return(
        <div className="Card">

        <div className="Perfil">

            <button className="Eliminar" onClick={ ()=>{dispatch(eliminar(id, user))} }>X</button>

            {isFav ? (<img onClick={handleFavorite} alt='Megusta' className="MeGusta-Rojo" src={LikeRed}/>) : (<img onClick={handleFavorite} alt='Megusta' className="MeGusta" src={Like}/>)}

            <NavLink to={`/Detalle/${id}`} ><img className="Perfil-Imagen" src={imagen} alt={nombre}/></NavLink>

            <Link className="Nombre" to={`/Detalle/${id}`}>{nombre}</Link>

            <span className="Id" >{id}</span>
        </div>
        <div className="Texto">
            <p className={estiloEstado}>{estado}</p>
            <p className="Texto-Dos">{especie}</p>
            <p className="Texto-Dos">{origen}</p>
        </div>

        </div>
    )
}

export default Card;