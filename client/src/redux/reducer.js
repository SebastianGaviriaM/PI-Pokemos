import { GET_POKE, GET_POKE_DETAIL, GET_TYPES} from "./actions";


const initialState = {
    pokemons: [],
    pokDetail: {},
    types:[]
}


const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_POKE:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKE_DETAIL:
            return{
                ...state,
                pokDetail: action.payload
            }
    
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        default:
            return {...state};
    }
}

export default rootReducer;