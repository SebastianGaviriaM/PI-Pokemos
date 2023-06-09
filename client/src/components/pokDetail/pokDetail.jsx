import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokDetail } from "../../redux/actions";
import styles from "./pokDetail.module.css"
function PokDetail() {
    const { id } = useParams();
    const {name, image, height, weight, health, attack, defense, speed, types} = useSelector(state => state.pokDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokDetail(id));
    }, [id, dispatch]);

    if (types===undefined) {
        return <div>Cargando el pokemon...</div>;
    }

    console.log(types);

    return (
    <div className={styles.fondo}>
        <div className={styles.detail} >
            <p>Name: {name}</p>
            <p>Image: </p><img src={image}></img>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Health: {health}</p>
            <p>Attack: {attack}</p>
            <p>defense: {defense}</p>
            <p>speed: {speed}</p>
            <p>tipos:</p>
            {types.map(type=><p>{type}</p>)}
        </div>
            
    </div>
    );
}



export default PokDetail;
