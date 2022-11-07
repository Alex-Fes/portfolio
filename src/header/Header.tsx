import React from 'react';
import style from './Header.module.scss'
import Navigation from "../navigation/Navigation";

function Header() {
    return (
        <div className={style.header}>
            <h4>Portfolio</h4>
            <Navigation/>
        </div>
    )
}

export default Header;