import React from 'react'

import { Fade } from 'react-awesome-reveal'

import myfoto from '../assets/image/myFoto1.jpg'
import styleContainer from '../common/styles/Container.module.scss'

import style from './Main.module.scss'

type mainObjType = {
  backgroundImage: string
}

function Main() {
  const myFoto: mainObjType = {
    backgroundImage: `url(${myfoto})`,
  }

  return (
    <div className={style.main}>
      <div className={`${styleContainer.container} ${style.mainContainer}`}>
        <Fade triggerOnce={true} direction={'left'}>
          <div className={style.text}>
            <span>Hi everyone!</span>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>I'm Aleksey Fesenko.</h1>
            <p>It`s my portfolio.</p>
            <p>I will be a front-end developer.</p>
          </div>
        </Fade>
        <Fade triggerOnce={true} direction={'right'}>
          <div style={myFoto} className={style.photo}></div>
        </Fade>
      </div>
    </div>
  )
}

export default Main
