import {AGREGAR_PERSONAJE,ELIMINAR_PERSONAJE,AGREGAR_USUARIO,ELIMINAR_FAVORITO,AGREGAR_FAVORITO,ACTUALIZAR_FAVORITOS,ACTUALIZAR_PERSONAJES} from "./actions";

const initialState = {
    personajes: [],
    favoritos: [],
    usuario: []
}

function reducer(state = initialState, {type, payload}){
    switch(type){
        case AGREGAR_PERSONAJE: return { ...state, personajes: payload}

        case ELIMINAR_PERSONAJE: return { ...state, personajes: payload}

        case AGREGAR_USUARIO: return { ...state, usuario: payload} 

        case AGREGAR_FAVORITO: return {...state, favoritos: payload}

        case ELIMINAR_FAVORITO: return {...state, favoritos: payload}
        
        case ACTUALIZAR_FAVORITOS: return {...state, favoritos: payload}

        case ACTUALIZAR_PERSONAJES: return {...state, personajes: payload}

        default:
            return {...state}
                
    }
}

export default reducer;