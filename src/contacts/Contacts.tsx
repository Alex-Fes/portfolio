import React from 'react'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from 'react-awesome-reveal'

import facebook from '../assets/image/facebook-svgrepo.svg'
import linkedin from '../assets/image/linkedin-svgrepo-com.svg'
import Title from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import style from './Contacts.module.scss'
function Contacts() {
  return (
    <div id="contacts" className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Fade triggerOnce={true} direction={'left'}>
          <Title text={'Contacts'} />
        </Fade>

        <div className={style.secondContactsContainer}>
          <Fade triggerOnce={true} direction={'left'}>
            <div className={style.myContacts}>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: '#987750', marginRight: '7px' }}
                  />
                  <span>+381 61 6563152</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: '#987750', marginRight: '7px' }}
                  />
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
          </Fade>
          {/*<EmailForm />*/}
          <Fade triggerOnce={true} direction={'right'}>
            <div className={style.sendMeMessage}>
              <form className={style.formArea}>
                <input type="text" placeholder={'Your name'} />
                <input type="email" placeholder={'Your email'} />
                <textarea placeholder={'Your message'} />
              </form>

              <div>
                <button type="submit" className={style.button}>
                  Send
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Contacts
