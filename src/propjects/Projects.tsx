import React from 'react'

import { Fade } from 'react-awesome-reveal'

import Title from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import socialImage from './../assets/image/socialNetwork.jpg'
import todoImage from './../assets/image/todolist.jpg'
import Project from './project/Project'
import style from './Projects.module.scss'
export type styleObjType = {
  backgroundImage: string
  title: string
  description: string
}

function Projects() {
  const socialNetwork: styleObjType = {
    backgroundImage: `url(${socialImage})`,
    title: 'Social Network',
    description:
      'text description text description text description text description text description',
  }
  const todolist: styleObjType = {
    backgroundImage: `url(${todoImage})`,
    title: 'Todolist',
    description:
      'Sed ornare tellus a odio bibendum, at tristique sapien malesuada. ' +
      'Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra,' +
      ' per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      ' Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, ' +
      'commodo eget orci. Proin vel hendrerit ex.',
  }

  return (
    <div id="projects" className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectContainer}`}>
        <Fade triggerOnce={true} direction={'left'}>
          <Title text={'Projects'} />
        </Fade>

        <div className={style.projects}>
          <Fade triggerOnce={true} direction={'left'}>
            <Project style={socialNetwork} />
          </Fade>
          <Fade triggerOnce={true} direction={'right'}>
            <Project style={todolist} />
          </Fade>
          {/*<Fade triggerOnce={false} direction={'right'}>*/}
          {/*  <Project style={todolist} />*/}
          {/*</Fade>*/}
        </div>
      </div>
    </div>
  )
}

export default Projects
