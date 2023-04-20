import axios from 'axios';

// export const GET_DOGS = "GET_DOGS";
// export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
// export const CREATE_DOG = "CREATE_DOG";

export const getDogs = () => {

    // return function (dispatch) {
    //     axios.get('http://localhost:3001/dogs').then(response=>dispatch({type: GET_DOGS, payload:response.data}))

    // };

};

export const getDogDetail = (id) =>{
    // return function (dispatch){
    //     axios.get(`http://localhost:3001/dogs/${id}`).then(response=>dispatch({type: GET_DOG_DETAIL, payload:response.data}));
    // }
}


export const createDog = (user) =>{
    return {};
}