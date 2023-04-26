import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css"
const NavBar = (props)=>{
    return(
        <div className={style.fondo}>
            <NavLink to='/Home' className={style.navlink}>Home</NavLink>
            <NavLink to='/Form' className={style.navlink}>Form</NavLink>
        </div>
    )
}


export default NavBar;