import React from 'react'

import { Grid } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

import fbImg from '../assets/image/facebook.svg'
import gitImg from '../assets/image/github.svg'
import linkedinImg from '../assets/image/linkedin-social.svg'
import twiImg from '../assets/image/twitter-social.svg'
import { Copyright } from '../common/components/Copyright/Copyright'
import styleContainer from '../common/styles/Container.module.scss'

import styles from './Footer.module.scss'
import SocialMedia from './socialMedia/SocialMedia'

export type styleSocialObjType = {
  backgroundImage: string
  // padding: string
  // boxSizing: string
  url: string
}

function Footer() {
  const facebook: styleSocialObjType = {
    backgroundImage: fbImg,
    // padding: `15px`,
    // boxSizing: `borderBox`,
    url: 'https://www.facebook.com/aleksei.fesenko.75/',
  }
  const twitter: styleSocialObjType = {
    backgroundImage: twiImg,
    // padding: '15px',
    // boxSizing: 'border-box',
    url: 'https://twitter.com/Fesenich1',
  }
  const gitHub: styleSocialObjType = {
    backgroundImage: gitImg,
    // padding: '15px',
    // boxSizing: 'border-box',
    url: 'https://github.com/Alex-Fes',
  }
  const linkedin: styleSocialObjType = {
    backgroundImage: linkedinImg,
    // padding: '15px',
    // boxSizing: 'border-box',
    url: 'https://www.linkedin.com/in/oleksii-fes/',
  }

  return (
    <Grid>
      <div className={styles.footerBlock}>
        <div className={`${styleContainer.container} ${styles.footerContainer}`}>
          <Fade triggerOnce={false} direction={'up'}>
            <div className={styles.footer}>
              <SocialMedia data={facebook} />
              <SocialMedia data={twitter} />
              <SocialMedia data={gitHub} />
              <SocialMedia data={linkedin} />
            </div>
            <Copyright sx={{ mt: 3 }} />
          </Fade>
        </div>
      </div>
    </Grid>
  )
}

export default Footer
