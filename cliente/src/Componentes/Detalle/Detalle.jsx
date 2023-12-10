import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Estilos/Estilos.css";
export default function Detalle() {
  const { id } = useParams();
  const personajes = useSelector((state) => state.personajes);
  const cache = personajes.find((e) => e.id === Number(id));

  return (
    <div className="Detalle-General">

        <div className="Detalle">
            <div className="Detalle-Dos"> 
                <img className="Detalle-Imagen" src={cache.imagen}/>
            </div>
            <div className="Detalle-Tres">
                <p className="Detalle-Texto">{`Id: ${cache.id}`}</p>
                <p className="Detalle-Texto">{`Nombre: ${cache.nombre}`}</p>
                <p className="Detalle-Texto">{`Estado: ${cache.status}`}</p>
                <p className="Detalle-Texto">{`Especie: ${cache.especie}`}</p>
                <p className="Detalle-Texto">{`Genero: ${cache.genero}`}</p>
                <p className="Detalle-Texto">{`Origen: ${cache.origen}`}</p>
            </div>
        </div>

    </div>
    
  );
}