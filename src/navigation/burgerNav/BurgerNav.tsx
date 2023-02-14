import React, { useState } from 'react'

import { Link } from 'react-scroll'

import style from './BurgerNav.module.scss'

function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false)
  const isOpenHandler = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div className={style.burgerNav}>
      <div className={isOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
        <Link
          activeClass={style.active}
          to="main"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={100}
          isDynamic={true}
        >
          Home
        </Link>
        <Link
          activeClass={style.active}
          to="aboutMe"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={100}
          isDynamic={true}
        >
          About
        </Link>
        <Link
          activeClass={style.active}
          to="projects"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={100}
          isDynamic={true}
        >
          Projects
        </Link>
        <Link
          activeClass={style.active}
          to="contacts"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-215}
          duration={500}
          delay={100}
          isDynamic={true}
        >
          Contact
        </Link>
      </div>

      <div
        className={isOpen ? `${style.burgerButton} ${style.active}` : style.burgerButton}
        onClick={isOpenHandler}
      >
        <span></span>
      </div>
      {/*<button className={style.navToggle}>*/}
      {/*  <span className={style.barTop}></span>*/}
      {/*  <span className={style.barMid}></span>*/}
      {/*  <span className={style.barBot}></span>*/}
      {/*</button>*/}
    </div>
  )
}

export default BurgerNav
