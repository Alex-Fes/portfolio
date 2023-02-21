import React from 'react'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import facebook from '../../assets/image/facebook-svgrepo.svg'
import linkedin from '../../assets/image/linkedin-svgrepo-com.svg'

import style from './Mycontacts.module.scss'

export const MyContacts = () => {
  return (
    <div className={style.myContacts}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPhone} style={{ color: '#987750', marginRight: '7px' }} />
          <span>+381 61 6563152</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: '#987750', marginRight: '7px' }} />
          <span>aleksei.fesenko86@gmail.com</span>
        </li>
        <li>
          <img src={facebook} alt="facebook" />
          <a href="https://www.facebook.com/aleksei.fesenko.75">
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <img src={linkedin} alt="linkedin" />
          <a href="https://www.linkedin.com/in/oleksii-fes/">
            <span>Linkedin</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
