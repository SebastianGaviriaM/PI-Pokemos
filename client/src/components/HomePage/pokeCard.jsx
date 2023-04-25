import React from "react";
import {Link} from 'react-router-dom';

const PokeCard = ({imagen, name, types, id})=>{
    return(
        <>
            <Link to={`/pokeDetail/${id}`}>
                <h3>{name}</h3>
            </Link>
            <img src={imagen} alt={`image of ${name}`} />
            {types.map(type=>type)}
            <hr></hr>
            
        </>
    )
}


export default PokeCard;