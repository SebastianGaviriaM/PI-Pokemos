import axios from 'axios';

export const GET_POKE = "GET_POKE";
export const GET_POKE_DETAIL = "GET_POKE_DETAIL";
export const GET_TYPES = "GET_TYPES";

export const getPoke = () => {

    return function (dispatch) {
        axios.get('http://localhost:3001/pokemon').then(response=>dispatch({type: GET_POKE, payload:response.data}))

    };

};

export const getPokDetail = (id) =>{
    return function (dispatch){
        axios.get(`http://localhost:3001/pokemon/${id}`).then(response=>dispatch({type: GET_POKE_DETAIL, payload:response.data}));
    }
}


export const getTypes = () =>{
    return function (dispatch) {
        axios.get(`http://localhost:3001/type`).then(response=>dispatch({type: GET_TYPES, payload:response.data.resultados}))
    };
}