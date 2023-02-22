import React, { useState } from 'react'

import { TextField, ThemeProvider } from '@mui/material'
import { useFormik } from 'formik'

import { sendMessage } from '../api/gmailAPI'

import style from './EmailForm.module.scss'
import { theme } from './theme'

const validate = (values: FeedbackValuesType) => {
  const errors: FormikErrorType = {}

  if (values.name.length < 3) {
    errors.name = 'Too short name'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

export const EmailForm = () => {
  const [feedback, setFeedback] = useState<FeedbackType>('idle')
  const [isSending, setIsSending] = useState(true)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values: FeedbackValuesType) => {
      setIsSending(true)
      sendMessage.send(values).then(res => {
        setFeedback('succeeded')
        setIsSending(false)
        setTimeout(() => {
          setFeedback('idle')
        }, 4000)
      })
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <form className={style.emailForm} onSubmit={formik.handleSubmit}>
        <div className={style.itemsWrap}>
          <div className={style.items}>
            <div className={style.feedback}>
              <span className={feedback === 'succeeded' ? style.success : style.successHide}>
                Your message has been received, I will contact you soon.
              </span>
            </div>
            <div className={style.itemHalf}>
              <div className={style.inputWrapper}>
                <TextField
                  disabled={isSending}
                  fullWidth
                  className={'subvariant-hovered'}
                  id="name"
                  name="name"
                  label={formik.errors.name && formik.touched.name ? formik.errors.name : 'Name *'}
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && !!formik.errors.name}
                />
              </div>
              <div className={style.inputWrapper}>
                <TextField
                  disabled={isSending}
                  fullWidth
                  className={'subvariant-hovered'}
                  id="email"
                  name="email"
                  label={
                    formik.errors.email && formik.touched.email ? formik.errors.email : 'Email *'
                  }
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && !!formik.errors.email}
                />
              </div>
            </div>
            <div className={style.item}>
              <textarea
                disabled={isSending}
                id={'message'}
                placeholder="Message"
                {...formik.getFieldProps('message')}
              />
            </div>
            <div className={isSending ? style.disabledSendMessage : style.sendMessage}>
              <button disabled={isSending} className={style.button} type={'submit'}>
                Send message
              </button>
            </div>
          </div>
        </div>
      </form>
    </ThemeProvider>
  )
}

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
