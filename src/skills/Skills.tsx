import React, { useState } from 'react'

import { Fade } from 'react-awesome-reveal'

import { Title } from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import { BackgroundComponent } from './background/BackgroundComponent'
import {
  css,
  educationExp,
  html,
  incubatorStudy,
  instituteStudy,
  javaScript,
  partTimeExp,
  react,
  redux,
  typescript,
} from './data/backgroundData'
import { InfoSkill } from './infoSkill/InfoSkill'
import style from './Skills.module.scss'

type AboutStateType = 'experience' | 'education' | 'skills'

function Skills() {
  const [aboutPage, setAboutPage] = useState<AboutStateType>('experience')

  const onSkillShowHandler = () => {
    setAboutPage('skills')
  }
  const onEducationShowHandler = () => {
    setAboutPage('education')
  }
  const onExperienceShoeHandler = () => {
    setAboutPage('experience')
  }

  const activeStyle = {
    borderBottomColor: '#987750',
    textDecoration: 'none',
    color: '#987750',
  }

  return (
    <div id="aboutMe" className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Fade triggerOnce={true} direction={'left'}>
          <Title text={'About me'} />
        </Fade>
        <Fade triggerOnce={true} direction={'right'}>
          <div className={style.tabHeader}>
            <ul>
              <li>
                <span
                  style={aboutPage === 'experience' ? activeStyle : {}}
                  onClick={onExperienceShoeHandler}
                >
                  Experience
                </span>
              </li>
              <li>
                <span
                  style={aboutPage === 'education' ? activeStyle : {}}
                  onClick={onEducationShowHandler}
                >
                  Education
                </span>
              </li>
              <li>
                <span
                  style={aboutPage === 'skills' ? activeStyle : {}}
                  onClick={onSkillShowHandler}
                >
                  Skills
                </span>
              </li>
            </ul>
          </div>
        </Fade>

        {aboutPage === 'experience' && (
          <div id="experience" className={style.backgroundBox}>
            <ul>
              <li>
                <Fade delay={100} triggerOnce={true}>
                  <BackgroundComponent value={partTimeExp} />
                </Fade>
              </li>
              <li>
                <Fade delay={200} triggerOnce={true}>
                  <BackgroundComponent value={educationExp} />
                </Fade>
              </li>
            </ul>
          </div>
        )}

        {aboutPage === 'education' && (
          <div id="education" className={style.backgroundBox}>
            <ul>
              <li>
                <Fade delay={100} triggerOnce={true}>
                  <BackgroundComponent value={incubatorStudy} />
                </Fade>
              </li>
              <li>
                <Fade delay={200} triggerOnce={true}>
                  <BackgroundComponent value={instituteStudy} />
                </Fade>
              </li>
            </ul>
          </div>
        )}

        {aboutPage === 'skills' && (
          // <Fade className={style.skills} triggerOnce={true}>
          <div id="skills" className={style.skills}>
            <InfoSkill title={'HTML'} style={html} />
            <InfoSkill title={'CSS'} style={css} />
            <InfoSkill title={'JAVASCRIPT'} style={javaScript} />
            <InfoSkill title={'REACT'} style={react} />
            <InfoSkill title={'REDUX'} style={redux} />
            <InfoSkill title={'TYPESCRIPT'} style={typescript} />
          </div>
          // </Fade>
        )}
      </div>
    </div>
  )
}

export default Skills
