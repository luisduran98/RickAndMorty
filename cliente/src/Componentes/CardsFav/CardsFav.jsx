import { useSelector } from "react-redux";
import "../Cards/Estilos/Cards.css";
import CardFav from "../CardFav.jsx/CardFav";


function CardsFav(){
    const favoritos = useSelector((state) => state.favoritos);
    return(
        <div className="Cards">
            {favoritos.map(({id,nombre,estado,especie,origen,imagen,genero},index)=>{
                const uniqueKey = `${id}_${index}`;
                return <CardFav 
                id={id}
                key={uniqueKey}
                nombre={nombre} 
                estado={estado} 
                especie={especie} 
                origen={origen} 
                imagen={imagen}
                genero={genero}/>
            })}
        </div>
    )
}


export default CardsFav;