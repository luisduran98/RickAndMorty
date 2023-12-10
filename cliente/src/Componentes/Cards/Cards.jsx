import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './Estilos/Cards.css';

function Cards() {
  const personajes = useSelector((state) => state.personajes);
  const [indice, setIndice] = useState(0);

  const sumar = () => {
    setIndice(indice + 12);
  };

  const restar = () => {
    setIndice(Math.max(indice - 12, 0));
  };

  return (
    <div>
      <div className="Cards">
        {personajes.slice(indice, indice + 12).map(({ id, nombre, estado, especie, origen, imagen, genero }, index) => {
          const uniqueKey = `${id}_${index}`;
          return (
            <Card
              id={id}
              key={uniqueKey}
              nombre={nombre}
              estado={estado}
              especie={especie}
              origen={origen}
              imagen={imagen}
              genero={genero}
            />
          );
        })}
      </div>
      <div className="paginado">
        {indice !== 0 && <button className="menor" onClick={restar}> &lt; </button>}
        {personajes.length > indice + 12 && <button className="mayor" onClick={sumar}> &gt; </button>}
      </div>
    </div>
  );
}

export default Cards;





// {personaje.map(({id,nombre,estado,especie,origen,imagen,genero},index)=>{
//     const uniqueKey = `${id}_${index}`;
//     return <Card 
//     id={id}
//     key={uniqueKey}
//     nombre={nombre} 
//     estado={estado} 
//     especie={especie} 
//     origen={origen} 
//     imagen={imagen}
//     genero={genero}/>
// })}


// for (let i = 0; i < global; i++) {
//     const uniqueKey = `${personaje[0]["id"]}_${i}`;
//     return <Card 
//     id={personaje[i]["id"]}
//     key={uniqueKey}
//     nombre={personaje[i]["nombre"]} 
//     estado={personaje[i]["estado"]} 
//     especie={personaje[i]["especie"]} 
//     origen={personaje[i]["origen"]} 
//     imagen={personaje[i]["imagen"]}
//     genero={personaje[i]["genero"]}/>
    
// }


