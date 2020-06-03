import { 
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOSITORY,
    GET_USER
} from '../types'

/* 
    A função do "ContextReducer" é receber os dados do "ContextState" (que nesse cáso é do Github)
    e realizar a alteração dos status de acordo com o tipo de ação que virá no "dispatch" (os tipos 
    são importados aqui) e irá retorna a alteração feita dentro do "ContextReducer" para "ContextState".
*/

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER: 
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_REPOSITORY:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }
}