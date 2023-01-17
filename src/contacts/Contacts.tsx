import React from 'react'

import Title from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import style from './Contacts.module.scss'

function Contacts() {
  return (
    <div id="contacts" className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Title text={'Contacts'} />
        <div className={style.secondContactsContainer}>
          <div className={style.myContacts}>
            <ul>
              <li>
                <h6>
                  <span>Phone</span>
                  <br />
                  <i></i>
                  <span>12121212</span>
                </h6>
              </li>
              <li>
                <h6>
                  <img src="" alt="" />
                  <span>email</span>
                  <br />

                  <span>example@gmail.com</span>
                </h6>
              </li>
              <li>
                <h6>
                  <span>facebook</span>
                  <br />
                  <i></i>
                  <span>address</span>
                </h6>
              </li>
              <li>
                <h6>
                  <span>linkedin</span>
                  <br />
                  <i></i>
                  <span>address</span>
                </h6>
              </li>
            </ul>
          </div>

          <div className={style.sendMeMessage}>
            <form className={style.formArea}>
              <input type="text" value={'Your name'} />
              <input type="text" value={'Your email'} />
              <textarea value={'Your message'} />
            </form>

            <div>
              <button type="submit" className={style.button}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
