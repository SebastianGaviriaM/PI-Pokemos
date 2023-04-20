import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props)=>{
    return(
        <>
            <h1>Componente NavBar</h1>
            <NavLink to='/Home'>Home</NavLink>
            <NavLink to='/Form'>Form</NavLink>
        </>
    )
}


export default NavBar;