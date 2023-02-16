import React from 'react'

import { styleObjType } from '../projectsData'

import style from './Project.module.scss'

type ProjectPropsType = {
  style: styleObjType
}

function Project(props: ProjectPropsType) {
  return (
    <a
      style={{ backgroundImage: props.style.backgroundImage }}
      href={props.style.url}
      target="_blank"
      className={style.projectItem}
      rel="noreferrer"
    >
      <div className={style.projectInfo}>
        <div className={style.projectTitle}>{props.style.title}</div>
        <span className={style.projectDescription}>{props.style.description}</span>
      </div>
    </a>
  )
}

export default Project
