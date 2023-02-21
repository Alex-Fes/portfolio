import React from 'react'

import { Title } from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import style from './Contacts.module.scss'
import { EmailForm } from './emailForm/EmailForm'
import { MyContacts } from './myContacts/MyContacts'

function Contacts() {
  return (
    <div id="contacts" className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Title text={'Get In Touch'} />
        <div className={style.secondContactsContainer}>
          <MyContacts />
          <EmailForm />
        </div>
      </div>
    </div>
  )
}

export default Contacts
