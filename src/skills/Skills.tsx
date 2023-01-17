import React from 'react'

import cssImg from '../assets/image/css-file.svg'
import htmlImg from '../assets/image/html5.svg'
import jsImg from '../assets/image/js.svg'
import reactImg from '../assets/image/react.svg'
import reduxImg from '../assets/image/redux1.svg'
import storybookImg from '../assets/image/storybook.svg'
import Title from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import { InfoSkill } from './infoSkill/InfoSkill'
import style from './Skills.module.scss'

export type skillObjType = {
  backgroundImage: string
  width: number
  description: string
}

function Skills() {
  const html: skillObjType = {
    backgroundImage: `${htmlImg}`,
    width: 90,
    description:
      'Description Description Description Description Description Description ' +
      'Description Description Description Description Description' +
      ' Description Description Description Description Description Description Description',
  }
  const css: skillObjType = {
    backgroundImage: `${cssImg}`,
    width: 92,

    description:
      'Description Description Description Description Description Description ' +
      'Description Description Description Description Description' +
      ' Description Description Description Description Description Description Description',
  }
  const javaScript: skillObjType = {
    backgroundImage: `${jsImg}`,
    width: 85,
    description:
      'Description Description Description Description Description Description ' +
      'Description Description Description Description Description' +
      ' Description Description Description Description Description Description Description',
  }
  const react: skillObjType = {
    backgroundImage: `${reactImg}`,
    width: 95,
    description:
      'Description Description Description Description Description Description ' +
      'Description Description Description Description Description' +
      ' Description Description Description Description Description Description Description',
  }
  const redux: skillObjType = {
    backgroundImage: `${reduxImg}`,
    width: 92,
    description:
      'Description Description Description Description Description Description ' +
      'Description Description Description Description Description' +
      ' Description Description Description Description Description Description Description',
  }
  const storybook: skillObjType = {
    backgroundImage: `${storybookImg}`,
    width: 80,
    description:
      'Description Description Description Description Description Description ' +
      'Description Description Description Description Description' +
      ' Description Description Description Description Description Description Description',
  }

  return (
    <div id="skills" className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title text={'Skills'} />

        <InfoSkill title={'HTML'} style={html} />
        <InfoSkill title={'CSS'} style={css} />
        <InfoSkill title={'JavaScript'} style={javaScript} />
        <InfoSkill title={'React'} style={react} />
        <InfoSkill title={'Redux'} style={redux} />
        <InfoSkill title={'Storybook'} style={storybook} />
      </div>
    </div>
  )
}

export default Skills
