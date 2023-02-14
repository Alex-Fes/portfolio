import React from 'react'

import { Link } from 'react-scroll'

import style from './Navigation.module.scss'

function Navigation() {
  return (
    <div className={style.main}>
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
  )
}

export default Navigation
