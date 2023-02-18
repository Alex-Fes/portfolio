import React from 'react'

import { Link } from 'react-scroll'
import ReactTypingEffect from 'react-typing-effect'

// @ts-ignore
import cv from '../assets/CV/CV-front-end.pdf'
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
  // const square = {
  //   backgroundImage: `url(${squareImg})`,
  // }

  return (
    <div id="main" className={style.main}>
      <div className={`${styleContainer.container} ${style.mainContainer}`}>
        <div className={style.text}>
          <h1>Frontend Developer</h1>

          <p>
            I create, develop and maintain projects of all sizes and directions. I specialize in
            creating projects using React, TypeScript and Redux state manager. I focus on new
            technologies, libraries and web services.
          </p>
          {/*<div className={style.signature}>/!*<img src={signature} alt="signature" />*!/</div>*/}

          <div className={style.downloadCV}>
            <a href={cv} download="">
              <span className={style.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 449.306 449.306"
                  xmlSpace="preserve"
                  className={style.boxSvg}
                >
                  <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 449.306 449.306"
                  xmlSpace="preserve"
                  className={style.arrowSvg}
                >
                  <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z"></path>
                </svg>
              </span>
              <span>Download CV</span>
            </a>
          </div>
        </div>
        <div className={style.photoBox}>
          <div className={style.photoHolder}>
            <div className={style.border1}></div>
            <div className={style.border2}></div>

            <div style={myFoto} className={style.img_holder}></div>

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
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={100}
              isDynamic={true}
            >
              <span className={style.circle}></span>
              <span className={style.spanText}>I’m available for job. Hire me</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
