import React from 'react'

import style from './Navigation.module.scss'

function Navigation() {
  return (
    <div className={style.main}>
      <a href="#">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contacts">Contact</a>
    </div>
  )
}

export default Navigation
