import React from 'react'

import style from './Navigation.module.scss'

function Navigation() {
  return (
    <div className={style.main}>
      <a href="#">Home</a>
      <a href="#aboutMe">About</a>
      <a href="#projects">Projects</a>
      <a href="#contacts">Contact</a>
    </div>
  )
}

export default Navigation
