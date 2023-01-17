import React from 'react'

import { styleSocialObjType } from '../Footer'

import style from './SocialMedia.module.scss'

export type SocialMediaType = {
  data: styleSocialObjType
  // url: string
}

function SocialMedia(props: SocialMediaType) {
  return (
    <div className={style.social}>
      <a href={props.data.url}>
        <div className={style.icon}>
          <img
            src={props.data.backgroundImage}
            // style={{backgroundImage: props.data.backgroundImage}}
            alt=""
          />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
