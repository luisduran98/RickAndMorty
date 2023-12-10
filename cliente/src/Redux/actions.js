import axios from "axios";

export const AGREGAR_PERSONAJE = "AGREGAR_PERSONAJE";
export const ELIMINAR_PERSONAJE = "ELIMINAR_PERSONAJE";
export const AGREGAR_USUARIO = "AGREGAR_USUARIO";
export const AGREGAR_FAVORITO = "AGREGAR_FAVORITO";
export const ELIMINAR_FAVORITO = "ELIMINAR_FAVORITO";
export const ACTUALIZAR_FAVORITOS ="ACTUALIZAR-FAVORITOS";
export const ACTUALIZAR_PERSONAJES = "ACTUALIZAR_PERSONAJES";

export function addPersonaje(id,user){
    const URL = `http://localhost:3001/personajes`
   return async (dispatch)=>{
      try{
         const {data} = await axios.post(URL,{id:id, user:user});
         return dispatch({
            type: AGREGAR_PERSONAJE,
            payload: data
                })
      }catch(error){
         return window.alert("hola")
      }
   }
}

export function actualizarPersonajes(personajes){
   return{
      type: ACTUALIZAR_PERSONAJES,
      payload: personajes
   }
}


export function eliminar(id,user) {
   const URL = `http://localhost:3001/personajes?id=${id}&user=${user}`
   return async (dispatch)=>{
      try{
         const {data} = await axios.delete(URL);
         return dispatch({
            type: ELIMINAR_PERSONAJE,
            payload: data
                })
      }catch(error){
         return window.alert(error.message)
      }
   }
  }


export function usuario(id){
   return {
      type: AGREGAR_USUARIO,
      payload: id
   }
}

export function agregarFav({id,nombre,estado,especie,imagen,origen,idUsuario,genero}){
   const URL = `http://localhost:3001/favorite`
   return async (dispatch)=>{
      try{
         const {data} = await axios.post(`${URL}`,{id,nombre,estado,especie,imagen,origen,genero,idUsuario});
         return dispatch({
            type: AGREGAR_FAVORITO,
            payload: data
                });
      }catch(error){
         return window.alert('No logre agregar el favorito')
      }
   }
}

export function eliminarFav(favID,userID){
   const URL = `http://localhost:3001/favorite?userId=${userID}&favId=${favID}`
   return async (dispatch)=>{
      try{
         const {data} = await axios.delete(`${URL}`);
         return dispatch({
            type: ELIMINAR_FAVORITO,
            payload: data
                });
      }catch(error){
         return window.alert('No logre eliminar el favorito')
      }
   }
}

export function actualizarFavoritos(favoritos){
   return{
      type: ACTUALIZAR_FAVORITOS,
      payload: favoritos
   }
}

