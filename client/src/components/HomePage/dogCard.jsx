import React from "react";
import {Link} from 'react-router-dom';

const DogCard = ({imagen, name, temperaments, weight, id})=>{
    return(
        <>
            <Link to={`/dogDetail/${id}`}>
                <h3>{name}</h3>
            </Link>
            <img src={imagen} alt={`image of ${name}`} />
            <p>{temperaments}</p>
            <p>{weight}</p>
            <hr></hr>
            
        </>
    )
}


export default DogCard