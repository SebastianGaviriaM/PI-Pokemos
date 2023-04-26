import React from "react";
import {Link} from 'react-router-dom';
import styles from "./pokeCard.module.css"
const PokeCard = ({imagen, name, types, id})=>{
    return(
        <div className={styles.fondo}>
            <Link to={`/pokeDetail/${id}`}>
                <h3>{name}</h3>
            </Link>
            <img src={imagen} alt={`image of ${name}`} className={styles.imagen}/>
            <div>
                <p>Types:</p>
                <p>{types.map(type=><span>{type} </span>)}</p>
            </div>
  
        </div>
    )
}


export default PokeCard;