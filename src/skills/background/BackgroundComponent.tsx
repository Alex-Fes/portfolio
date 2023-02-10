import React from 'react'

import { bgDescription } from '../data/backgroundData'

import s from './BackgroundComponent.module.scss'

type BackgroundPropsType = {
  value: bgDescription
}

export const BackgroundComponent = (props: BackgroundPropsType) => {
  return (
    <div className={s.item}>
      <div className={s.itemTop}>
        <h5>{props.value.name}</h5>

        <span>
          ( {props.value.startYear} - {props.value.endYear} )
        </span>
      </div>

      <h3>{props.value.title}</h3>

      <p>{props.value.description}</p>
    </div>
  )
}
