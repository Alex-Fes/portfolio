import React from 'react'

import { Fade } from 'react-awesome-reveal'

import { skillObjType } from '../data/backgroundData'

import style from './InfoSkill.module.scss'

type InfoSkillPropsType = {
  title: string
  style: skillObjType
}

export function InfoSkill(props: InfoSkillPropsType) {
  return (
    <div className={style.infographic}>
      <div className={style.skillBar}>
        <div className={style.progressItem}>
          <div className={style.itemIn}>
            <Fade>
              <h3>{props.title}</h3>
              <div style={{ width: `${props.style.width}%` }} className={style.percent}>
                <span>{`${props.style.width} %`}</span>
              </div>
            </Fade>
          </div>
          <Fade>
            <div className={style.bgWrap}>
              <div className={style.progressBg} style={{ width: `${props.style.width}%` }}></div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
