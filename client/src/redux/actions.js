import axios from 'axios';

export const GET_POKE = "GET_POKE";
// export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
// export const CREATE_DOG = "CREATE_DOG";

export const getPoke = () => {

    return function (dispatch) {
        axios.get('http://localhost:3001/pokemon').then(response=>dispatch({type: GET_POKE, payload:response.data}))

    };

};

export const getDogDetail = (id) =>{
    // return function (dispatch){
    //     axios.get(`http://localhost:3001/dogs/${id}`).then(response=>dispatch({type: GET_DOG_DETAIL, payload:response.data}));
    // }
}


export const createDog = (user) =>{
    return {};
}