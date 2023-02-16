import React from 'react'

import { Title } from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import Project from './project/Project'
import style from './Projects.module.scss'
import { learningCards, socialNetwork, todolist } from './projectsData'

function Projects() {
  return (
    <div id="projects" className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectContainer}`}>
        <Title text={'Projects'} />

        <div className={style.projects}>
          <Project style={socialNetwork} />

          <Project style={todolist} />

          <Project style={learningCards} />
        </div>
      </div>
    </div>
  )
}

export default Projects
