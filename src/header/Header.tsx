import React from 'react';
import style from './Header.module.css'
import Navigation from "../navigation/Navigation";

function Header() {
    return (
        <div className={style.header}>
            Portfolio
            <Navigation/>
        </div>
    )
}

export default Header;