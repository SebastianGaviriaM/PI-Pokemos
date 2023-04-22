import { GET_POKE} from "./actions";


const initialState = {
    pokemons: [],
    pokDetail: {},
}


const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_POKE:
            return {
                ...state,
                pokemons: action.payload
            }
        // case GET_DOG_DETAIL:
        //     return{
        //         ...state,
        //         detail: action.payload
        //     }
    
        default:
            return {...state};
    }
}

export default rootReducer;