import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDogDetail } from "../redux/actions";

function Detail() {
    const { id } = useParams();
    const {name, image, height, weight, years, temperament} = useSelector(state => state.detail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogDetail(id));
    }, [id, dispatch]);

    return (<>
            <p>Name:{name}</p>
            <p>Image: </p><img src={image}></img>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Years: {years}</p>
            <p>Temperaments: {temperament}</p>
    </>
    );
}



export default Detail;
