import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css"
const Landing = (props)=>{

    return(
        <div className={style.fondo}>
            <div className={style.fondotitulo}>
                <h1 className={style.titulo}>Bienvenido al PI de Pokemon!</h1>
                <NavLink to='/Home' className={style.link}><h2>Ingresar</h2></NavLink>
            </div>
        </div>
    )
}


export default Landing;