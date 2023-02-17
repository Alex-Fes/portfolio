import React, { useState } from 'react'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'

import facebook from '../assets/image/facebook-svgrepo.svg'
import linkedin from '../assets/image/linkedin-svgrepo-com.svg'
import { Title } from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.scss'

import style from './Contacts.module.scss'

export type FeedbackValuesType = {
  name: string
  email: string
  message: string
}
export type FormikErrorType = {
  name?: string
  email?: string
  message?: string
}

type FeedbackType = 'idle' | 'error' | 'succeeded'
function Contacts() {
  const [feedback, setFeedback] = useState<FeedbackType>('idle')

  const validate = (values: FeedbackValuesType) => {
    const errors: FormikErrorType = {}

    if (values.name.length < 3) {
      errors.name = 'Too short name'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (values.message.length < 5) {
      errors.message = 'Too short message'
    }
    // if (errors) {
    //   setFeedback('error')
    //   setTimeout(() => {
    //     setFeedback('idle')
    //   }, 2000)
    // }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values: FeedbackValuesType) => {
      console.log(values)

      setFeedback('succeeded')
      setTimeout(() => {
        setFeedback('idle')
      }, 2000)
    },
  })

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

          <form className={style.emailForm} onSubmit={formik.handleSubmit}>
            <div className={style.itemsWrap}>
              <div className={style.items}>
                <div className={style.feedback}>
                  <span className={feedback === 'error' ? style.error : style.errorHide}>
                    Please Fill Required Fields!
                  </span>

                  <span className={feedback === 'succeeded' ? style.success : style.successHide}>
                    Your message has been received, we will contact you soon.
                  </span>
                </div>
                <div className={style.itemHalf}>
                  <div className={style.inputWrapper}>
                    <input
                      autoComplete="off"
                      id={'name'}
                      type="text"
                      placeholder="Name *"
                      {...formik.getFieldProps('name')}
                    />
                  </div>
                  <div className={style.inputWrapper}>
                    <input
                      autoComplete="off"
                      id={'email'}
                      type="text"
                      placeholder="Email *"
                      {...formik.getFieldProps('email')}
                    />
                  </div>
                </div>
                <div className={style.item}>
                  <textarea
                    id={'message'}
                    placeholder="Message"
                    {...formik.getFieldProps('message')}
                  />
                </div>
                <div className={style.sendMessage}>
                  <button type={'submit'}>Send message</button>
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
