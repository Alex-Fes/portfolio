import React from 'react';
import style from './Navigation.module.css'

function Navigation() {
    return (
        <div className={style.main}>

            <a href='#' >About</a>
            <a href='#' >Contact</a>
            <a href='#' >Projects</a>
            <a href='#' >Skills</a>
        </div>
    )
}

export default Navigation;