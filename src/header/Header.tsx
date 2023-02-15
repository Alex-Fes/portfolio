import React from 'react'

import BurgerNav from '../navigation/burgerNav/BurgerNav'
import Navigation from '../navigation/Navigation'

import style from './Header.module.scss'

function Header() {
  return (
    <div id="header" className={style.header}>
      <Navigation />
      <BurgerNav />
    </div>
  )
}

export default Header
