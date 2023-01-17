import React from 'react'

import styleContainer from '../common/styles/Container.module.scss'

import style from './Hire.module.scss'

function Hire() {
  return (
    <div className={style.hireBlock}>
      <div className={`${styleContainer.container} ${style.hireContainer}`}>
        <h2 className={style.title}>I am available for Freelance</h2>
        <button className={style.hireBtn}>Hire me</button>
      </div>
    </div>
  )
}

export default Hire
