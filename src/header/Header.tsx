import React from 'react'

import Navigation from '../navigation/Navigation'

import style from './Header.module.scss'

function Header() {
  return (
    <div id="header" className={style.header}>
      <h4>Portfolio</h4>
      <Navigation />
    </div>
  )
}

export default Header
