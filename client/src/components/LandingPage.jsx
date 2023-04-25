import React from "react";
import { NavLink } from "react-router-dom";

const Landing = (props)=>{

    return(
        <>
            <h1>Componente Landing</h1>
            <NavLink to='/Home'>Home</NavLink>
        </>
    )
}


export default Landing;