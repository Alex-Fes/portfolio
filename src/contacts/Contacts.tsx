import React from 'react'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import facebook from '../assets/image/facebook-svgrepo.svg'
import linkedin from '../assets/image/linkedin-svgrepo-com.svg'
import { Title } from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import style from './Contacts.module.scss'

function Contacts() {
  return (
    <div id="contacts" className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Title text={'Get In Touch'} />

        <div className={style.secondContactsContainer}>
          <div className={style.myContacts}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} style={{ color: '#987750', marginRight: '7px' }} />
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

          <form action="" className={style.emailForm}>
            <div className={style.itemsWrap}>
              <div className={style.items}>
                <div className={style.itemHalf}>
                  <div className={style.inputWrapper}>
                    <input name={'name'} id={'name'} type="text" placeholder="Name *" />
                  </div>
                  <div className={style.inputWrapper}>
                    <input name={'email'} id={'email'} type="text" placeholder="Email *" />
                  </div>
                </div>
                <div className={style.item}>
                  <textarea name="message" id={'message'} placeholder="Message"></textarea>
                </div>
                <div className={style.sendMessage}>
                  <a>
                    <span>Send message</span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
