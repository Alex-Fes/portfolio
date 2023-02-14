import React from 'react'

import { Fade } from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect'

import myfoto from '../assets/image/myFoto1.jpg'
import squareImg from '../assets/image/square.jpg'
import styleContainer from '../common/styles/Container.module.scss'

import style from './Main.module.scss'

type mainObjType = {
  backgroundImage: string
  // width: string
  // height: string
}

function Main() {
  const myFoto: mainObjType = {
    backgroundImage: `url(${myfoto})`,
    // width: '300px',
    // height: '300px',
  }
  const square = {
    backgroundImage: `url(${squareImg})`,
  }

  return (
    <div id="main" className={style.main}>
      <div className={`${styleContainer.container} ${style.mainContainer}`}>
        <Fade triggerOnce={true} direction={'left'}>
          <div className={style.text}>
            {/*<span>Hi everyone!</span>*/}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>Frontend Developer</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore molestiae non
              possimus! Asperiores, at consequuntur debitis deleniti doloribus fuga fugit iusto
              labore laborum odit officiis porro quisquam, suscipit tempora!
            </p>
          </div>
        </Fade>

        <Fade triggerOnce={true} direction={'right'}>
          <div className={style.photoBox}>
            <div className={style.photoHolder}>
              <div className={style.border1}></div>
              <div className={style.border2}></div>

              <div className={style.img_holder}>
                <img src="" alt="" />
                <div style={myFoto} className={style.image}></div>
              </div>

              <div className={style.title_holder}>
                <h5>Hi there! I AM</h5>

                <h3>
                  <span>
                    <ReactTypingEffect
                      speed={150}
                      eraseSpeed={100}
                      text={['Aleksei Fesenko', 'Frontend Developer', 'Freelancer']}
                    />
                  </span>
                </h3>
              </div>
            </div>
            <div className={style.contact_me}>
              <a href="#contacts">
                <span className={style.circle}></span>
                <span className={style.spanText}>I’m available for a freelance job. Hire me</span>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Main
